const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
	const createdUsers = await prisma.user.createMany({
		data: [
			{ username: "alicemarti", email: "alice@email.com" },
			{ username: "robertjohn", email: "robert@email.com" },
			{ username: "patrick", email: "patrick@email.com" },
		],
	});
	console.log(`${createdUsers.count} users created`, createdUsers);

	// Creating 3 Profiles
	await prisma.profile.create({
		data: {
			User: {
				connect: { id: 1 },
			},
			profile_img_url: "http://image.com/alice",
			first_name: "Alice",
			last_name: "Martin",
			bio: "Bruh I am Alice what else you want to know 😁",
		},
	});
	await prisma.profile.create({
		data: {
			User: {
				connect: { id: 2 },
			},
			profile_img_url: "http://image.com/robert",
			first_name: "Robert",
			last_name: "John",
			bio: "Bruh I am Robert what else you want to know 🧙‍♂️",
		},
	});
	await prisma.profile.create({
		data: {
			User: {
				connect: { id: 3 },
			},
			profile_img_url: "http://image.com/patrick",
			first_name: "Patrick",
			last_name: "Potato",
			bio: "Bruh I am Patrick what else you want to know 💀",
		},
	});

	// Create Posts
	await prisma.post.create({
		data: {
			Profile: {
				connect: { id: 1 },
			},
			title: "Bruh",
			content: "bad comments up there huh",
			published: true,
			// post_img_url: String
		},
	});
	await prisma.post.create({
		data: {
			Profile: {
				connect: { id: 2 },
			},
			title: "Hello there!",
			content: "How was your day guys?",
			// published: Boolean
			// post_img_url: String
		},
	});
	await prisma.post.create({
		data: {
			Profile: {
				connect: { id: 3 },
			},
			title: "I BOUGHT A CAR",
			content: "🚘🚘🚘🚘",
			published: true,
			post_img_url: "https://image.com/someImage",
		},
	});

	// Create Comments
	await prisma.comment.create({
		data: {
			Profile: {
				connect: { id: 1 },
			},
			Post: {
				connect: { id: 3 },
			},
			content: "Congrats brother!",
		},
	});
	await prisma.comment.create({
		data: {
			Profile: {
				connect: { id: 2 },
			},
			Post: {
				connect: { id: 3 },
			},
			content: "How much was it? 😳",
		},
	});
	await prisma.comment.create({
		data: {
			Profile: {
				connect: { id: 3 },
			},
			Post: {
				connect: { id: 3 },
			},
			content: "It was cheap, i bought to fix 😁",
		},
	});

	process.exit(0);
}

seed().catch(async (error) => {
	console.error(error);
	await prisma.$disconnect();
	process.exit(1);
});
