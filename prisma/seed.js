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

	const createdProfiles = await prisma.profile.createMany({
		data: [
			{
				user_id: 1,
				profile_img_url: "http://image.com/alice",
				first_name: "Alice",
				last_name: "Martin",
				bio: "Bruh I am Alice what else you want to know 😁",
			},
			{
				user_id: 2,
				profile_img_url: "http://image.com/robert",
				first_name: "Robert",
				last_name: "John",
				bio: "Bruh I am Robert what else you want to know 🧙‍♂️",
			},
			{
				user_id: 3,
				profile_img_url: "http://image.com/patrick",
				first_name: "Patrick",
				last_name: "Potato",
				bio: "Bruh I am Patrick what else you want to know 💀",
			},
		],
	});

	console.log(`${createdUsers.count} users created`, createdUsers);

	// Add your code here

	// Don't edit any of the code below this line
	process.exit(0);
}

seed().catch(async (error) => {
	console.error(error);
	await prisma.$disconnect();
	process.exit(1);
});
