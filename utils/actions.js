"use server";

import prisma from "@/utils/db";

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
      id: parseInt(id),
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
};
