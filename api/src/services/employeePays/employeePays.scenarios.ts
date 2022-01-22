import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.EmployeePayCreateArgs>({
  employeePay: {
    one: {
      data: {
        amount: 6529725,
        updatedAt: '2022-01-22T19:52:18Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String2642112',
            otherEmails: 'String',
            updatedAt: '2022-01-22T19:52:18Z',
          },
        },
      },
    },
    two: {
      data: {
        amount: 9176046,
        updatedAt: '2022-01-22T19:52:18Z',
        user: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String8959373',
            otherEmails: 'String',
            updatedAt: '2022-01-22T19:52:18Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
