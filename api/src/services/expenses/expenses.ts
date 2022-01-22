import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const expenses = () => {
  return db.expense.findMany()
}

export const expense = ({ id }: Prisma.ExpenseWhereUniqueInput) => {
  return db.expense.findUnique({
    where: { id },
  })
}

export const Expense = {
  category: (_obj, { root }: ResolverArgs<ReturnType<typeof expense>>) =>
    db.expense.findUnique({ where: { id: root.id } }).category(),
}
