import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TicketCommentCreateArgs>({
  ticketComment: {
    one: {
      data: {
        message: 'String',
        updatedAt: '2022-01-15T20:52:37Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String7448973',
            otherEmails: 'String',
            userTypes: 'employee',
            updatedAt: '2022-01-15T20:52:37Z',
          },
        },
      },
    },
    two: {
      data: {
        message: 'String',
        updatedAt: '2022-01-15T20:52:37Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String8867165',
            otherEmails: 'String',
            userTypes: 'employee',
            updatedAt: '2022-01-15T20:52:37Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
