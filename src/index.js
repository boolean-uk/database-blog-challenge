const prisma = require("../db/db.js");

async function getAllUsers() {
  const users = await prisma.user.findMany();
  console.log(users);
  return users;
}

async function getPostsByUser(userId) {
  const posts = await prisma.post.findMany({
    where: {
      User: {
        id: userId,
      },
    },
  });
  console.log(posts);
  return posts;
}

async function getUserProfile(userId) {
  const userAndProfile = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      Profile: true,
    },
  });
  console.log(userAndProfile);
  return userAndProfile;
}

async function updatePostContent(postId, newContent) {
  const updatedPost = await prisma.post.update({
    where: {
      id: postId,
    },
    data: {
      content: newContent,
    },
  });
  console.log(updatedPost);
  return updatedPost;
}

async function deletePostById(postId) {
  const deletedPost = await prisma.post.delete({
    where: {
      id: postId,
    },
  });
}

getAllUsers();
getPostsByUser(2);
getUserProfile(1);
updatePostContent(1, "I am editing this post!!!!");
deletePostById(3);
