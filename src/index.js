const prisma = require("./db.js");

// EQUIVALENT: const main = async() => {}
async function main() {
 
  const getUsers = await prisma.user.findMany();
  console.log("all users", getUsers);

  const getPost2 = await prisma.post.findMany({
    where: {
      id: 2,
    },
    include: {
      post: true,
    },
  });
  console.log("get post from id 2", getPost2);

  const userId1 = await prisma.user.findMany({
    where: {
      id: 1,
    },
    include: {
      profile: true,
    },
  });
  console.log("get user id 1", userId1);

  const updatePost = await prisma.post.update({
    where: {
      id: 1,
    },
    data: {
      content: "This is my updated post content.",
    },
  });
  console.log("Updated post", updatePost);

  const deletePost = await prisma.post.delete({
    where: {
      id: 3,
    },
  });

  console.log("delete post with id 3", deletePost);
}

main();
