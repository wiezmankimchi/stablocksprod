import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.EmployeePayCreateArgs>({
  employeePay: {
    one: {
      data: {
        amount: 4498098,
        updatedAt: '2022-01-22T19:46:05Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String1023483',
            otherEmails: 'String',
            updatedAt: '2022-01-22T19:46:05Z',
          },
        },
      },
    },
    two: {
      data: {
        amount: 3306090,
        updatedAt: '2022-01-22T19:46:05Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String698339',
            otherEmails: 'String',
            updatedAt: '2022-01-22T19:46:05Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
