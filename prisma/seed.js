const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    // Add your code here
    const createdUsers = await prisma.user.createMany({
        data: [
          {
            username: 'Loza',
            age: 25,
            city: 'Barcelona',
            email: 'loza@gmail.com'
          },
          {
            username: 'Sara',
            age: 25,
            city: 'Valencia',
            email:  'saralui23@gmail.com'
          },
          {
            username: 'Rebca',
            age: 23,
            city: 'LA',
            email: 'Rebcala12@gmail.com'
          }
        ]
      })

      console.log(`${createdUsers.count} users created`, createdUsers)

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
    // Don't edit any of the code below this line
    
    console.log('Created profiles', [
        createProfile1,
        createProfile2,
        createProfile3
      ])
      //creates a post
      const createPost = await prisma.post.create({
        data: {
          title: 'Post of Loza',
          content: 'Content for post of Sara',
          picture_url: 'Picture url of Rebca',
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
          postId: 2,
          replies: {
            createMany: {
              data: [
                { content: 'Replies 1', postId: 2 },
                { content: 'Replies 2', postId: 2 },
                { content: 'Replies 3', postId: 2 },
                { content: 'Replies 4', postId: 2 }
              ]
            }
          }
        }
      })
    
      console.log('Created comment', createComment)
    
      const createReplies = await prisma.comment.create({
        data: {
          content: 'Content of replies',
          postId: 4,
          commentId: 2
        }
      })
    
      console.log('Created replies', createReplies)
    
      // Don't edit any of the code below this line
      process.exit(0)
    }
    
    seed().catch(async (error) => {
      console.error(error)
      await prisma.$disconnect()
      process.exit(1)
    })