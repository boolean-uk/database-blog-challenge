const { PrismaClient } = require('@prisma/client')
const { user, profile, post, comment } = new PrismaClient()

module.exports = {
  user,
  profile,
  post,
  comment
}
