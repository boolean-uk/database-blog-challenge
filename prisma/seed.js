const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdUsers = await prisma.user.createMany({
    data: [
      { username: "alice", email: "alice@wonderland.ru" },
      { username: "alicia", email: "alicia@wonderland.ru" },
    ],
  });

  console.log(`${createdUsers.count} users created`, createdUsers);

  // Add your code here

  const createdUser = await prisma.user.create({
    data: {
      username: "johndoe",
      email: "johndoe@email.co.uk",
      password: "johndoeiscool123",
    },
  });

  console.log("User created", createdUser);

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
