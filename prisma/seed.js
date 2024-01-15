const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdUsers = await prisma.user.createMany({
        data: [
            { username: 'AliceM', password: 'test1', email: 'test@1.com' },
            { username: 'BarryS', password: 'test2', email: 'test@2.com', phone_num: '1234' },
            { username: 'JohnD', password: 'test3', email: 'test@3.com' },
        ]
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