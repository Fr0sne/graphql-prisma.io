import { prisma } from "../database/prisma"
import { hashpass } from "../modules/hashpass";

export const resolvers = [{
  Query: {
    getAllUsers: async () => {
      const users = await prisma.users.findMany();
      users.forEach(user => {
        user.password = "***"
        return user
      })
      return users
    },
    getUser: async (_: unknown, { id }: User) => {
      const user = await prisma.users.findUnique({
        where: {
          id
        }
      })
      if(user) {
        user.password = "***"
      }
      return user
    }
  },
  Mutation: {
    createUser: async (_: unknown, {user : {name, email, password}} : {user: User}) => {
      password = await hashpass(password)
      const newUser = await prisma.users.create({
        data: {
          name,
          password,
          email
        }
      })
      newUser.password = '***'
      return newUser;
    },
    updateUser: async (_: unknown, {user: {id, name, email, password}}: {user : User}) => {
      const updated = await prisma.users.update({
        where: {
          id,
        },
        data: {
          name,
          email,
          password
        }
      })
      updated.password = "***"
      return updated;
    }
  }
}]