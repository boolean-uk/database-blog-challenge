const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdUsers = await prisma.user.createMany({
    data: [
      { username: "alison", email: "alice@gmail.com" },
      { username: "martin", email: "martin@gmail.com" },
    ],
  });

  console.log(`${createdUsers.count} users created`, createdUsers);

  // Add your code here
  const createdProfile = await prisma.profile.create({
    data: [
      {
        user: {
          connect: {
            userId: createdUsers.id,
          },
        },
        display_name: "alison the greatest",
        profile_pic_url: "cat.jpeg",
        bio: "I love to bake and spend time with my cat Gus",
      },
    ],
  });

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
