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

interface CreateInvoiceItemArgs {
  input: Prisma.InvoiceItemCreateInput
}

export const createInvoiceItem = ({ input }: CreateInvoiceItemArgs) => {
  return db.invoiceItem.create({
    data: input,
  })
}

interface UpdateInvoiceItemArgs extends Prisma.InvoiceItemWhereUniqueInput {
  input: Prisma.InvoiceItemUpdateInput
}

export const updateInvoiceItem = ({ id, input }: UpdateInvoiceItemArgs) => {
  return db.invoiceItem.update({
    data: input,
    where: { id },
  })
}

export const deleteInvoiceItem = ({
  id,
}: Prisma.InvoiceItemWhereUniqueInput) => {
  return db.invoiceItem.delete({
    where: { id },
  })
}

export const InvoiceItem = {
  invoice: (_obj, { root }: ResolverArgs<ReturnType<typeof invoiceItem>>) =>
    db.invoiceItem.findUnique({ where: { id: root.id } }).invoice(),
}
