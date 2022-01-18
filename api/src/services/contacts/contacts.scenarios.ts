import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ContactCreateArgs>({
  contact: {
    one: {
      data: {
        updatedAt: '2022-01-15T20:52:06Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String5806813',
            otherEmails: 'String',
            userTypes: 'employee',
            updatedAt: '2022-01-15T20:52:06Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2022-01-15T20:52:06Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String9575679',
            otherEmails: 'String',
            userTypes: 'employee',
            updatedAt: '2022-01-15T20:52:06Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
