const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdUser1 = await prisma.user.create({
        data: {  
            username: 'ackson',
            email: 'netw5783@gmail.com',
            password: 'makemoney@2023'
        }
    });
    console.log('User 1 created', createdUser1);

    const createdUser2 = await prisma.user.create({
        data: {  
            username: 'mackson',
            email: 'usama@gmail.com',
            password: 'makemoney@2023'
        }
    });
    console.log('User 2 created', createdUser2);

    const createdUser3 = await prisma.user.create({
        data: {  
            username: 'hackson',
            email: 'lusama@gmail.com',
            password: 'makemoney@2023'
        }
    });
    console.log('User 3 created', createdUser3);



    const createdProfile1 = await prisma.profile.create({
        data: {
            name: 'usama',
            bio: 'othello man', 
            picture: 'this is the string',
            user: {
                connect: {
                    id: createdUser1.id
                }
            }
        }
    });
    console.log('Profile 1 created', createdProfile1);


    const createdProfile2 = await prisma.profile.create({
        data: {
            name: 'ibrahim',
            bio: 'othello man', 
            picture: 'this is the string',
            user: {
                connect: {
                    id: createdUser2.id
                }
            }
        }
    });
    console.log('Profile 2 created', createdProfile2);


    const createdProfile3 = await prisma.profile.create({
        data: {
            name: 'mikel',
            bio: 'othello man', 
            picture: 'this is the string',
            user: {
                connect: {
                    id: createdUser3.id
                }
            }
        }
    });
    console.log('Profile 3 created', createdProfile3);


    const createdPost1 = await prisma.post.create({
        data: {
            title: 'the forbidden kingdom',
            content: 'this is just me and within this',
            user: {
                connect: {
                    id: createdUser1.id
                }
            }
        }
    });

    const createdPost2 = await prisma.post.create({
        data: {
            title: 'the legend son',
            content: 'this is just me and within this',
            picture: 'no picture',
            user: {
                connect: {
                    id: createdUser1.id
                }
            }
        }
    });
    console.log('Post created', createdPost2);


    const createdPost3 = await prisma.post.create({
        data: {
            title: 'the killer',
            content: 'this is just me and within this',
            user: {
                connect: {
                    id: createdUser2.id
                }
            }
        }
    });
    console.log('Post created', createdPost3);



    const createdPost4 = await prisma.post.create({
        data: {
            title: 'the marmaid kingdom',
            content: 'this is just me and within this',
            picture: 'no picture',
            user: {
                connect: {
                    id: createdUser2.id
                }
            }
        }
    });
    console.log('Post created', createdPost4);


    const createdPost5 = await prisma.post.create({
        data: {
            title: 'mission impossible',
            content: 'this is just me and within this',
            user: {
                connect: {
                    id: createdUser3.id
                }
            }
        }
    });
    console.log('Post created', createdPost5);

    
    const createdPost6 = await prisma.post.create({
        data: {
            title: 'kenshin',
            content: 'this is just me and within this',
            picture: 'no picture',
            user: {
                connect: {
                    id: createdUser3.id
                }
            }
        }
    });
    console.log('Post created', createdPost6);



    const createdComment1 = await prisma.comment.create({
        data: {
            content: 'this si all of the things that i said i would do , and i am doing it!',
            user: {
                connect: {
                    id: createdUser1.id
                }
            },
            post: {
                connect: {
                    id: createdPost1.id
                }
            }

        }
    })
    console.log('comment 1 created', createdComment1);

    const createdComment2 = await prisma.comment.create({
        data: {
            content: 'This is a comment for the second post of User 1.',
            user: {
                connect: {
                    id: createdUser1.id
                }
            },
            post: {
                connect: {
                    id: createdPost2.id
                }
            }
        }
    });
    console.log('comment 2 created', createdComment2);



    const createdComment3= await prisma.comment.create({
        data: {
            content: 'This sis what i was build for man.',
            user: {
                connect: {
                    id: createdUser1.id
                }
            }
        }
    });
    console.log('comment 3 created', createdComment3);
}
    

seed()
    .catch((error) => {
        throw error;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
