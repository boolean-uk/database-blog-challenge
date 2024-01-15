const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        username: "alicemartin",
        email: "alice@mail.com",
        age: 27,
      },
      {
        username: "john",
        email: "john@gmail.com",
        age: 25,
      },
    ],
  });

  await prisma.profile.create({
    data: {
      profilePicture: "some_image_link",
      bio: "some bio about the profile",
      firstName: "john",
      lastName: "doe",
      user: {
        connect: {
          id: 2,
        },
      },
    },
  });

  // Add your code here

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
