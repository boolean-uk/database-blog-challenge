const prisma = require("./db.js");

async function main() {

    //  Get all rows of data from the users table

  const getAllUsers = await prisma.user.findMany();

  console.log("All users:", getAllUsers);


  // Get all posts that belong to the user with ID 2

  const getAllPostsForUser2 = await prisma.post.findMany({
    where: {
      userId: 2,
    },
  });

  console.log("All posts for user with ID 2:", getAllPostsForUser2);


 // Get the user with ID 1 and include their profile in the response

  const getUserAndProfileForUser1 = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      profile: true,
    },
  });

  console.log("User and Profile of Id 1", getUserAndProfileForUser1);

 // Update the post with ID 1 so that its text/content is different from what was created in the seed file

  const updatedPostForUser1 = await prisma.post.update({
    where: {
      id: 1,
    },
    data: { content: "I live in LONDON." },
  });

  console.log("Updatedpost", updatedPostForUser1);

 // Delete the post with ID 3
 
  const deletedPost = await prisma.post.delete({
    where: {
      id: 3,
    },
  });

  console.log("Deleted post of Id 3", deletedPost);
}

main();