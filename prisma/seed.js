const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdUsers = await prisma.user.createMany({
    data: [
      { email: "alice.martin@gmail.com", username: "alicem.01" },
      { email: "elodie.roy@hotmail.co.uk", username: "elRoy33" },
      { email: "luke.sky@hotmail.co.uk", username: "SkyWalk" },
    ],
  });

  console.log(`${createdUsers.count} users created`, createdUsers);

  const createdProfiles = await prisma.profile.createMany({
    data: [
      {
        userId: 2,
        firstName: "Elodie",
        lastName: "Roy",
        biography: "some relatively random ramblings and some more",
        profilePicUrl: "http://sth.com/sthsthsth/sthsthsht/0345",
      },
      {
        userId: 1,
        firstName: "Alice",
        lastName: "Martin",
        biography:
          "some relatively random and slightly different ramblings and some more",
        profilePicUrl: "http://sth.com/sthsthsth/sthsthsht/235",
      },
      {
        userId: 3,
        firstName: "Luke",
        lastName: "Sky",
        biography: ".",
        profilePicUrl: "http://sth.com/sthsthsth/sthsthsht/25356",
      },
    ],
  });
  console.log("number of newly created profiles: ", createdProfiles);

  const createdPosts = await prisma.post.createMany({
    data: [
      {
        userId: 1,
        title: "witty title",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada odio magna, ut interdum dui accumsan",
      },
      {
        userId: 1,
        title: "wittier title",
        content:
          "odit aut eveniet nobis id alias obcaecati quo nisi distinctio et nemo atque et doloremque voluptate ut accusamus iusto ",
      },
      {
        userId: 2,
        title: "the wittiest title",
        content:
          "Sed voluptatem illum qui obcaecati nesciunt 33 voluptatem dolorem.",
      },
      {
        userId: 2,
        title: "wanna-be-witty title",
        content:
          "Qui voluptatem possimus qui consequatur nostrum vel doloribus itaque",
      },
      {
        userId: 3,
        title: "title",
        content:
          "Et placeat dolores quo quos voluptate ea internos suscipit cum quas neque.",
      },
      {
        userId: 3,
        title: "another title",
        content:
          "Et fugit excepturi aut labore consectetur rem explicabo possimus.",
      },
    ],
  });
  console.log(createdPosts)
  const createdComments = await prisma.comment.createMany({
    data: [
      {
        userId: 1,
        postId: 4,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada odio magna, ut interdum dui accumsan",
      },
      {
        userId: 2,
        postId: 1,
        content:
          "odit aut eveniet nobis id alias obcaecati quo nisi distinctio et nemo atque et doloremque voluptate ut accusamus iusto ",
      },
      {
        userId: 3,
        postId: 5,
        content:
          "Sed voluptatem illum qui obcaecati nesciunt 33 voluptatem dolorem.",
      },]
  });
  console.log(createdComments)

  const createdCommentResponses = await prisma.comment.createMany({
    data: [
      {
        userId: 1,
        postId: 4,
        commentId:2,
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada odio magna, ut interdum dui accumsan",
      },
      {
        userId: 1,
        postId: 4,
        commentId:2,
        content:
          "odit aut eveniet nobis id alias obcaecati quo nisi distinctio et nemo atque et doloremque voluptate ut accusamus iusto ",
      },
      {
        userId: 3,
        postId: 5,
        commentId:2,
        content:
          "Sed voluptatem illum qui obcaecati nesciunt 33 voluptatem dolorem.",
      },]
  });
  console.log(createdCommentResponses)

  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
