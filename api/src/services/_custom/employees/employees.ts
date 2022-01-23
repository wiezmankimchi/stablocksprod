import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'
import { users } from 'src/services/users'

export const employees = () => {
  return db.user.findMany({
    where: {
      roles: {
        OR: [
          {
            admin: true,
          },
          {
            employee: true,
          },
        ],
      },
    },
    orderBy: {
      lastName: 'asc',
    },
  })
}

interface CreateUserArgs {
  input: Prisma.UserCreateInput
}

export const createFirstUser = async ({ input }: CreateUserArgs) => {
  const getUsers = await users()

  if (getUsers.length > 0) return

  return db.user.create({
    data: input,
  })
}
