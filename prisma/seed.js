const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  //   const createdUser1 = await prisma.user.create({
  //     data: { username: "alicem", email: "alice@gmail.com" },
  //   });

  //   const createdUser2 = await prisma.user.create({
  //     data: { username: "joelzor", email: "joel@yahoo.co.uk", isAdmin: true },
  //   });

  const createdUsers = await prisma.user.createMany({
    data: [
      { username: "alicem", email: "alice@gmail.com" },
      { username: "joelzor", email: "joel@yahoo.co.uk", isAdmin: true },
    ],
  });

  // Add your code here
  const createdProfile = await prisma.profile.create({
    data: {
      profilePic: "http://fakeimages.com/joel-profile-pic",
      bio: "creater of the joelzor bloggosphere!",
      user: {
        connect: {
          id: 2,
        },
      },
    },
  });

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
