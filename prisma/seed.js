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

    const createdPost = await prisma.post.createMany({
        data: [
            {
                userId: 1,
                title: 'my first post',
                content: 'Hello world',
                isPublished: true
            },
            {
                userId: 1,
                title: 'my second post',
                content: 'Hello world again',
                isPublished: true
            },
            {
                userId: 2,
                title: 'car for sale',
                content: 'brand new car for just 200.000$',
                picture: 'https://www.bing.com/images/search?view=detailV2&ccid=QFO8tluH&id=DE430E8D93F7CC61B836C11548AD05AE0A0CC768&thid=OIP.QFO8tluHp1mtzka6uYS3QQHaEo&mediaurl=https%3a%2f%2fag-spots-2018.o.auroraobjects.eu%2f2018%2f04%2f05%2fother%2f2880-1800-crop-lamborghini-urus-c638805042018130138_1.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.4053bcb65b87a759adce46bab984b741%3frik%3daMcMCq4FrUgVwQ%26pid%3dImgRaw%26r%3d0&exph=1800&expw=2880&q=lamborghini+urus&simid=608015615658911572&FORM=IRPRST&ck=B3AF29E2051BC37589B83AA87E70EA23&selectedIndex=2&itb=0',
                isPublished: true
            }
        ]
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