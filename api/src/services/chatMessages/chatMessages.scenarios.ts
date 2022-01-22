import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ChatMessageCreateArgs>({
  chatMessage: {
    one: {
      data: {
        message: 'String',
        updatedAt: '2022-01-22T19:47:41Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String7807683',
            otherEmails: 'String',
            updatedAt: '2022-01-22T19:47:41Z',
          },
        },
      },
    },
    two: {
      data: {
        message: 'String',
        updatedAt: '2022-01-22T19:47:41Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String3553991',
            otherEmails: 'String',
            updatedAt: '2022-01-22T19:47:41Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
