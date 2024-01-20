const prisma = require('./db.js')

async function main() {

    const getAllUsers = await prisma.user.findMany()
    console.log(getAllUsers)


    const getPostById = await prisma.post.findMany({
        where: { userId: 2 },
    })
    console.log('posts of userId 2', getPostById)


    const getUser = await prisma.user.findMany({
        where: {
            id: 1
        },
        include: {
            profile: true
        }
    })
    console.log('--------', getUser)


    const updatePost = await prisma.post.update({
        where: {
            id: 1
        },
        data: {
            content: 'Welcome to my page!'
        }
    })
    console.log(updatePost)


    const deletePost = await prisma.post.delete({
        where: {
            id: 3
        }
    })
    console.log(deletePost)
}

main()