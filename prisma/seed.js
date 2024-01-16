const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdUsers = await prisma.user.createMany({
        data: [
            { username: 'alicemartin' },
            { username: 'alicemartin' }
        ]
    });

    console.log(`${createdUsers.count} users created`, createdUsers);

    // Add your code here

    const createdProfile = await prisma.profile.createMany({
        data: [
          {
            bio: "What up gangstah",
            userId: 1,
            profilePictureUrl:
              "https://cdn.britannica.com/92/171292-050-AA6ABC3A/species-authorities-dingos-wolf-subspecies.jpg",
          },
          {
            bio: "What up gangstah",
            userId: 2,
            profilePictureUrl:
              "https://cdn.britannica.com/92/171292-050-AA6ABC3A/species-authorities-dingos-wolf-subspecies.jpg",
          },
          {
            bio: "What up gangstah",
            userId: 3,
            profilePictureUrl:
            'https://cdn.britannica.com/92/171292-050-AA6ABC3A/species-authorities-dingos-wolf-subspecies.jpg'
          },
        ],
      });
    
      console.log(`${createdProfile.count} profiles created`, createdProfile);
    
      const createdPost = await prisma.post.createMany({
        data: [
          {
            title: "I like people",
            content: "qwrweewrr",
            authorId: 1,
          },
          {
            title: "Come here now",
            content: "trjferyerre",
            authorId: 2,
          },
          {
            title: "I want hot chocolate",
            content: "mghnhmh",
            authorId: 1,
          },
          {
            title: "Let me drink one now",
            content: "hdfhdhhdfhf",
            authorId: 2,
          },
          {
            title: "With carbs",
            content: "milo;l.,",
            authorId: 1,
          },
          {
            title: "We also hate Javascript",
            content: "efwegwgew",
            authorId: 3,
          },
        ],
      });
    
      console.log(`${createdPost.count} posts created`, createdPost);
    
      const createdComment = await prisma.comment.createMany({
        data: [
          {
            text: "I like to comment",
            postId: 1,
            authorId: 2,
          },
          {
            text: "Lets comment",
            postId: 2,
            authorId: 3,
          },
          {
            text: "EVERYONE COMMENT NOW",
            postId: 3,
            authorId: 2,
          },
        ],
      });
    
      console.log(`${createdComment.count} posts created`, createdComment);
      // Don't edit any of the code below this line
      process.exit(0);
    }
    
    seed().catch(async (error) => {
      console.error(error);
      await prisma.$disconnect();
      process.exit(1);
    });


    // Don't edit any of the code below this line
    process.exit(0);


seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })