const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  // Add your code here

  const createdUser1 = await prisma.user.create({
    data: {
      username: "Johnson",
      email: "silly@sausage.com",
      profile: {
        create: {
          biography: "Born on sunday",
          profilePicUrl: "www.google.com",
        },
      },
      posts: {
        createMany: {
          data: [
            {
              content: "I like other round baked items",
              title: "The story of round baked items",
            },
            {
              content: "I like fish and chips",
              title: "The story of fried food",
            },
          ],
        },
      },
    },
  });

  const createdUser2 = await prisma.user.create({
    data: {
      username: "Porky",
      email: "bobby@fingers.com",
      profile: {
        create: {
          biography: "It's a mystery",
          profilePicUrl: "www.yahoo.com",
        },
      },
      posts: {
        createMany: {
          data: [
            { content: "I like donuts", title: "The story of donuts" },
            {
              content: "I like pies",
              title: "The story of pies",
            },
          ],
        },
      },
    },
  });

  const createdUser3 = await prisma.user.create({
    data: {
      username: "Smelly",
      email: "Head@fingers.com",
      profile: {
        create: {
          biography: "Be real!",
          profilePicUrl: "www.altavista.com",
        },
      },
      posts: {
        createMany: {
          data: [
            { content: "I like bagels", title: "The story of bagels" },
            {
              content: "Oh lordy",
              title: "The story of oh lordy",
            },
          ],
        },
      },
    },
  });

  const comment1 = await prisma.comment.create({
    data: {
      content: "I enjoyed this post! LOL!",
      userId: 1,
      postId: 1,
    },
  });

  const comment2 = await prisma.comment.create({
    data: {
      content: "I disliked this post! LOL!",
      userId: 2,
      postId: 3,
    },
  });

  const comment3 = await prisma.comment.create({
    data: {
      content: "I thought this post was bang average! LOL!",
      userId: 3,
      postId: 5,
    },
  });

  const childComment1 = await prisma.comment.create({
    data: {
      content: "That's BANG OUT OF ORDER!",
      parentCommentId: 1,
      postId: 1,
      userId: 3,
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
