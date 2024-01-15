const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function seed() {
  const createdUsers = await prisma.user.createMany({
    data: [
      {
        username: 'Nazar',
        age: 18,
        city: 'London',
        email: 'test@gmail.com'
      },
      {
        username: 'Bob',
        age: 23,
        city: 'Liverpool',
        email: 'test2@gmail.com'
      },
      {
        username: 'Papi',
        age: 25,
        city: 'Hamburg',
        email: 'papi@gmail.com'
      }
    ]
  })

  console.log(`${createdUsers.count} users created`, createdUsers)

  // Add your code here

  // Don't edit any of the code below this line
  process.exit(0)
}

seed().catch(async (error) => {
  console.error(error)
  await prisma.$disconnect()
  process.exit(1)
})
