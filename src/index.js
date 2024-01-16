const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const Main = async () => {
  await prisma.user.findMany();

  await prisma.post.findMany({
    where: {
      userId: 2,
    },
  });

  await prisma.user.findUnique({
    where: {
      id: 1,
    },
    select: {
      username: true,
      profile: {
        select: {
          bio: true,
        },
      },
    },
  });

  await prisma.post.update({
    where: { id: 1 },
    data: {
      title: "Updated title",
      content: "updated content",
      isPublished: false,
    },
  });

  await prisma.post.delete({
    where: {
      id: 3,
    },
  });

  const deleteWithAnd = await prisma.user.deleteMany({
    where: {
      AND: [{ username: "alicemartin" }, { email: { contains: "@mail.com" } }],
    },
  });

  console.log(deleteWithAnd);
};

Main();
