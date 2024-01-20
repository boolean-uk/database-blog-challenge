const prisma = require('./db.js')

async function main() {

    const getAllUsers = await prisma.user.findMany()
    console.log(getAllUsers)
}

main()