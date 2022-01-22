import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ProjectCreateArgs>({
  project: {
    one: {
      data: {
        title: 'String',
        updatedAt: '2022-01-15T20:52:58Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String534098',
            otherEmails: 'String',
            userTypes: 'employee',
            updatedAt: '2022-01-15T20:52:58Z',
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        updatedAt: '2022-01-15T20:52:58Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String6142341',
            otherEmails: 'String',
            userTypes: 'employee',
            updatedAt: '2022-01-15T20:52:58Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
