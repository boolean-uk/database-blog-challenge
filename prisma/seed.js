const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdUsers = await prisma.user.createMany({
        data: [
            {
              username: 'Faiza',
              city: 'London',
              email: 'faiza@gmail.com'
            },
            {
              username: 'Sara',
              city: 'Luton',
              email: 'sara@gmail.com'
            },
            {
              username: 'Alice',
              city: 'Bradford',
              email: 'alice@gmail.com'
            }
          ]
        });

        console.log(`${createdUsers.count} users created`, createdUsers);



          const createProfile1 = await prisma.profile.create({
            data: {
              biography: 'Biography of Faiza',
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
              biography: 'Biography of Sara',
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
              biography: 'Biography of Alice',
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
              title: 'Post of Sara',
              content: 'Sara post content',
              picture_URL: 'Sara picture_URL',
              is_publish: true,
              profileId: 3
            },
          });
         
          console.log('Created post of user 2', createPost);


          const createdComment = await prisma.comment.create({
            data: {
              content: "this is my friend profile",
              postId: 1,
            },
          });
        
          console.log("Comment for post 1 created", createdComment);
          
  

    // Add your code here

    


    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })