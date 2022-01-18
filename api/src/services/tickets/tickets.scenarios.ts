import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TicketCreateArgs>({
  ticket: {
    one: {
      data: {
        title: 'String',
        updatedAt: '2022-01-15T20:52:31Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String7637652',
            otherEmails: 'String',
            userTypes: 'employee',
            updatedAt: '2022-01-15T20:52:31Z',
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        updatedAt: '2022-01-15T20:52:31Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String9057964',
            otherEmails: 'String',
            userTypes: 'employee',
            updatedAt: '2022-01-15T20:52:31Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
