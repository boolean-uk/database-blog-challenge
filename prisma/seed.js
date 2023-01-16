const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdUsers = await prisma.user.createMany({
    data: [
      { username: "alison", email: "alice@gmail.com" },
      { username: "martin", email: "martin@gmail.com" },
    ],
  });

  console.log(`${createdUsers.count} users created`, createdUsers);

  // Add your code here
  const createdProfile = await prisma.profile.createMany({
    data: [
      {
        userId: 1,
        display_name: "alison the greatest",
        profile_pic_url: "cat.jpeg",
        bio: "I love to bake and spend time with my cat Gus",
      },
      {
        userId: 2,
        display_name: "Martin Smith",
        profile_pic_url: "lake_pic.jpeg",
        bio: "Avid hiker + lover of lakes",
      },
    ],
  });

  const createdPost = await prisma.post.createMany({
    data: [
      {
        userId: 1,
        title: "Gus the Ragdoll cat",
        content: "I love Gus, he is a 7 year old Ragdoll...blah blah blah",
        picture_url: "gus.jpeg",
        isPublished: true,
      },
      {
        userId: 2,
        title: "Chilling by a lake",
        content:
          "There is nothing like having a nice cup of tea whilst relaxing next to a lake.#blessd",
        picture_url: "",
        isPublished: true,
      },
    ],
  });

  const createdComment = await prisma.comment.createMany({
    data: [
      {
        userId: 1,
        postId: 2,
        content: "loved this post so soooooooooooooooo much",
      },
      {
        userId: 2,
        postId: 1,
        content: "Gus looks adorable in this pic",
      },
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
