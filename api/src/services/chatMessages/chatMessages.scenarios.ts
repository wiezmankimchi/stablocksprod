import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ChatMessageCreateArgs>({
  chatMessage: {
    one: {
      data: {
        message: 'String',
        updatedAt: '2022-01-23T14:28:26Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String2956809',
            otherEmails: 'String',
            updatedAt: '2022-01-23T14:28:26Z',
          },
        },
        chat: {
          create: {
            updatedAt: '2022-01-23T14:28:26Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String1189782',
                otherEmails: 'String',
                updatedAt: '2022-01-23T14:28:26Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        message: 'String',
        updatedAt: '2022-01-23T14:28:26Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String7046114',
            otherEmails: 'String',
            updatedAt: '2022-01-23T14:28:26Z',
          },
        },
        chat: {
          create: {
            updatedAt: '2022-01-23T14:28:26Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String4020061',
                otherEmails: 'String',
                updatedAt: '2022-01-23T14:28:26Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
