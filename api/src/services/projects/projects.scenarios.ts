import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ProjectCreateArgs>({
  project: {
    one: {
      data: {
        title: 'String',
        updatedAt: '2022-01-22T19:54:00Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String1939833',
            otherEmails: 'String',
            updatedAt: '2022-01-22T19:54:00Z',
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        updatedAt: '2022-01-22T19:54:00Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String4122797',
            otherEmails: 'String',
            updatedAt: '2022-01-22T19:54:00Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
