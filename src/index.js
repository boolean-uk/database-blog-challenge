const prisma = require("./db");

//Putting all function inside the main function. Therefore, only need to call main function. Run node src in terminal to run the code:
async function main() {
  console.log("set up completed");

  // Get all rows of data from the users table
  const getAllUsers = await prisma.user.findMany();
  console.log("All users:", getAllUsers);

  // Get all posts that belong to the user with ID 2
  const getPostsByUserId = await prisma.post.findMany({
    where: {
        userId: 2 
    }
  })
  console.log("All posts by user 2:", getPostsByUserId);

  // Get the user with ID 1 and include their profile in the response
  const getUserWithProfile = await prisma.user.findUnique({
    where: {
        id: 1
    },
    include: {
        profile: true
    }
  });

   console.log("User ID 1 with profile:", getUserWithProfile);

  // Update the post with ID 1 so that its text/content is different from what was created in the seed file
  const updatePost = await prisma.post.update({
    data: {
        content: "This is the updated content for post 1"
    },
    where: {
        id: 1
    }
  });

  console.log("Updated post 1:", updatePost);

  // Delete the post with ID 3
  const deletePost = await prisma.post.delete({
    where: {
        id: 3
    }
  });

  console.log("Deleted post 3:", deletePost);
}

main();