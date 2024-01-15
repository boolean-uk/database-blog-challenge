const prisma = require("./db.js");

async function main() {
  const getAllUsers = await prisma.user.findMany();

  console.log("All users:", getAllUsers);

  const getAllPostsForUser2 = await prisma.post.findMany({
    where: {
      userId: 2,
    },
  });

  console.log("All posts for user with ID 2:", getAllPostsForUser2);

  const getUserAndProfileForUser1 = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      profile: true,
    },
  });

  console.log("User & Profile with userId 1", getUserAndProfileForUser1);

  const updatedPost = await prisma.post.update({
    where: {
      id: 1,
    },
    data: { content: "Lemons are the best full stop(PERIOD)." },
  });

  console.log("Updated post with ID 1", updatedPost);

  const deletedPost = await prisma.post.delete({
    where: {
      id: 4,
    },
  });

  console.log("Deleted post with ID 4", deletedPost);
}

main();
