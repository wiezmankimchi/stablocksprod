import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ContactNoteCreateArgs>({
  contactNote: {
    one: {
      data: {
        message: 'String',
        updatedAt: '2022-01-15T20:52:14Z',
        contact: {
          create: {
            updatedAt: '2022-01-15T20:52:14Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String7269654',
                otherEmails: 'String',
                updatedAt: '2022-01-15T20:52:14Z',
              },
            },
          },
        },
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String6278271',
            otherEmails: 'String',
            updatedAt: '2022-01-15T20:52:14Z',
          },
        },
      },
    },
    two: {
      data: {
        message: 'String',
        updatedAt: '2022-01-15T20:52:14Z',
        contact: {
          create: {
            updatedAt: '2022-01-15T20:52:14Z',
            user: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String8228997',
                otherEmails: 'String',
                updatedAt: '2022-01-15T20:52:14Z',
              },
            },
          },
        },
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String1064166',
            otherEmails: 'String',
            updatedAt: '2022-01-15T20:52:14Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
