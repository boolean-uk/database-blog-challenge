const prisma = require('./db.js')

async function main() {
  const getUsers = await prisma.user.findMany();
//   console.log('all users', getUsers);

  const getProfiles = await prisma.profile.findMany();
//   console.log('all profiles', getProfiles);

const getPosts = await prisma.post.findMany();
  console.log('all posts', getPosts);
}

main()