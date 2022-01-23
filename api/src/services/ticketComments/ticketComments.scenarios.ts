import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TicketCommentCreateArgs>({
  ticketComment: {
    one: {
      data: {
        message: 'String',
        updatedAt: '2022-01-23T14:28:09Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String4743370',
            otherEmails: 'String',
            updatedAt: '2022-01-23T14:28:09Z',
          },
        },
        Ticket: {
          create: {
            title: 'String',
            updatedAt: '2022-01-23T14:28:09Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String897046',
                otherEmails: 'String',
                updatedAt: '2022-01-23T14:28:09Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        message: 'String',
        updatedAt: '2022-01-23T14:28:09Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String7332085',
            otherEmails: 'String',
            updatedAt: '2022-01-23T14:28:09Z',
          },
        },
        Ticket: {
          create: {
            title: 'String',
            updatedAt: '2022-01-23T14:28:09Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String4149873',
                otherEmails: 'String',
                updatedAt: '2022-01-23T14:28:09Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
