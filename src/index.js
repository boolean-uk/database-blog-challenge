const prisma = require("./db");

const main = async () => {
  const getAllUsers = await prisma.user.findMany();
  console.log(getAllUsers);
  // Get all posts that belong to the user with ID 2
  // Get the user with ID 1 and include their profile in the response
  // Update the post with ID 1 so that its text/content is different from what was created in the seed file
  // Delete the post with ID 3
};
main();
