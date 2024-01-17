const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdUsers = await prisma.user.createMany({
    data: [
      { username: "alice", email: "alice@rocket.com" },
      { username: "martin", email: "martin@rocket.com" },
      { username: "bob", email: "bob@rocket.com" },
    ],
  });

  console.log(`${createdUsers.count} users created`, createdUsers);

  // Add your code here
  const createProfile = await prisma.profile.createMany({
    data: [
      {
        userID: 1,
        firstName: "John",
        lastName: "Cena",
        bio: "I am a wrestler",
        profilePic:
          "https://images.pexels.com/photos/14193493/pexels-photo-14193493.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      },
      {
        userID: 2,
        firstName: "Under",
        lastName: "Taker",
        bio: "I am immortal.",
        profilePic:
          "https://media.gettyimages.com/id/76439750/it/foto/the-undertaker.jpg?s=612x612&w=0&k=20&c=4Y3q451zVWAoBdZ6HfS2fj_zvuKYuLbxELa92xFjj50=",
      },
      {
        userID: 3,
        firstName: "Bob",
        lastName: "Marley",
        bio: "I am a singer and ...",
        profilePic:
          "https://images.unsplash.com/photo-1538598450935-581f6a5fa7e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9iJTIwbWFybGV5fGVufDB8fDB8fHww",
      },
    ],
  });

  const createPosts = await prisma.post.createMany({
    data: [
      {
        title: "Travelling",
        content: "Travel journey to the Himalayas",
        picture:
          "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGltYWxheWF8ZW58MHx8MHx8fDA%3D",
        isPublished: true,
        userId: 1,
      },
      {
        title: "Cooking",
        content: "Cooking the fried chicken",
        picture:
          "https://plus.unsplash.com/premium_photo-1683139918895-06f8f3b9939e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJpZWQlMjBjaGlja2VufGVufDB8fDB8fHww",
        isPublished: true,
        userId: 2,
      },
      {
        title: "Working",
        content: "working on this exercise",
        isPublished: true,
        userId: 3,
      },
      {
        title: "Reading",
        content: "Reading some novel",
        picture:
          "https://images.unsplash.com/photo-1622567905740-74539aa99bcf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5vdmVsfGVufDB8fDB8fHww",
        isPublished: true,
        userId: 2,
      },
    ],
  });

  const createComment = await prisma.comment.createMany({
    data: [
      { content: "nice work", userId: 1, postId: 1 },
      { content: "Good job", userId: 3, postId: 2 },
      { content: "lalalalala", userId: 2, postId: 3 },
    ],
  });

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
