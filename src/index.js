const prisma = require("./db.js");

async function getAllUsers() {
    const getAllUsersDb = await prisma.user.findMany();
    console.log(getAllUsersDb);
}

async function getPosts() {
    const getPostsFromUsersWithId2 = await prisma.post.findMany({
        where: {
            userId: 2,
        },
    });
    console.log(getPostsFromUsersWithId2);
}

async function getUser1WithProfile() {
    const getUserOneWithProfile = await prisma.user.findUnique({
        where: {
            id: 1,
        },
        include: {
            profile: true,
        },
    });
    console.log(getUserOneWithProfile);
}

async function UpdatePost() {
    const updatePostWithIdOne = await prisma.post.update({
        where: {
            id: 1,
        },
        data: {
            content: "Hey, this is a changed post!",
        },
    });
    console.log(updatePostWithIdOne);
}

async function deletePost() {
    const deletePostWithId3 = await prisma.post.delete({
        where: {
            id: 3,
        },
    });
    console.log(deletePostWithId3);
}

getAllUsers()
getPosts()
getUser1WithProfile()
UpdatePost()
deletePost()
