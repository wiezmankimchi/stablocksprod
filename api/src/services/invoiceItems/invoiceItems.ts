import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const invoiceItems = () => {
  return db.invoiceItem.findMany()
}

export const invoiceItem = ({ id }: Prisma.InvoiceItemWhereUniqueInput) => {
  return db.invoiceItem.findUnique({
    where: { id },
  })
}

export const InvoiceItem = {
  invoice: (_obj, { root }: ResolverArgs<ReturnType<typeof invoiceItem>>) =>
    db.invoiceItem.findUnique({ where: { id: root.id } }).invoice(),
}
