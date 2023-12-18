import BlogList from "@/components/BlogList";
import HeroLink from "@/components/HeroLink";

export default function Home() {
  return (
    <>
      <section className="flex flex-col min-h-[70vh] justify-center items-center w-full rounded-md">
        <h1 className="font-workSans text-6xl font-medium text-center md:text-7xl">
          A few layouts for a blog.
        </h1>
        <p className="mt-10 text-2xl text-center">
          This is a demo of a few layouts for a blog.
          <span className="md:block">
            {" "}
            Meet our team, read our blog, and create a post.
          </span>
        </p>
        <HeroLink />
      </section>

      <BlogList limitPosts={3} />
    </>
  );
}
