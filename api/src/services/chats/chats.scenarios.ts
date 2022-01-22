import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ChatCreateArgs>({
  chat: {
    one: {
      data: {
        updatedAt: '2022-01-22T19:53:42Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String2926050',
            otherEmails: 'String',
            updatedAt: '2022-01-22T19:53:42Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2022-01-22T19:53:42Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String704770',
            otherEmails: 'String',
            updatedAt: '2022-01-22T19:53:42Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
