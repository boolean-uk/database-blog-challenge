const { user, profile, post, comment } = require('./db')

const getAllUsers = async () => {
  const data = await user.findMany()
  console.log(data)
  return data
}

const getPostsByUserId = async (profileId) => {
  const data = await post.findMany({ where: { profileId: profileId } })
  console.log(data)
  return data
}

const getProfileById = async (profileId) => {
  const data = await profile.findUnique({
    where: { id: profileId },
    include: { user: true }
  })
  console.log(data)
  return data
}

// getAllUsers()
// getPostsByUserId(2)
getProfileById(2)
