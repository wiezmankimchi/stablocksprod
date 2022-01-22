import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        firstName: 'String',
        lastName: 'String',
        email: 'String7720076',
        otherEmails: 'String',
        updatedAt: '2022-01-22T19:51:02Z',
      },
    },
    two: {
      data: {
        firstName: 'String',
        lastName: 'String',
        email: 'String9790432',
        otherEmails: 'String',
        updatedAt: '2022-01-22T19:51:02Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
