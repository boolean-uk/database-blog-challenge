const prisma = require("./db.js");

async function main() {
  const fetchAllUsers = await prisma.user.findMany();

  console.log("All users:", fetchAllUsers);

  const fetchAllPostWithUser2 = await prisma.post.findMany({
    where: {
      userId: 2,
    },
  });
  console.log("All the posts for user with ID 2:", fetchAllPostWithUser2);

  const fetchUserAndProfileForUser1 = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      profile: true,
    },
  });

  console.log("User & Profile with userId 1", fetchUserAndProfileForUser1);

  const updatedPost = await prisma.post.update({
    where: {
      id: 1,
    },
    data: { content: "study the codes" },
  });

  console.log("Updated post with ID 1", updatedPost);

  const theDeletedPost = await prisma.post.delete({
    where: {
      id: 4,
    },
  });

  console.log("Deleted post with ID 4", theDeletedPost);
}

main();
