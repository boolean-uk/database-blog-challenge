const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdUsers = await prisma.user.create({
    data: { username: "alicemar10", email: "alice12@hotmail.co.uk" },
  });

  console.log("users created", createdUsers);

  // Add your code here
  const createdProfile = await prisma.profile.create({
    data: {
      user: {
        connect: { id: createdUsers.id },
      },
      profilePic: "flower",
      bio: "this is my bio",
    },
  });
  console.log("profile created", createdProfile);

  const createdPost = await prisma.post.create({
    data: {
      user: {
        connect: { id: createdUsers.id },
      },
      title: "Arsenal is in the top of the table",
      content: "Arsenal is looking for the title in the league",
      isPublished: true,
      picURL: "Arsenal team logo",
    },
  });
  console.log("post created", createdPost);

  const createComment = await prisma.comment.create({
    data: {
      user: {
        connect: { id: createdUsers.id },
      },
      post: {
        connect: { id: createdPost.id },
      },
      content: "Arsenal is 8 points ahead of man utd game this sunday",
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
