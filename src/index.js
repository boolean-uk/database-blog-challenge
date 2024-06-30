const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getUsers() {
  const users = await prisma.user.findMany({});
  console.log(users);
}

async function getUserById(id = 2) {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  console.log(user);
}

async function getUserAndProfile(id = 1) {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
    include: {
      profile: true,
    },
  });
  console.log(user);
}

async function updatePost(id = 1) {
  const post = await prisma.post.update({
    where: {
      id: id,
    },
    data: {
      content: "On second thoughts, I've changed my mind!",
    },
  });
  console.log(post);
}

async function deletePost(id = 4) {
    const post = await prisma.post.delete({
      where: {
        id: id,
      }
    });
    console.log(post);
  }

deletePost()