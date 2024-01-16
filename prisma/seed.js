const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createUser = async (userData) => {
  const user = await prisma.user.create({
    data: userData,
  });

  return user;
};

const createProfile = async (profileData) => {
  const profile = await prisma.profile.create({
    data: profileData,
  });

  return profile;
};

const createPost = async (postData) => {
  const post = await prisma.post.create({
    data: postData,
  });

  return post;
};

const createComment = async (commentData) => {
  const comment = await prisma.comment.create({
    data: commentData,
  });

  return comment;
};

async function seed() {
  const userData = [
    { username: "alicemartin", email: "alice@mail.com", age: 27 },
    { username: "john", email: "john@gmail.com", age: 25 },
    { username: "jerry", email: "jerry@gmail.com", age: 33 },
    { username: "tom", email: "tom@gmail.com", age: 35 },
  ];

  const profileData = [
    {
      profilePicture: "some_image_link",
      bio: "some bio about the profile",
      firstName: "alice",
      lastName: "martin",
    },
    {
      profilePicture: "some_image_link",
      bio: "some bio about the profile",
      firstName: "john",
      lastName: "doe",
    },
    {
      profilePicture: "some_image_link",
      bio: "some bio about the profile",
      firstName: "jerry",
      lastName: "mouce",
    },
    {
      profilePicture: "some_image_link",
      bio: "some bio about the profile",
      firstName: "tom",
      lastName: "cat",
    },
  ];

  const postData = [
    {
      title: "How to cook rice",
      content:
        "Cooking rice might seem simple, but achieving that fluffy, perfectly cooked grain requires a bit of finesse. Here's a quick guide",
      isPublished: true,
      picture: "some_picture_link",
    },
    {
      title: "How to cook rice",
      content:
        "Cooking rice might seem simple, but achieving that fluffy, perfectly cooked grain requires a bit of finesse. Here's a quick guide",
      isPublished: true,
      picture: "some_picture_link",
    },
    {
      title: "How to cook rice",
      content:
        "Cooking rice might seem simple, but achieving that fluffy, perfectly cooked grain requires a bit of finesse. Here's a quick guide",
      isPublished: true,
      picture: "some_picture_link",
    },
    {
      title: "How to cook rice",
      content:
        "Cooking rice might seem simple, but achieving that fluffy, perfectly cooked grain requires a bit of finesse. Here's a quick guide",
      isPublished: true,
      picture: "some_picture_link",
    },
    {
      title: "How to cook rice",
      content:
        "Cooking rice might seem simple, but achieving that fluffy, perfectly cooked grain requires a bit of finesse. Here's a quick guide",
      isPublished: true,
      picture: "some_picture_link",
    },
    {
      title: "How to cook rice",
      content:
        "Cooking rice might seem simple, but achieving that fluffy, perfectly cooked grain requires a bit of finesse. Here's a quick guide",
      isPublished: true,
      picture: "some_picture_link",
    },
    {
      title: "How to cook rice",
      content:
        "Cooking rice might seem simple, but achieving that fluffy, perfectly cooked grain requires a bit of finesse. Here's a quick guide",
      isPublished: true,
      picture: "some_picture_link",
    },
    {
      title: "How to cook rice",
      content:
        "Cooking rice might seem simple, but achieving that fluffy, perfectly cooked grain requires a bit of finesse. Here's a quick guide",
      isPublished: true,
      picture: "some_picture_link",
    },
  ];

  const commentData = [
    { content: "Some comments..." },
    { content: "Some comments..." },
    { content: "Some comments..." },
    { content: "Some comments..." },
  ];

  for (let i = 0; i < userData.length; i++) {
    const user = await createUser(userData[i]);
    const profileToCreate = {
      ...profileData[i],
      user: { connect: { id: user.id } },
    };

    const postToCreate = {
      ...postData[i],
      user: { connect: { id: user.id } },
    };

    const post = await createPost(postToCreate);

    const commentToCreate = {
      ...commentData[i],
      user: { connect: { id: user.id } },
      post: { connect: { id: post.id } },
    };
    await createProfile(profileToCreate);
    await createComment(commentToCreate);
  }

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
