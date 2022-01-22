import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ExpenseCreateArgs>({
  expense: {
    one: {
      data: {
        name: 'String',
        amount: 9802390,
        date: '2022-01-22T19:45:44Z',
        updatedAt: '2022-01-22T19:45:44Z',
      },
    },
    two: {
      data: {
        name: 'String',
        amount: 5821598,
        date: '2022-01-22T19:45:44Z',
        updatedAt: '2022-01-22T19:45:44Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
