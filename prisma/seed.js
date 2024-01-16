const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdUsers = await prisma.user.createMany({
    data: [
      { username: "alicemartin", email: "alicemartin@gmail.com" },
      { username: "alice", email: "alice@gmail.com" },
    ],
  });

  console.log(`${createdUsers.count} users created`, createdUsers);

  // Add your code here

  const theCreatedUser = await Prisma.user.create({
    data: {
      username: "Hayor4real",
      email: "hayor4real@gmail.com",
      password: "hayorinde456",
    },
  });

  console.log("user created", theCreatedUser);

  const theCreatedUserWithProfile = await prisma.user.create({
    data: {
      username: "theboss",
      email: "theboss@yahoomail.com",
      password: "thisis123456",
      profile: {
        create: {
          bio: " I am a developer",
          profile_pix_url: "image.com",
        },
      },
    },
  });

  console.log("User with profile created", theCreatedUserWithProfile);

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
