import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const employeePays = () => {
  return db.employeePay.findMany()
}

export const employeePay = ({ id }: Prisma.EmployeePayWhereUniqueInput) => {
  return db.employeePay.findUnique({
    where: { id },
  })
}

export const EmployeePay = {
  user: (_obj, { root }: ResolverArgs<ReturnType<typeof employeePay>>) =>
    db.employeePay.findUnique({ where: { id: root.id } }).user(),
}
