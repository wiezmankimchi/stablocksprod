import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.RoleCreateArgs>({
  role: {
    one: {
      data: {
        updatedAt: '2022-01-19T11:08:17Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String2884522',
            otherEmails: 'String',
            userTypes: 'admin',
            updatedAt: '2022-01-19T11:08:17Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2022-01-19T11:08:17Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String56669',
            otherEmails: 'String',
            userTypes: 'admin',
            updatedAt: '2022-01-19T11:08:17Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
