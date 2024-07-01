import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getUsers = async () => {
  const result = await prisma.user.findMany();
  return result;
};

const getUserPosts = async (userId) => {
  const result = await prisma.post.findMany({
    where: {
      userId,
    },
  });
  return result;
};

const getUser = async (id) => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      profile: true,
    },
  });
  return result;
};

const updatePost = async (id) => {
  const result = await prisma.post.update({
    where: {
      id,
    },
    data: {
      content: "The content is updated",
    },
  });

  return result;
};

const deletePost = async (id) => {
  const result = await prisma.post.delete({
    where: {
      id,
    },
  });
  return result;
};

// getUsers()
// getUserPosts(2)
// getUser(1)
// updatePost(1)
// deletePost(3);
