import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const expenseCategories = () => {
  return db.expenseCategory.findMany()
}

export const expenseCategory = ({
  id,
}: Prisma.ExpenseCategoryWhereUniqueInput) => {
  return db.expenseCategory.findUnique({
    where: { id },
  })
}

export const ExpenseCategory = {
  expenses: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof expenseCategory>>
  ) => db.expenseCategory.findUnique({ where: { id: root.id } }).expenses(),
}
