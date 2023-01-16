const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
	const createdUser1 = await prisma.user.create({
		data: {
			username: "AliceM101",
			email: "AMartin@ntlworld.com",
			isAdmin: false,
		},
	});
	const createdUser2 = await prisma.user.create({
		data: { username: "Dex491", email: "Dex@examplemail.com", isAdmin: true },
	});

	console.log(`${createdUser1} & ${createdUser2} user created`);

	// Add your code here
	const createdProfile1 = await prisma.profile.create({
		data: {
			profilePic: "idk-cat-pic.png",
			bio: "Live, laugh, loathe",
			user: {
				connect: {
					id: createdUser1.id,
				},
			},
		},
	});
	const createdProfile2 = await prisma.profile.create({
		data: {
			profilePic: "https://i.imgur.com/r3bpsYA.jpg",
			bio: "'Gamers aren't oppressed, but they should be.' - Martin Lex Luther King",
			user: {
				connect: {
					id: createdUser2.id,
				},
			},
		},
	});

	// Don't edit any of the code below this line
	process.exit(0);
}

seed().catch(async (error) => {
	console.error(error);
	await prisma.$disconnect();
	process.exit(1);
});
