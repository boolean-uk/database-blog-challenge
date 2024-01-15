const { user, profile, post, comment } = require('./db')

const getAllUsers = async () => {
  const data = await user.findMany()
  console.log(data)
  return data
}

const getPostsByUserId = async (userId) => {
  const data = await post.findMany({ where: { profileId: userId } })
  console.log(data)
  return data
}

getAllUsers()
getPostsByUserId(2)
