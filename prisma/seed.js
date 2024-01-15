const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdUsers = await prisma.user.createMany({
        data: [
            { username: 'asdrubale', password: '123456789', email: 'email@example.com',phone_number: '1234567890'},
            { username: 'astonmartin', password: 'secure123', email: 'email2@example.com', phone_number: '1234567890'},
            { username: 'ajeje', password: 'supersecure', email: 'email3@example.com', phone_number: '1234567890'},
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