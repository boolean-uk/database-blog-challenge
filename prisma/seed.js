const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdUser = await prisma.user.create({
        data: 
            {
                username: "alice10",
                email: "alice@gmail.com",
                phone: 304744604,
                title: "Mr",
                name: "Alice",
                gender: "male"
            }
    });

    console.log('user created', createdUser);

    // Add your code here

    const createdProfile = await prisma.profile.create({
        data: {
            biography: "Here is the biography",
            profileImg: "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445",
            education: "masters",
            skills: "software development",
            user: {
                connect: {
                    id:createdUser.id
                }
            }
        }
    });

    console.log('Profile created', createdProfile);
 

  const createdPost = await prisma.post.create({
    data: {
        title: "Here is the Title",
        content: "Here is teh content of the post",
        isPublished: false,
        pictureURL: "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445",
        user: {
            connect: {
                id:createdUser.id
            }
        }
    }
});

console.log('Post created', createdPost);

const createdComment = await prisma.comment.create({
    data: {
        reactions: "Here is the reactions of the comment",
        content: "here is the content of the comment",
        user: {
            connect: {
                id:createdUser.id
            }
        },

        post: {
            connect:{
                id: createdPost.id
            }
        }
    }
});

console.log('Comment created', createdComment);

    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })