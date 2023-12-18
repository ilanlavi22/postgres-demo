import { inter, workSans } from "@/utils/fonts";
import "./globals.css";
import Provider from "@/components/ThemeProvider";
import { getServerSession } from "next-auth/next";
import authOptions from "@/app/api/auth/[...nextauth]/route";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Postgres and Prisma in Next.js",
  description: "A starter template for Next.js with Prisma and Postgres",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${workSans.variable} h-full scroll-smooth antialiased scroll-pt-56`}
    >
      <body
        className={`${inter.className} w-full bg-gray-100 grid min-h-screen grid-rows-[auto,1fr,auto] transition-all duration-75 ease-in-out overflow-x-hidden`}
      >
        <Provider>
          <Header session={session} />
          <main
            className="flex flex-col w-full max-w-7xl mx-auto mt-[6.25rem] px-6 pb-20 md:px-8 transition-all duration-75 ease-in-out dark:bg-black"
            session={session}
          >
            {children}
          </main>

          <Footer />
        </Provider>
      </body>
    </html>
  );
}
