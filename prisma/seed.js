const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const users = await prisma.user.createMany({
    data: [
      { username: "alicemartin", email: "alice@mail.com", age: 27 },
      { username: "john", email: "john@gmail.com", age: 25 },
      { username: "jerry", email: "jerry@gmail.com", age: 33 },
      { username: "tom", email: "tom@gmail.com", age: 35 },
    ],
  });

  const profilesData = [
    {
      profilePicture: "some_image_link",
      bio: "some bio about the profile",
      firstName: "alice",
      lastName: "martin",
      userId: users[0].id,
    },
    {
      profilePicture: "some_image_link",
      bio: "some bio about the profile",
      firstName: "john",
      lastName: "doe",
      userId: users[1].id,
    },
    {
      profilePicture: "some_image_link",
      bio: "some bio about the profile",
      firstName: "jerry",
      lastName: "mouce",
      userId: users[2].id,
    },
    {
      profilePicture: "some_image_link",
      bio: "some bio about the profile",
      firstName: "tom",
      lastName: "cat",
      userId: users[3].id,
    },
  ];

  await prisma.profile.createMany({ data: profilesData });

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
