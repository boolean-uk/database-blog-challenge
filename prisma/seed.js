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
      },
      posts: {
        createMany: {
          data: [
            {
              title: 'Post 1',
              content: 'Content 1',
              picture_url: 'Picture url 1'
            },
            {
              title: 'Post 2',
              content: 'Content 2'
            },
            {
              title: 'Post 3',
              content: 'Content 3',
              picture_url: 'Picture url 3'
            }
          ]
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
      },
      posts: {
        create: {
          title: 'Post of Bob',
          content: 'Content for post of Bob',
          picture_url: 'Picture url of bob'
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

  const createPost = await prisma.post.create({
    data: {
      title: 'Post of Bob',
      content: 'Content for post of Bob',
      picture_url: 'Picture url of bob',
      is_publish: true,
      profileId: 3,
      comments: {
        createMany: {
          data: [
            { content: 'Content of comment 1' },
            { content: 'Content of comment 2' },
            { content: 'Content of comment 3' }
          ]
        }
      }
    }
  })

  console.log('Created post of user 3', createPost)

  const createComment = await prisma.comment.create({
    data: {
      content: 'Content of comment for post 2',
      postId: 2
    }
  })

  console.log('Created comment', createComment)

  // Don't edit any of the code below this line
  process.exit(0)
}

seed().catch(async (error) => {
  console.error(error)
  await prisma.$disconnect()
  process.exit(1)
})
