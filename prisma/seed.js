const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdUsers = await prisma.user.createMany({
    data: [{ email: "alice.martin@gmail.com", username: "alicem.01" }, { email: "elodie.roy@hotmail.co.uk", username: "elRoy33" }, { email: "luke.sky@hotmail.co.uk", username: "SkyWalk" }],
  });

  console.log(`${createdUsers.count} users created`, createdUsers);

  const createdProfiles = await prisma.profile.createMany({
    data: [{ 
        userId: 2,
        firstName: "Elodie",
        lastName:"Roy",
        biography:"some relatively random ramblings and some more",
        profilePicUrl: 'http://sth.com/sthsthsth/sthsthsht/0345'
    }, { 
        userId: 1,
        firstName: "Alice",
        lastName:"Martin",
        biography:"some relatively random and slightly different ramblings and some more",
        profilePicUrl: 'http://sth.com/sthsthsth/sthsthsht/235'
    },  { 
        userId: 3,
        firstName: "Luke",
        lastName:"Sky",
        biography:".",
        profilePicUrl: 'http://sth.com/sthsthsth/sthsthsht/25356'
    }],
  });
  
  console.log('number of newly created profiles: ', createdProfiles)
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
