const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdUsers = await prisma.user.createMany({
    data: [
      { username: "alice10", email: "alice@example.com" },
      { username: "bobsmith", email: "bob@example.com" },
      { username: "calhay", email: "cal@example.com" },
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
      {
        bio: "Biography of cal",
        userId: 3,
        profilePic: "http://example.com/cal_pic.jpg",
      },
    ],
  });

  console.log(`${createdProfile.count} profile created`, createdProfile);

  const createdPost = await prisma.post.createMany({
    data: [
      {
        title: "i love code",
        content: "this is my new post about html",
        authorId: 1,
      },
      {
        title: "i love code",
        content: "this is my new post about javascript",
        authorId: 1,
      },
      {
        title: "i hate code",
        content: "this is my new post about css",
        authorId: 2,
      },
      {
        title: "i hate code",
        content: "this is my last post",
        authorId: 2,
      },
      {
        title: "i love games",
        content: "star wars games are cool",
        authorId: 3,
      },
      {
        title: "i love games",
        content: "god of war is cool",
        authorId: 3,
      },
    ],
  });

  console.log(`${createdPost.count} post created`, createdPost);

  const createdComment = await prisma.comment.createMany({
    data: [
      {
        text: "Hi, im liking this post",
        postId: 1,
        authorId: 2,
      },
      {
        text: "Hi, I dont like this post",
        postId: 2,
        authorId: 3,
      },
      {
        text: "Hi, I like commenting on anything",
        postId: 3,
        authorId: 1,
      },
    ],
  });

  console.log(`${createdComment.count} comment created`, createdComment);
  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
