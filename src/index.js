const prisma = require('./db.js')


async function main() {
    const getAllData = await prisma.user.findMany({})
    console.log('get all the rows of data from the user table',getAllData)

    const getUser2Post = await prisma.user.findUnique({
        where: {
            id: 2
        }     
    })
    console.log('get all post that belongs to user with id 2',getUser2Post)

    const getUser1AndProfile = await prisma.user.findUnique({
        where: {
            id: 1
        },
        include: {
            profile: true
        }
    })
    console.log('get the user with ID 1 with there profile', getUser1AndProfile)


    const updatedId1 = await prisma.post.update({
        where: {
            id: 1
        },
        data: {
            content: "New content for the post with ID 1"
        }
    })
    console.log('updated user 1', updatedId1)

    const deleteId3Post = await prisma.post.delete({
        where: {
            id: 3
        }
    })
    console.log('deketed data', deleteId3Post)
}

main()