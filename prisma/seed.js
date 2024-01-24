const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdUsers = await prisma.user.createMany({
        data: [
            {
                username: 'test123',
                email: 'test123@email.com',
                password: 'supersecure',
                phone_number: '1234567890',
            },
            {
                username: 'test124',
                email: 'test124@email.com',
                password: 'supersecurezzz',
                phone_number: '1234567890',
            },
        ],
    });

    console.log(`${createdUsers.count} users created`, createdUsers);

    // Add your code here
    const createdProfiles = await prisma.profile.createMany({
        data: [
            {
                user_id: 1,
                first_name: 'Pino',
                display_name: 'Pino',
                last_name: 'LaLavatrice',
                bio: 'Pino fix dishwashers',
                profilePicUrl: 'https://dishwasher.com/wp-content',
            },
            {
                user_id: 2,
                first_name: 'Ajeje',
                display_name: 'Ajeje',
                last_name: 'Brazoff',
                bio: 'travel on the bus for free',
                profilePicUrl: 'https://bus.com/wp-content',
            }
        ]
    });
    console.log(`${createdProfiles.count} profiles created`, createdProfiles);

    const createdPosts = await prisma.post.createMany({
        data: [
            {
                user_id: 1,
                title: 'Hello World',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
                isPublished: true,
                date : new Date(),
            },
            {
                user_id: 2,
                title: 'Hello World',
                text: 'Lorem100 dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
                isPublished: true,
                date : new Date(),

            }
        ]
    });
    console.log(`${createdPosts.count} posts created`, createdPosts);

    const createdComments = await prisma.comment.createMany({
        data : [
            {
                content : 'Hello World',
                post_id : 1,
                user_id : 1,
                date : new Date(),
            },
            {
                content : 'Hello coding world',
                post_id : 2,
                user_id : 2,
                date : new Date(),
            },
            {
                content : 'Hello new world',
                post_id : 2,
                user_id : 1,
                date : new Date(),
            }
        ]
    });
    console.log(`${createdComments.count} comments created`, createdComments);


    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })