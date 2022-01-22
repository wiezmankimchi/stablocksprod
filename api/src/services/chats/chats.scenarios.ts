import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ChatCreateArgs>({
  chat: {
    one: {
      data: {
        updatedAt: '2022-01-22T19:47:33Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String9162432',
            otherEmails: 'String',
            updatedAt: '2022-01-22T19:47:33Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2022-01-22T19:47:33Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String2746119',
            otherEmails: 'String',
            updatedAt: '2022-01-22T19:47:33Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
