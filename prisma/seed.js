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

    


    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })