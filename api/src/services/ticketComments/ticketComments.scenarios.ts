import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TicketCommentCreateArgs>({
  ticketComment: {
    one: {
      data: {
        message: 'String',
        updatedAt: '2022-01-22T19:53:32Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String5507818',
            otherEmails: 'String',
            updatedAt: '2022-01-22T19:53:32Z',
          },
        },
      },
    },
    two: {
      data: {
        message: 'String',
        updatedAt: '2022-01-22T19:53:32Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String1093511',
            otherEmails: 'String',
            updatedAt: '2022-01-22T19:53:32Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
