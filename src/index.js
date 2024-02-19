const prisma = require("./db.js");

async function main() {
  const getUser = await prisma.user.findMany();

  const getPost = await prisma.post.findMany({
    where: {
      id: 2,
    },
    include: {
      post: true,
    },
  });

  const userId = await prisma.user.findMany({
    where: {
      id: 1,
    },
    include: {
      profile: true,
    },
  });

  const updatePost = await prisma.post.update({
    where: {
      id: 1,
    },
    data: {
      content: "This is my updated post content.",
    },
  });

  const deletePost = await prisma.post.delete({
    where: {
      id: 3,
    },
  });
}

main();
