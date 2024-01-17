const prisma = require("./db.js");

async function main() {
  try {
    const getAllUsers = await prisma.user.findMany();
    console.log("all users", getAllUsers);
  } catch (error) {
    console.log("Error executing queries", error);
  }
}

main();
