const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdUsers = await prisma.user.createMany({
        data: [
            { username: 'alicemar', email: 'alice.martin@yahoo.com' },
            { username: 'alice', email: 'alice.martina@hotmail.com' }
        ]
    });

    console.log(`${createdUsers.count} users created`, createdUsers);

    // Add your code here
    const createdProfile = await prisma.profile.create({
        data: {
            pictureURL: "Alice in wonderland.",
            bio: "Long time ago, far far away...",
            user: {
                connect: {id: 2}
            }
        }
    })

    console.log(`${createdProfile.count} users created`, createdProfile);


    const createdPost = await prisma.post.create({
        data: {
            title: "Alice in real life",
            content: "She is now over 80 years of age, and in wonderland.",
            published: true,
            user: {
                connect: {
                    id: 2
                }
            }
        }
    })

    console.log(`${createdPost.count} users created`, createdPost);

    const createdComment = await prisma.comment.create({
        data: {
            content: "No that is lie she must be same as auther created Alice in Wonderland!",
            user: {
                connect: {
                    id: 2
                }
            },
            post: {
                connect: {
                    id: 1
                }
            }
        }
    })


    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })