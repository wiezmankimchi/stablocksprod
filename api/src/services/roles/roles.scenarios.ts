import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.RoleCreateArgs>({
  role: {
    one: {
      data: {
        updatedAt: '2022-01-22T19:54:26Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String9601383',
            otherEmails: 'String',
            updatedAt: '2022-01-22T19:54:26Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2022-01-22T19:54:26Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String654709',
            otherEmails: 'String',
            updatedAt: '2022-01-22T19:54:26Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
