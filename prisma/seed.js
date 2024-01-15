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

  const createdUserWithProfile = await prisma.user.create({
    data: {
      username: "lemonlover",
      email: "lemon@email.co.uk",
      password: "password123",
      profile: {
        create: {
          bio: "I like... No, I LOVE LEMONS!!",
          pro_pic_url: "imageurl.com",
        },
      },
    },
  });

  console.log("User with profile created", createdUserWithProfile);

  const createdPost = await prisma.post.create({
    data: {
      title: "Why lemons are the best fruit",
      content: "Lemons are the best fruit for many reasons.",
      userId: 4,
    },
  });

  console.log("Post for user created", createdPost);

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
