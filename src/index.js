const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const Main = async () => {
  await prisma.user.findMany();

  await prisma.post.findMany({
    where: {
      userId: 2,
    },
  });

  const userWithProfile = await prisma.user.findUnique({
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

  console.log(userWithProfile);
};

Main();
