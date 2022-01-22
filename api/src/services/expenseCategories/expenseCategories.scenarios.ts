import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ExpenseCategoryCreateArgs>({
  expenseCategory: {
    one: { data: { name: 'String', updatedAt: '2022-01-22T19:45:52Z' } },
    two: { data: { name: 'String', updatedAt: '2022-01-22T19:45:52Z' } },
  },
})

export type StandardScenario = typeof standard
