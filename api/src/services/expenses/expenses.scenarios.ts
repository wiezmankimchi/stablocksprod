import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ExpenseCreateArgs>({
  expense: {
    one: {
      data: {
        name: 'String',
        amount: 6059740,
        date: '2022-01-22T19:51:53Z',
        updatedAt: '2022-01-22T19:51:53Z',
      },
    },
    two: {
      data: {
        name: 'String',
        amount: 9243670,
        date: '2022-01-22T19:51:53Z',
        updatedAt: '2022-01-22T19:51:53Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
