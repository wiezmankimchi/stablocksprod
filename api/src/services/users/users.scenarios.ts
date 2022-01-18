import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        firstName: 'String',
        lastName: 'String',
        email: 'String1734918',
        otherEmails: 'String',
        userTypes: 'employee',
        updatedAt: '2022-01-15T23:17:43Z',
      },
    },
    two: {
      data: {
        firstName: 'String',
        lastName: 'String',
        email: 'String9668523',
        otherEmails: 'String',
        userTypes: 'employee',
        updatedAt: '2022-01-15T23:17:43Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
