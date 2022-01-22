import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.JobCreateArgs>({
  job: {
    one: {
      data: {
        title: 'String',
        description: 'String',
        updatedAt: '2022-01-22T19:52:27Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String288586',
            otherEmails: 'String',
            updatedAt: '2022-01-22T19:52:27Z',
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        description: 'String',
        updatedAt: '2022-01-22T19:52:27Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String6628944',
            otherEmails: 'String',
            updatedAt: '2022-01-22T19:52:27Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
