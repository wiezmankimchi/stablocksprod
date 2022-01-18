import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.JobCreateArgs>({
  job: {
    one: {
      data: {
        title: 'String',
        description: 'String',
        updatedAt: '2022-01-15T20:51:41Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String8139279',
            otherEmails: 'String',
            userTypes: 'employee',
            updatedAt: '2022-01-15T20:51:41Z',
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        description: 'String',
        updatedAt: '2022-01-15T20:51:41Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String9149423',
            otherEmails: 'String',
            userTypes: 'employee',
            updatedAt: '2022-01-15T20:51:41Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
