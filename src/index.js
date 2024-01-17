const prisma = require("./db.js");

async function main() {
  try {
    //to get all the users
    const getAllUsers = await prisma.user.findMany();
    console.log("all users", getAllUsers);

    //get all the post of userId 2
    const getPost = await prisma.post.findMany({
      where: {
        userId: 2,
      },
    });

    console.log("posts of user ID 2", getPost);
  } catch (error) {
    console.log("Error executing queries", error);
  }
}

main();
