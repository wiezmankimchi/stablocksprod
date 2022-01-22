import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TaskCreateArgs>({
  task: {
    one: {
      data: {
        title: 'String',
        updatedAt: '2022-01-22T19:54:08Z',
        project: {
          create: {
            title: 'String',
            updatedAt: '2022-01-22T19:54:08Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String4999662',
                otherEmails: 'String',
                updatedAt: '2022-01-22T19:54:08Z',
              },
            },
          },
        },
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String3742079',
            otherEmails: 'String',
            updatedAt: '2022-01-22T19:54:08Z',
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        updatedAt: '2022-01-22T19:54:08Z',
        project: {
          create: {
            title: 'String',
            updatedAt: '2022-01-22T19:54:08Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String6925994',
                otherEmails: 'String',
                updatedAt: '2022-01-22T19:54:08Z',
              },
            },
          },
        },
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String8747139',
            otherEmails: 'String',
            updatedAt: '2022-01-22T19:54:08Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
