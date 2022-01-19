import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const roles = () => {
  return db.role.findMany()
}

export const role = ({ id }: Prisma.RoleWhereUniqueInput) => {
  return db.role.findUnique({
    where: { id },
  })
}

interface CreateRoleArgs {
  input: Prisma.RoleCreateInput
}

export const createRole = ({ input }: CreateRoleArgs) => {
  return db.role.create({
    data: input,
  })
}

interface UpdateRoleArgs extends Prisma.RoleWhereUniqueInput {
  input: Prisma.RoleUpdateInput
}

export const updateRole = ({ id, input }: UpdateRoleArgs) => {
  return db.role.update({
    data: input,
    where: { id },
  })
}

export const deleteRole = ({ id }: Prisma.RoleWhereUniqueInput) => {
  return db.role.delete({
    where: { id },
  })
}

export const Role = {
  user: (_obj, { root }: ResolverArgs<ReturnType<typeof role>>) =>
    db.role.findUnique({ where: { id: root.id } }).user(),
}
