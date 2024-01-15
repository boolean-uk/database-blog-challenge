const prisma = require("./db")

async function main() {
    const users = await prisma.user.findMany()
    console.log("all users", users)
}