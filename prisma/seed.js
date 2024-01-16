const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
    const createdUsers = await prisma.user.createMany({
        data: [
            { username: "peaches", email: "fakeemail@hotmail.com" },
            { username: "chunky", email: "chunkyfella@hotmail.com" },
            { username: "tricky", email: "bigtrickster99@hotmail.com" },
        ],
    });
    console.log(`${createdUsers.count} users created`, createdUsers);

    const createdProfiles = await prisma.profile.createMany({
        data: [
            {
                userId: 1,
                firstName: "Lukas",
                lastName: "Coderman",
                bio: "This is my bio",
                profilePic:
                    "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
                userId: 3,
                firstName: "Janice",
                lastName: "Codergirl",
                bio: "This is my really amazing bio that cannot be longer than 120 characters",
                profilePic: "www.picture.com",
            },
            {
                userId: 2,
                firstName: "Henry",
                bio: "small bio",
                profilePic: "www.anotherpic.com",
            },
        ],
    });
    console.log("profiles created:", createdProfiles.count);

    const createdPosts = await prisma.post.createMany({
        data: [
            {
                title: "Moving away",
                content:
                    "Hey family thought I would post I am moving away. Too Narnia.",
                isPublished: true,
                userId: 3,
            },
            {
                title: "Wanna hang?",
                content: "Anyone wanna hang out with me?",
                isPublished: true,
                userId: 2,
            },
            {
                title: "Best workout?",
                content: "Whos got the best work out. Lets hear it",
                isPublished: true,
                userId: 1,
            },
            {
                title: "Another post",
                content: "Hey this is another post",
                isPublished: true,
                userId: 3,
            },
            {
                title: "Wanna not hang?",
                content: "I dont wanna hand anymore.",
                isPublished: true,
                userId: 2,
            },
            {
                title: "Worst workout?",
                content: "Now I wanna know what the worst hang out is.",
                isPublished: true,
                userId: 1,
            },
        ],
    });

    console.log("posts created", createdPosts.count);

    const createdComments = await prisma.comment.createMany({
        data: [
            { content: "Youre moving where!?", postId: 1, userId: 1 },
            { content: "Sure lets hang!", postId: 2, userId: 2 },
            { content: "Crunches man!", postId: 3, userId: 3 },
        ],
    });

    console.log("comments created:", createdComments);
    // Don't edit any of the code below this line
    process.exit(0);
}

seed().catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
});
