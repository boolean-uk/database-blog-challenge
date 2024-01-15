const prisma = require("./db");

const main = async () => {
  const getAllUsers = await prisma.user.findMany();
  const getAllPostForUserTwo = await prisma.post.findMany({
    where: { userId: 2 },
    include: {
      user: { select: { username: true } },
    },
  });
  const getUserOne = await prisma.user.findUnique({
    where: { id: 1 },
    include: { profile: true },
  });
  const updatePostOne = await prisma.post.update({
    where: { id: 1 },
    data: {
      content: "new text",
    },
  });
  // const deletePostTwo = await prisma.post.delete({
  //   where: { id: 2 },
  // });
  const getCommentsWithReponses = await prisma.comment.findMany({
    include:{responses: true}
  })
  console.log(getCommentsWithReponses, getCommentsWithReponses[1],getCommentsWithReponses[1].responses)
};
main();
