const prisma = require('./db.js')

async function main() {

    const getAllUsers = await prisma.user.findMany()
    console.log(getAllUsers)


    const getPostById = await prisma.post.findMany({
        where: {userId: 2},
    })
    console.log('posts of userId 2',getPostById)
    

    const getUser = await prisma.user.findMany({
        where: {
            id: 1
        },
        include: {
            profile: true
        }
    })
    console.log('--------',getUser)
}

main()