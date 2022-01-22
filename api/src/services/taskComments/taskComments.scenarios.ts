import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TaskCommentCreateArgs>({
  taskComment: {
    one: {
      data: {
        message: 'String',
        updatedAt: '2022-01-22T19:54:18Z',
        task: {
          create: {
            title: 'String',
            updatedAt: '2022-01-22T19:54:18Z',
            project: {
              create: {
                title: 'String',
                updatedAt: '2022-01-22T19:54:18Z',
                user: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String6445565',
                    otherEmails: 'String',
                    updatedAt: '2022-01-22T19:54:18Z',
                  },
                },
              },
            },
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String5331905',
                otherEmails: 'String',
                updatedAt: '2022-01-22T19:54:18Z',
              },
            },
          },
        },
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String7271579',
            otherEmails: 'String',
            updatedAt: '2022-01-22T19:54:18Z',
          },
        },
      },
    },
    two: {
      data: {
        message: 'String',
        updatedAt: '2022-01-22T19:54:18Z',
        task: {
          create: {
            title: 'String',
            updatedAt: '2022-01-22T19:54:18Z',
            project: {
              create: {
                title: 'String',
                updatedAt: '2022-01-22T19:54:18Z',
                user: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String525682',
                    otherEmails: 'String',
                    updatedAt: '2022-01-22T19:54:18Z',
                  },
                },
              },
            },
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String2847634',
                otherEmails: 'String',
                updatedAt: '2022-01-22T19:54:18Z',
              },
            },
          },
        },
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String6996953',
            otherEmails: 'String',
            updatedAt: '2022-01-22T19:54:18Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
