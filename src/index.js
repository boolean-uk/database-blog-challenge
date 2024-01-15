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
  const getUserOne = await prisma.user.findUnique({
    where: {
        id: 1
    }, 
    include: {profile: true}
  })
  console.log(getUserOne)
  // Get the user with ID 1 and include their profile in the response
  // Update the post with ID 1 so that its text/content is different from what was created in the seed file
  // Delete the post with ID 3
};
main();
