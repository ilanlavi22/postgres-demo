"use server";

import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getAllPosts = async () => {
  return prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      author: true,
    },
  });
};

// get post by id
// single post

export const getSinglePost = async (id) => {
  return prisma.post.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      author: true,
    },
  });
};

// get author by id

export const getAuthorById = async (id) => {
  return prisma.user.findUnique({
    where: {
      id: text(id),
    },
    include: {
      posts: true,
    },
  });
};

// create post

export const createPost = async (formData) => {
  const title = formData.get("title");
  const content = formData.get("content");
  const authorId = formData.get("authorId");

  await prisma.post.create({
    data: {
      title: title,
      content: content,
      authorId: parseInt(authorId),
    },
  });
  revalidatePath("/");
  redirect("/");
};

// edit post

export const editPost = async (formData) => {
  const id = formData.get("id");
  const title = formData.get("title");
  const content = formData.get("content");
  const authorId = formData.get("authorId");

  await prisma.post.update({
    where: {
      id: parseInt(id),
    },
    data: {
      title: title,
      content: content,
      authorId: parseInt(authorId),
    },
  });
  redirect(`/posts/${id}`);
};

// delete post

export const deletePost = async (formData) => {
  const id = formData.get("id");

  await prisma.post.delete({
    where: {
      id: parseInt(id),
    },
  });

  revalidatePath("/posts");
  redirect(`/posts`);
};
