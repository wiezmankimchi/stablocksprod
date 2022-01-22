import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const incomes = () => {
  return db.income.findMany()
}

export const income = ({ id }: Prisma.IncomeWhereUniqueInput) => {
  return db.income.findUnique({
    where: { id },
  })
}

export const Income = {
  invoice: (_obj, { root }: ResolverArgs<ReturnType<typeof income>>) =>
    db.income.findUnique({ where: { id: root.id } }).invoice(),
}
