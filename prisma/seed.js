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
  const createProfile1 = await prisma.profile.create({
    data: {
      biography: 'Biography of Nazar',
      picture_url: 'picture url for profile',
      user: {
        connect: {
          id: 1
        }
      }
    }
  })

  const createProfile2 = await prisma.profile.create({
    data: {
      biography: 'Biography of Bob',
      picture_url: 'picture url for profile',
      user: {
        connect: {
          id: 2
        }
      }
    }
  })

  const createProfile3 = await prisma.profile.create({
    data: {
      biography: 'Biography of Papi',
      picture_url: 'picture url for profile',
      user: {
        connect: {
          id: 3
        }
      }
    }
  })

  console.log('Created profiles', [
    createProfile1,
    createProfile2,
    createProfile3
  ])

  // Don't edit any of the code below this line
  process.exit(0)
}

seed().catch(async (error) => {
  console.error(error)
  await prisma.$disconnect()
  process.exit(1)
})
