import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.IncomeCreateArgs>({
  income: {
    one: {
      data: {
        name: 'String',
        amount: 8225522,
        date: '2022-01-22T19:51:23Z',
        currency: 'String',
        updatedAt: '2022-01-22T19:51:23Z',
      },
    },
    two: {
      data: {
        name: 'String',
        amount: 1668792,
        date: '2022-01-22T19:51:23Z',
        currency: 'String',
        updatedAt: '2022-01-22T19:51:23Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
