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

    //to Update the post with ID 1 so that its text/content is different from what was created in the seed file
    const updateContent = await prisma.post.update({
      where: {
        id: 1,
      },
      data: {
        content: "this has been changed",
      },
    });
    console.log("uppdated content", updateContent);

    //delete the post with id 3
    const deletePost = await prisma.post.delete({
      where: {
        id: 3,
      },
    });
    console.log("deleted Post with ID 3", deletePost);
  } catch (error) {
    console.log("Error executing queries", error);
  }
}

main();