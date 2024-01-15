const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdUsers = await prisma.user.createMany({
    data: [{ email: "alice.martin@gmail.com", username: "alicem.01" }],
  });

  console.log(`${createdUsers.count} users created`, createdUsers);

  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
