const { user, profile, post, comment } = require('./db')

const getAllUsers = async () => {
  const data = await user.findMany()
  console.log(data)
  return data
}

getAllUsers()
