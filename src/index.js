const prisma = require('./db.js')

async function main() {

    const getAllUsers = await prisma.user.findMany()
    console.log(getAllUsers)
    

    const getPostById = await prisma.post.findMany({
        where: {userId: 2},
    })
    console.log('posts of userId 2',getPostById)
}

main()