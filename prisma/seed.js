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

  const createdPost = await prisma.post.createMany({
    data: [
      {
        title: "Why lemons are the best fruit",
        content: "Lemons are the best fruit for many reasons.",
        userId: 4,
      },
      {
        title: "Why I love lemons",
        content: "Lemons are the most superior fruit.",
        userId: 4,
      },
      {
        title: "Where is Jane Doe?",
        content:
          "I'm looking for my wife. Someone please LMK if you have seen her.",
        userId: 3,
      },
      {
        title: "My name is John",
        content: "Hi, my name is John Doe. Professional spy.",
        userId: 3,
      },
      {
        title: "I've ran out of ideas",
        content: "Can someone comment on what I should name these?",
        userId: 2,
      },
      {
        title: "Is this real ?",
        content: "Please respond",
        userId: 2,
      },
      {
        title: "Alice in the wonderland",
        content: "I like that film",
        userId: 1,
      },
      {
        title: "My name is Alice",
        content: "email me at alice@wonderland.ru",
        userId: 1,
      },
    ],
  });

  console.log(`${createdPost.count} posts created`, createdPost);

  const createdComment = await prisma.comment.createMany({
    data: [
      {
        content: "I disagree. Bananas FTW!",
        postId: 1,
        userId: 3,
      },
      {
        content: "I'm not sure, but I will let you know if I see her.",
        postId: 3,
        userId: 1,
      },
      {
        content: "I love lemons.",
        postId: 5,
        userId: 4,
      },
    ],
  });

  console.log(`${createdComment.count} comments created`, createdComment);

  const createdProfiles = await prisma.profile.createMany({
    data: [
      { bio: "ALICE IN THE WONDERLAND", userId: 1 },
      { bio: "I am Alicia", userId: 2 },
      { bio: "John Dough? John Doe!", userId: 3 },
    ],
  });

  console.log(`${createdProfiles.count} profiles created`, createdProfiles);

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
