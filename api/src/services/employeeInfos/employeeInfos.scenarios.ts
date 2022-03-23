import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.EmployeeInfoCreateArgs>({
  employeeInfo: {
    one: {
      data: {
        position: 'String',
        updatedAt: '2022-03-23T23:00:01Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String1763027',
            updatedAt: '2022-03-23T23:00:01Z',
          },
        },
      },
    },
    two: {
      data: {
        position: 'String',
        updatedAt: '2022-03-23T23:00:01Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String1872918',
            updatedAt: '2022-03-23T23:00:01Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
