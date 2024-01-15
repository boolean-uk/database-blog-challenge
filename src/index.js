const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const Main = async () => {
  await prisma.user.findMany();
};

Main();
