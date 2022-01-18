import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TaskCommentCreateArgs>({
  taskComment: {
    one: {
      data: {
        message: 'String',
        updatedAt: '2022-01-15T20:53:16Z',
        task: {
          create: {
            title: 'String',
            updatedAt: '2022-01-15T20:53:16Z',
            project: {
              create: {
                title: 'String',
                updatedAt: '2022-01-15T20:53:17Z',
                user: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String1640304',
                    otherEmails: 'String',
                    userTypes: 'employee',
                    updatedAt: '2022-01-15T20:53:17Z',
                  },
                },
              },
            },
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String6264453',
                otherEmails: 'String',
                userTypes: 'employee',
                updatedAt: '2022-01-15T20:53:17Z',
              },
            },
          },
        },
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String5212380',
            otherEmails: 'String',
            userTypes: 'employee',
            updatedAt: '2022-01-15T20:53:17Z',
          },
        },
      },
    },
    two: {
      data: {
        message: 'String',
        updatedAt: '2022-01-15T20:53:17Z',
        task: {
          create: {
            title: 'String',
            updatedAt: '2022-01-15T20:53:17Z',
            project: {
              create: {
                title: 'String',
                updatedAt: '2022-01-15T20:53:17Z',
                user: {
                  create: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'String1557305',
                    otherEmails: 'String',
                    userTypes: 'employee',
                    updatedAt: '2022-01-15T20:53:17Z',
                  },
                },
              },
            },
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String6512787',
                otherEmails: 'String',
                userTypes: 'employee',
                updatedAt: '2022-01-15T20:53:17Z',
              },
            },
          },
        },
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String6689504',
            otherEmails: 'String',
            userTypes: 'employee',
            updatedAt: '2022-01-15T20:53:17Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
