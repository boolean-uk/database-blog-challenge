const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createdUsers = async function seed() {
  await prisma.user.createMany({
    data: [

      {
        username: "Alicemartin",
        email: "alice@mail.com",
        age: 27,
      },
      {
        username: "John",
        email: "john@gmail.com",
        age: 25,
      },
    ],
  });

  console.log(`${createdUsers.count} users created`, createdUsers);

  // Add your code here

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
