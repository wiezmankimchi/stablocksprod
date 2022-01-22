import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ChatMessageCreateArgs>({
  chatMessage: {
    one: {
      data: {
        message: 'String',
        updatedAt: '2022-01-22T19:53:51Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String9262241',
            otherEmails: 'String',
            updatedAt: '2022-01-22T19:53:51Z',
          },
        },
      },
    },
    two: {
      data: {
        message: 'String',
        updatedAt: '2022-01-22T19:53:51Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String7155413',
            otherEmails: 'String',
            updatedAt: '2022-01-22T19:53:51Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
