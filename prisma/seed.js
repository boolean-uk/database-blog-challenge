const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { faker } = require("@faker-js/faker");

async function seed() {
  const userNumber = 10;
  const postCount = 20;
  const commentCount = 200;

  for (let i = 0; i < userNumber; i++) {
    await prisma.user.create({
      data: {
        userName: faker.internet.userName().slice(0, 10),
        email: faker.internet.email(),
        Profile: {
          create: {
            avatarUrl: faker.internet.avatar(),
            bio: faker.lorem.sentence({ min: 3, max: 6 }),
          },
        },
        Posts: {
          createMany: {
            data: Array.from({ length: postCount }, () => {
              return {
                title: faker.lorem.sentence({ min: 3, max: 7 }),
                content: faker.lorem.sentence(),
                published: faker.datatype.boolean(0.9),
                pictureUrl: faker.image.urlPlaceholder(),
              };
            }),
          },
        },
      },
    });
  }

  const comments = await prisma.comment.createMany({
    data: Array.from({ length: commentCount }, () => {
      return {
        content: faker.lorem.sentence(),
        userId: faker.number.int({ min: 1, max: userNumber }),
        postId: faker.number.int({ min: 1, max: commentCount }),
      };
    }),
  });

  const commentWithChildren = await prisma.comment.create({
    data: {
      content: faker.lorem.sentence(),
      User: {
        connect: {
          id: faker.number.int({ min: 1, max: userNumber }),
        },
      },
      Post: {
        connect: {
          id: 1,
        },
      },
      ChildComment: {
        createMany: {
          data: Array.from({ length: 10 }, () => {
            return {
              content: faker.lorem.sentence(),
              userId: faker.number.int({ min: 1, max: userNumber }),
              postId: 1,
            };
          }),
        },
      },
    },
  });

  console.log(comments);
  console.log(commentWithChildren);

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
