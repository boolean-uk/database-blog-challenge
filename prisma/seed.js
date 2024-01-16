const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdUsers = await prisma.user.createMany({
    data: [
      { username: "mich", email: "mich@gmail.com" },
      { username: "alex", email: "alex@gmail.com" },
    ],
  });

  console.log(`${createdUsers.count} users created`, createdUsers);

  // Add your code here

  const theCreatedUser = await prisma.user.create({
    data: {
      username: "Hayor4real",
      email: "hayor4real@gmail.com",
      password: "hayorinde456",
    },
  });

  console.log("user created", theCreatedUser);

  const theCreatedUserWithProfile = await prisma.user.create({
    data: {
      username: "carLover",
      email: "theboss@yahoomail.com",
      password: "thisis123456",
      profile: {
        create: {
          bio: " I like super fast cars",
          profile_pix_url: "image.com",
        },
      },
    },
  });

  console.log("User with profile created", theCreatedUserWithProfile);

  const theCreatedPost = await prisma.post.createMany({
    data: [
      {
        title: "Why you like  cars",
        content: "cars are good source of transportation.",
        userId: 4,
      },
      {
        title: "Why do i like fast cars",
        content: "when the roads are smooth fast cars are good",
        userId: 4,
      },
      {
        title: "who is the developer?",
        content: "A developer developers website and create applications",
        userId: 3,
      },
      {
        title: "My name is ayorinde",
        content: "Hi, my name is ayorinde. I am a developer.",
        userId: 3,
      },
      {
        title: "I know how to write codes",
        content: "can someone write codes without errors",
        userId: 2,
      },
      {
        title: "what is your email",
        content: "Please respond",
        userId: 2,
      },
      {
        title: "Hayor the developer",
        content: "I like developing web sites",
        userId: 1,
      },
      {
        title: "My name is emmanuel ",
        content: "email me at emmanuel89@gmail.com",
        userId: 1,
      },
    ],
  });

  console.log(`${theCreatedPost.count} posts created`, theCreatedPost);

  const createdComment = await prisma.comment.createMany({
    data: [
      {
        content: "this is the user with a nice car ",
        postId: 1,
        userId: 3,
      },
      {
        content: "welcome ",
        postId: 3,
        userId: 1,
      },
      {
        content: "I love cars",
        postId: 5,
        userId: 4,
      },
    ],
  });
  console.log(`${createdComment.count} comments created`, createdComment);

  const createdProfiles = await prisma.profile.createMany({
    data: [
      { bio: "Hayor the developer", userId: 1 },
      { bio: "I am theboss", userId: 2 },
      { bio: "ayorinde? ayorinde!", userId: 3 },
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
