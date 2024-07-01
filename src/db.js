import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  // create 3 users, each user with 3 posts
  await prisma.user.create({
    data: {
      username: "user1",
      email: "user1@mail.com",
      profile: {
        create: {
          first_name: "Hani",
          last_name: "Rani",
          picture_url: "https//:lkjlkjlkjlkj",
          bio: "I am studying web development at Boolean UK",
        },
      },
      posts: {
        createMany: {
          data: [
            {
              title: "title1",
              content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
              picture_url: "https://avatars.githubusercontent.com/u/97165289",
            },
            {
              title: "title2",
              content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
              picture_url: "https://avatars.githubusercontent.com/u/97165289",
            },
            {
              title: "title3",
              content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
              picture_url: "https://avatars.githubusercontent.com/u/97165289",
            },
          ],
        },
      },
    },
    include: {
      profile: true,
      posts: true,
    },
  });

  await prisma.user.create({
    data: {
      username: "user2",
      email: "user2@mail.com",
      profile: {
        create: {
          first_name: "Anna",
          last_name: "Lucani",
          picture_url: "https//:lkjlkjlkjlkj",
          bio: "I am studying web development at Boolean UK",
        },
      },
      posts: {
        createMany: {
          data: [
            {
              title: "title",
              content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
              picture_url: "https://avatars.githubusercontent.com/u/97165289",
            },
            {
              title: "title",
              content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
              picture_url: "https://avatars.githubusercontent.com/u/97165289",
            },
            {
              title: "title",
              content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
              picture_url: "https://avatars.githubusercontent.com/u/97165289",
            },
          ],
        },
      },
    },
    include: {
      profile: true,
      posts: true,
    },
  });

  await prisma.user.create({
    data: {
      username: "user3",
      email: "user3@mail.com",
      profile: {
        create: {
          first_name: "Ali",
          last_name: "Salem",
          picture_url: "https//:lkjlkjlkjlkj",
          bio: "I am studying web development at Boolean UK",
        },
      },
      posts: {
        createMany: {
          data: [
            {
              title: "title",
              content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
              picture_url: "https://avatars.githubusercontent.com/u/97165289",
            },
            {
              title: "title",
              content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
              picture_url: "https://avatars.githubusercontent.com/u/97165289",
            },
            {
              title: "title",
              content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
              picture_url: "https://avatars.githubusercontent.com/u/97165289",
            },
          ],
        },
      },
    },
    include: {
      profile: true,
      posts: true,
    },
  });

  // create 3 comments and connect them to 3 users
  await prisma.comment.createMany({
    data: [
      {
        content:
          "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
        userId: 1,
      },
      {
        content:
          "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
        userId: 2,
      },
      {
        content:
          "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
        userId: 3,
      },
    ],
  });

  // connect 3 posts to 3 comments
  await prisma.post.update({
    where: {
      id: 1,
    },
    data: {
      comments: {
        connect: {
          id: 2,
        },
      },
    },
    include: {
      comments: true,
    },
  });

  await prisma.post.update({
    where: {
      id: 4,
    },
    data: {
      comments: {
        connect: {
          id: 1,
        },
      },
    },
    include: {
      comments: true,
    },
  });

  await prisma.post.update({
    where: {
      id: 8,
    },
    data: {
      comments: {
        connect: {
          id: 3,
        },
      },
    },
    include: {
      comments: true,
    },
  });

  // Add your code here
  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
