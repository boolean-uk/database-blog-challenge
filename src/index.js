const prisma = require("./db");

const main = async () => {
  const getAllUsers = await prisma.user.findMany();
  const getAllPostForUserTwo = await prisma.post.findMany({
    where: {
      userId: 2,
    }, 
    include: {
      user: {select: {username: true} }
    }
  });
  // Get the user with ID 1 and include their profile in the response
  // Update the post with ID 1 so that its text/content is different from what was created in the seed file
  // Delete the post with ID 3
};
main();
