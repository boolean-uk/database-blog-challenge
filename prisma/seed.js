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

	const createdPost1 = await prisma.post.create({
		data: {
			title: "Me when I'm waiting for LoVM S2",
			body: "",
			isPublished: false,
			MediaAttached: true,
			user: {
				connect: {
					id: createdUser1.id,
				},
			},
		},
	});

	const createdPost2 = await prisma.post.create({
		data: {
			title: "#OpenDnD",
			body: "Join me in standing our ground against wotc to keep our creativity",
			isPublished: true,
			MediaAttached: true,
			user: {
				connect: {
					id: createdUser2.id,
				},
			},
		},
	});

	const createdComment1 = await prisma.comment.create({
		data: {
			content:
				"I can't wait! So glad CR made an announcement about OGL before the new season - I was worried about it - but it's clear they're under NDA.",
			user: {
				connect: {
					id: createdUser2.id,
				},
			},
			post: {
				connect: {
					id: createdPost1.id,
				},
			},
		},
	});
	const createdComment2 = await prisma.comment.create({
		data: {
			content:
				"Yeah definitely removes any possible guilt in watching it. Are you looking forward to Vax's scene with everyone's favourite masked matron? :eyes:",
			user: {
				connect: {
					id: createdUser1.id,
				},
			},
			post: {
				connect: {
					id: createdPost1.id,
				},
			},
		},
	});

	const createdComment3 = await prisma.comment.create({
		data: {
			content:
				"Of course! There's some really great scenes I'm hoping have been animated, and I'm of course going to be playing spot the Mercer!",
			user: {
				connect: {
					id: createdUser2.id,
				},
			},
			post: {
				connect: {
					id: createdPost1.id,
				},
			},
		},
	});

	const createdComment4 = await prisma.comment.create({
		data: {
			content: "What's happening for our session on Friday?",
			user: {
				connect: {
					id: createdUser1.id,
				},
			},
			post: {
				connect: {
					id: createdPost2.id,
				},
			},
		},
	});

	const createdComment5 = await prisma.comment.create({
		data: {
			content:
				"Don't worry, I'm working on converting everything over to Pathfinder now, we'll make it work!",
			user: {
				connect: {
					id: createdUser2.id,
				},
			},
			post: {
				connect: {
					id: createdPost2.id,
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
