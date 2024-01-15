const prisma = require('./db.js')

async function main() {
  const getUsers = await prisma.user.findMany();
  console.log('all users', getUsers);

}

main()