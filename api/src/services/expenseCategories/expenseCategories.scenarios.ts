import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ExpenseCategoryCreateArgs>({
  expenseCategory: {
    one: { data: { name: 'String', updatedAt: '2022-01-22T19:52:06Z' } },
    two: { data: { name: 'String', updatedAt: '2022-01-22T19:52:06Z' } },
  },
})

export type StandardScenario = typeof standard
