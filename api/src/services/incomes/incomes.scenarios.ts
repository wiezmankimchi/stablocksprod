import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.IncomeCreateArgs>({
  income: {
    one: {
      data: {
        name: 'String',
        amount: 7840473,
        date: '2022-01-22T19:45:18Z',
        currency: 'String',
        updatedAt: '2022-01-22T19:45:18Z',
      },
    },
    two: {
      data: {
        name: 'String',
        amount: 6673048,
        date: '2022-01-22T19:45:18Z',
        currency: 'String',
        updatedAt: '2022-01-22T19:45:18Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
