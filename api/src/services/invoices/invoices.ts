import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const invoices = () => {
  return db.invoice.findMany()
}

export const invoice = ({ id }: Prisma.InvoiceWhereUniqueInput) => {
  return db.invoice.findUnique({
    where: { id },
  })
}

export const Invoice = {
  contact: (_obj, { root }: ResolverArgs<ReturnType<typeof invoice>>) =>
    db.invoice.findUnique({ where: { id: root.id } }).contact(),
  items: (_obj, { root }: ResolverArgs<ReturnType<typeof invoice>>) =>
    db.invoice.findUnique({ where: { id: root.id } }).items(),
  income: (_obj, { root }: ResolverArgs<ReturnType<typeof invoice>>) =>
    db.invoice.findUnique({ where: { id: root.id } }).income(),
}
