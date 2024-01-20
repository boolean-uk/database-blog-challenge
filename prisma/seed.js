const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdUsers = await prisma.user.createMany({
        data: [
            {
                username: "john",
                email: "john34@gmail.com"
            },
            {
                username: "valentina", 
                email: "valentinna@gmail.com"
            }
        ]
    });

    console.log(`${createdUsers.count} users created`, createdUsers);

    const createdProfile = await prisma.Profile.createMany({
        data: [
            {
                userId: 2,
                bio: 'Passionate photographer',
                profilePicture: 'https://www.bing.com/ck/a?!&&p=32a99da0ee6f0d0eJmltdHM9MTcwNTcwODgwMCZpZ3VpZD0wZGE5OWU4ZS0zNTFlLTY0ODAtMDNmZC04ZDYwMzRkZjY1YmYmaW5zaWQ9NTQ0Ng&ptn=3&ver=2&hsh=3&fclid=0da99e8e-351e-6480-03fd-8d6034df65bf&u=a1L2ltYWdlcy9zZWFyY2g_cT1wcm9maWxlK3BpY3R1cmVzJmlkPUIxNTMzNEYxMDgxRTM5NjE1ODExMEU0QzcyRTczQTM4M0FGNTcxQkYmRk9STT1JUUZSQkE&ntb=1'
             },
             {
                userId: 1,
                bio: 'I do not have a bio',
                profilePicture: 'https://www.bing.com/ck/a?!&&p=d30e7ed07a7577e8JmltdHM9MTcwNTcwODgwMCZpZ3VpZD0wZGE5OWU4ZS0zNTFlLTY0ODAtMDNmZC04ZDYwMzRkZjY1YmYmaW5zaWQ9NTQ0Nw&ptn=3&ver=2&hsh=3&fclid=0da99e8e-351e-6480-03fd-8d6034df65bf&u=a1L2ltYWdlcy9zZWFyY2g_cT1wcm9maWxlK3BpY3R1cmVzJmlkPTZFM0ZFNUVGMEQ2NTcyNjExQkFCN0ZBODJDOTA1NEExMEUzQkJGQjImRk9STT1JUUZSQkE&ntb=1'
             }
        ]
    });






    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })