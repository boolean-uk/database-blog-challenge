const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdUsers = await prisma.user.createMany({
    data: [
      { username: "alice12", email: "alice12@gmail.com" },
      { username: "mikey", email: "mikey@gmail.com" },
      { username: "mikeyaw", email: "miawdawdawdy@gmail.com" },
    ],
  });

  console.log(`${createdUsers.count} users created`, createdUsers);

  // Add your code here

  const createdProfile = await prisma.profile.createMany({
    data: [
      {
        bio: "hdrhdrhdrhdhh",
        userId: 1,
        profilePictureUrl:
          "https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg",
      },
      {
        bio: "dhrhghdrh",
        userId: 2,
        profilePictureUrl:
          "https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/08/image-url-3.jpg",
      },
      {
        bio: "adawdawd",
        userId: 3,
      },
    ],
  });

  console.log(`${createdProfile.count} profiles created`, createdProfile);

  const createdPost = await prisma.post.createMany({
    data: [
      {
        title: "This is my post",
        content: "Hi this is my post!!!!!!!!!",
        authorId: 1,
      },
      {
        title: "This is my post hehe",
        content: "Hi this is my post!!!!! Wiooooo",
        authorId: 2,
      },
      {
        title: "This is my post hehe!!!",
        content: "Hi t!!!! poawdwdoo",
        authorId: 1,
      },
      {
        title: "This is myadawd hehe!!!",
        content: "Hi this is my poawdwdoo",
        authorId: 2,
      },
      {
        title: "Thisawdwat hehe!!!",
        content: "Hi thisawdawwdwdoo",
        authorId: 1,
      },
      {
        title: "This is my poadwadehe!!!",
        content: "Hi awdwddwdoo",
        authorId: 3,
      },
    ],
  });

  console.log(`${createdPost.count} posts created`, createdPost);

  const createdComment = await prisma.comment.createMany({
    data: [
      {
        text: "Hi, I'm a commenter",
        postId: 1,
        authorId: 2,
      },
      {
        text: "Hi, I like commenting on stuff",
        postId: 2,
        authorId: 3,
      },
      {
        text: "Hi, I like commenting on stuff",
        postId: 3,
        authorId: 1,
      },
    ],
  });

  console.log(`${createdComment.count} posts created`, createdComment);
  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
