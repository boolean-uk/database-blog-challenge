const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
  const createdUsers = await prisma.user.createMany({
    data: [
      {
        username: 'Faiza',
        city: 'London',
        email: 'faiza@gmail.com'
      },
      {
        username: 'Sara',
        city: 'Luton',
        email: 'sara@gmail.com'
      },
      {
        username: 'Alice',
        city: 'Bradford',
        email: 'alice@gmail.com'
      }
    ]
  });

  //console.log(`${createdUsers.count} users created`, createdUsers);
  console.log(`${Object.keys(createdUsers).length} users created`, createdUsers);




  const createProfile = await prisma.profile.createMany({
    data: [
      {
        user_id : 1,
        biography: 'Biography of Faiza',
        picture_url: 'picture url for profile',
      },
      {
        user_id : 2,
        biography: 'Biography of Sara',
        picture_url: 'picture url for profile',
      },
      {
        user_id : 3,
        biography: 'Biography of Alice',
        picture_url: 'picture url for profile',
      },
    ]
  });


  const createPost = await prisma.post.createMany({
    data: [{
      title: 'Post of Sara',
      content: 'Sara post content',
      picture_URL: 'Sara picture_URL',
      is_publish: true,
      profileId: 3
    },
       {
      title: "Studying with us",
      content: "Come join study with us",
      isPublished: true,
      profileId: 3,
    },
    {
      title: "Travelling",
      content: "Travel  to the Malaysia",
      picture_URL: ' picture_URL',
      isPublished: true,
      profileId: 1,
    },
    {
      title: "Cooking",
      content: "Cooking Biryani",
      picture_URL: ' picture_URL',
      isPublished: true,
      profileId: 1,
    },
    {
      title: "Writting",
      content: "Novel Writting",
      isPublished: true,
      profileId: 2,
    },
  ]
    });

console.log('Created post of user_id', createPost);


const createComment = await prisma.comment.createMany({
  data: [
    { content: "work work work",  user_id: 1, postId: 1 },
    { content: "Nice work",  user_id: 2, postId: 2 },
    { content: "job done",  user_id: 3, postId: 3 },
  ],
});

console.log("Comment for post and user id's", createComment);



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