import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ApplicationCreateArgs>({
  application: {
    one: {
      data: {
        updatedAt: '2022-01-15T20:51:50Z',
        job: {
          create: {
            title: 'String',
            description: 'String',
            updatedAt: '2022-01-15T20:51:50Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String1235318',
                otherEmails: 'String',
                updatedAt: '2022-01-15T20:51:50Z',
              },
            },
          },
        },
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String6518482',
            otherEmails: 'String',
            updatedAt: '2022-01-15T20:51:50Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2022-01-15T20:51:50Z',
        job: {
          create: {
            title: 'String',
            description: 'String',
            updatedAt: '2022-01-15T20:51:50Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String3836722',
                otherEmails: 'String',
                updatedAt: '2022-01-15T20:51:50Z',
              },
            },
          },
        },
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String7172047',
            otherEmails: 'String',
            updatedAt: '2022-01-15T20:51:50Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
