const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
	const createdUsers = await prisma.user.createMany({
		data: [
			{ username: "alicemarti", email: "alice@email.com" },
			{ username: "robertjohn", email: "robert@email.com" },
			{ username: "patrick", email: "patrick@email.com" },
			{ username: "bob", email: "bob@email.com" },
			{ username: "thiagoo", email: "thiagoo@email.com" },
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
