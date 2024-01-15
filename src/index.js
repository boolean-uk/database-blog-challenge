const prisma = require('./db.js')

async function main() {
    // 1) ALL USERS
    const getUsers = await prisma.user.findMany();
    console.log('all users', getUsers);

    // 2) ALL POSTS BELONGING TO USER WITH ID 2
    const getPosts = await prisma.post.findMany({
        where: {user_id: 2}
    });
    console.log('all posts belonging to user with id 2', getPosts);

    // 3) USER WITH ID 1 WITH PROFILE INCLUDED
    const getUser1WithProfile = await prisma.user.findUnique({
        where: { id: 1},
        include: { profile: true }
    })
    console.log('user 1 and profile', getUser1WithProfile)

    // 4) UPDATE POST WITH ID 1 TO CHANGE CONTENT
    const updatePost1Content = await prisma.post.update({
        where: {id: 1},
        data: {content: 'I have just changed this post, how amazing!'}
    })
    console.log('updated post 1', updatePost1Content)

    // 5) DELETE POST WITH ID 3
    const deletePost3 = await prisma.post.delete({
        where: {id: 3}
    })
    console.log(deletePost3)
}

main()