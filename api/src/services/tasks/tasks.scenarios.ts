import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TaskCreateArgs>({
  task: {
    one: {
      data: {
        title: 'String',
        updatedAt: '2022-01-15T20:53:10Z',
        project: {
          create: {
            title: 'String',
            updatedAt: '2022-01-15T20:53:10Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String2313779',
                otherEmails: 'String',
                userTypes: 'employee',
                updatedAt: '2022-01-15T20:53:10Z',
              },
            },
          },
        },
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String7747516',
            otherEmails: 'String',
            userTypes: 'employee',
            updatedAt: '2022-01-15T20:53:10Z',
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        updatedAt: '2022-01-15T20:53:10Z',
        project: {
          create: {
            title: 'String',
            updatedAt: '2022-01-15T20:53:10Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String5006005',
                otherEmails: 'String',
                userTypes: 'employee',
                updatedAt: '2022-01-15T20:53:10Z',
              },
            },
          },
        },
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String4255200',
            otherEmails: 'String',
            userTypes: 'employee',
            updatedAt: '2022-01-15T20:53:10Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
