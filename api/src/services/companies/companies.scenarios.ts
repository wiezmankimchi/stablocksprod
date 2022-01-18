import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CompanyCreateArgs>({
  company: {
    one: {
      data: {
        name: 'String',
        updatedAt: '2022-01-15T20:52:23Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String940565',
            otherEmails: 'String',
            userTypes: 'employee',
            updatedAt: '2022-01-15T20:52:23Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        updatedAt: '2022-01-15T20:52:23Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String1555056',
            otherEmails: 'String',
            userTypes: 'employee',
            updatedAt: '2022-01-15T20:52:23Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
