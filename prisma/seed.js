const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdUsers = await prisma.user.createMany({
    data: [
      { username: "alice10", email: "alice@example.com" },
      { username: "bobsmith", email: "bob@example.com" },
    ],
  });

  console.log(`${createdUsers.count} users created`, createdUsers);

  // Add your code here

  const createdProfile = await prisma.profile.createMany({
    data: [
      {
        bio: "Biography of Alice",
        userId: 1,
        profilePic: "http://example.com/alice_pic.jpg",
      },
      {
        bio: "Biography of Bob",
        userId: 2,
        profilePic: "http://example.com/bob_pic.jpg",
      },
    ],
  });

  console.log(`${createdProfile.count} profile created`, createdProfile);

  const createdPost = await prisma.post.createMany({
    data: [
      {
        title: "i love code",
        content: "this is my new post",
        authorId: 1,
      },
      {
        title: "i hate code",
        content: "this is my last post",
        authorId: 2,
      },
    ],
  });

  console.log(`${createdPost.count} post created`, createdPost);

  const createdComment = await prisma.comment.createMany({
    data: [
        {
            text: "i love coding javascript",
            postId: 1,
            authorId: 1,
        },
      {
        text: "i hate coding javascript",
        postId: 2,
        authorId: 2,
      }
    ],
  });

  console.log(`${createdComment.count} comment created`, createdComment)
  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
