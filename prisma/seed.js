const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    // USERS
    const createdUsers = await prisma.user.createMany({
        data: [
            { username: 'AliceM', password: 'test1', email: 'test@1.com' },
            { username: 'BarryS', password: 'test2', email: 'test@2.com', phone_num: '1234' },
            { username: 'JohnD', password: 'test3', email: 'test@3.com' },
        ]
    });

    // console.log(`${createdUsers.count} users created`, createdUsers);
    
    // PROFILES
    const createdProfile1 = await prisma.profile.create({
        data: { 
            first_name: 'Alice', 
            last_name: 'May', 
            display_name: 'AliceM',
            profile_picture: 'https://helloworld.com',
            bio: 'Hello World',
            user: {
                connect: {id: 1}
            }
        }
    })

    const createdProfile2 = await prisma.profile.create({
        data: { 
            first_name: 'Barry', 
            last_name: 'Scott', 
            display_name: 'BarryS',
            profile_picture: 'https://www.bing.com/images/search?view=detailV2&ccid=YGHivwBq&id=91DEB8D57637B51161087818B266BFD7359DA50A&thid=OIP.YGHivwBq-SBsmaf276A4sgHaHa&mediaurl=https%3a%2f%2fassets.iceland.co.uk%2fi%2ficeland%2fCillit_Bang_Power_Cleaner_Limescale_Grime_750ml_76038_T1.jpg%3f%24pdpzoom%24&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.6061e2bf006af9206c99a7f6efa038b2%3frik%3dCqWdNde%252fZrIYeA%26pid%3dImgRaw%26r%3d0&exph=1600&expw=1600&q=cillit+bang&simid=607990825124188661&FORM=IRPRST&ck=FB4620E11EF7F6CCE376D4A6DBD0AE52&selectedIndex=1&itb=0&ajaxhist=0&ajaxserp=0',
            bio: 'Hi I\'m Barry Scott. BANG and the dirt is gone',
            user: {
                connect: {id: 2}
            }
        }
    })

    const createdProfile3 = await prisma.profile.create({
        data: { 
            first_name: 'John', 
            last_name: 'Doe', 
            display_name: 'JohnD',
            profile_picture: 'https://www.an_image.com',
            bio: 'Good day!',
            user: {
                connect: {id: 3}
            }
        }
    })

    // POSTS
    const createdPost1 = await prisma.post.create({
        data: { 
            title: 'My post', 
            content: 'post 1', 
            is_published: false,
            picture_url: 'https://www.an_image.com',
            user: {
                connect: {id: 1}
            }
        }
    })
    const createdPost2 = await prisma.post.create({
        data: { 
            title: 'My post 2', 
            content: 'post 2', 
            is_published: true,
            picture_url: 'https://www.an_image.com',
            user: {
                connect: {id: 1}
            }
        }
    })

    const createdPost3 = await prisma.post.create({
        data: { 
            title: 'Nothing beats a bit of turbo power', 
            content: 'Try this new Cillit Bang product', 
            is_published: true,
            picture_url: 'https://www.new_cillit_bang_ WOW.com',
            user: {
                connect: {id: 2}
            }
        }
    })
    const createdPost4 = await prisma.post.create({
        data: { 
            title: 'Why you should trust me, Barry Scott', 
            content: 'BANG, and the dirt is gone', 
            is_published: false,
            picture_url: 'https://www.bangandthedirtisgone.com',
            user: {
                connect: {id: 2}
            }
        }
    })

    const createdPost5 = await prisma.post.create({
        data: { 
            title: 'Has anyone seen Jane Doe?', 
            content: 'Hello all...', 
            is_published: true,
            picture_url: 'https://www.an_image.com',
            user: {
                connect: {id: 3}
            }
        }
    })
    const createdPost6 = await prisma.post.create({
        data: { 
            title: 'Testing one...two...three', 
            content: 'Goodbye all...', 
            is_published: false,
            picture_url: 'https://www.an_image.com',
            user: {
                connect: {id: 3}
            }
        }
    })

    // COMMENTS
    const createdComment1 = await prisma.comment.create({
        data: { 
            content: 'Commenting on my own post', 
            user: {
                connect: {id: 1}
            },
            post: {
                connect: {id: 2}
            }
        }
    })

    const createdComment2 = await prisma.comment.create({
        data: { 
            content: 'Hi Barry Scott, massive fan. Love the effectiveness of your Cillit Bang at getting rid of that stubbon limescale. BANG, and the dirt is gone!', 
            user: {
                connect: {id: 1}
            },
            post: {
                connect: {id: 4}
            }
        }
    })

    const createdComment3 = await prisma.comment.create({
        data: { 
            content: 'Hello John, if you cannot find Jane Doe, I promise it wasn\'t the Cillit Bang which made her disappear. It\'s good for getting rid of limescale, not people.', 
            user: {
                connect: {id: 2}
            },
            post: {
                connect: {id: 5}
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