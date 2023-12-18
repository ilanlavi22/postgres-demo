import NextAuth from "next-auth";
import prisma from "@/utils/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import bcrypt from "bcrypt";

export const authOptions = {
  adapter: PrismaAdapter(prisma),

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",

      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "johndoe@exmaple.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
        username: {
          label: "Username",
          type: "text",
          placeholder: "john doe",
        },
      },

      async authorize(credentials) {
        // const user = {id:1, name: "John Doe", email: credentials.email};
        // return user;

        // check to see if email and password is there
        if (!credentials.email || !credentials.password) {
          throw new Error("Please enter an email and password");
        }
        // check to see if user exists
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        // if no user was found

        if (!user || !user?.hashedPassword) {
          throw new Error("No user found");
        }

        // check to see if password matches

        const passwordsMatch = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        // if passwords don't match

        if (!passwordsMatch) {
          throw new Error("Incorrect password");
        }
        return user;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, trigger, session }) {
      if (trigger === "update" && session?.name) {
        token.name = session.name;
      }

      return token;
    },
  },

  pages: {
    signIn: "/signin",
  },

  debug: process.env.NODE_ENV === "development",

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const authHandler = NextAuth(authOptions);
export { authHandler as GET, authHandler as POST };
