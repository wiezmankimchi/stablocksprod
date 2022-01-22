import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TicketCreateArgs>({
  ticket: {
    one: {
      data: {
        title: 'String',
        updatedAt: '2022-01-22T19:53:24Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String7679033',
            otherEmails: 'String',
            updatedAt: '2022-01-22T19:53:24Z',
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        updatedAt: '2022-01-22T19:53:24Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String2673774',
            otherEmails: 'String',
            updatedAt: '2022-01-22T19:53:24Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
