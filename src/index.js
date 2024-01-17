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

    //to Get the user with ID 1 and include their profile in the response
    const getProfile = await prisma.user.findUnique({
      where: {
        id: 1,
      },
      include: {
        profile: true,
      },
    });
    console.log("Profile of userId 1", getProfile);
  } catch (error) {
    console.log("Error executing queries", error);
  }
}

main();
