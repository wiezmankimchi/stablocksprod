import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const employeeInfos = () => {
  return db.employeeInfo.findMany()
}

export const employeeInfo = ({ id }: Prisma.EmployeeInfoWhereUniqueInput) => {
  return db.employeeInfo.findUnique({
    where: { id },
  })
}

interface CreateEmployeeInfoArgs {
  input: Prisma.EmployeeInfoCreateInput
}

export const createEmployeeInfo = ({ input }: CreateEmployeeInfoArgs) => {
  return db.employeeInfo.create({
    data: input,
  })
}

interface UpdateEmployeeInfoArgs extends Prisma.EmployeeInfoWhereUniqueInput {
  input: Prisma.EmployeeInfoUpdateInput
}

export const updateEmployeeInfo = ({ id, input }: UpdateEmployeeInfoArgs) => {
  return db.employeeInfo.update({
    data: input,
    where: { id },
  })
}

export const deleteEmployeeInfo = ({
  id,
}: Prisma.EmployeeInfoWhereUniqueInput) => {
  return db.employeeInfo.delete({
    where: { id },
  })
}

export const EmployeeInfo = {
  user: (_obj, { root }: ResolverArgs<ReturnType<typeof employeeInfo>>) =>
    db.employeeInfo.findUnique({ where: { id: root.id } }).user(),
  roles: (_obj, { root }: ResolverArgs<ReturnType<typeof employeeInfo>>) =>
    db.employeeInfo.findUnique({ where: { id: root.id } }).roles(),
  address: (_obj, { root }: ResolverArgs<ReturnType<typeof employeeInfo>>) =>
    db.employeeInfo.findUnique({ where: { id: root.id } }).address(),
  supervisor: (_obj, { root }: ResolverArgs<ReturnType<typeof employeeInfo>>) =>
    db.employeeInfo.findUnique({ where: { id: root.id } }).supervisor(),
  employees: (_obj, { root }: ResolverArgs<ReturnType<typeof employeeInfo>>) =>
    db.employeeInfo.findUnique({ where: { id: root.id } }).employees(),
  departments: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof employeeInfo>>
  ) => db.employeeInfo.findUnique({ where: { id: root.id } }).departments(),
  pay: (_obj, { root }: ResolverArgs<ReturnType<typeof employeeInfo>>) =>
    db.employeeInfo.findUnique({ where: { id: root.id } }).pay(),
  jobs: (_obj, { root }: ResolverArgs<ReturnType<typeof employeeInfo>>) =>
    db.employeeInfo.findUnique({ where: { id: root.id } }).jobs(),
  contacts: (_obj, { root }: ResolverArgs<ReturnType<typeof employeeInfo>>) =>
    db.employeeInfo.findUnique({ where: { id: root.id } }).contacts(),
  contactNotes: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof employeeInfo>>
  ) => db.employeeInfo.findUnique({ where: { id: root.id } }).contactNotes(),
  companies: (_obj, { root }: ResolverArgs<ReturnType<typeof employeeInfo>>) =>
    db.employeeInfo.findUnique({ where: { id: root.id } }).companies(),
  ticketsAssigned: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof employeeInfo>>
  ) => db.employeeInfo.findUnique({ where: { id: root.id } }).ticketsAssigned(),
  chatsAssigned: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof employeeInfo>>
  ) => db.employeeInfo.findUnique({ where: { id: root.id } }).chatsAssigned(),
  projects: (_obj, { root }: ResolverArgs<ReturnType<typeof employeeInfo>>) =>
    db.employeeInfo.findUnique({ where: { id: root.id } }).projects(),
  tasksCreated: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof employeeInfo>>
  ) => db.employeeInfo.findUnique({ where: { id: root.id } }).tasksCreated(),
  tasksAssigned: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof employeeInfo>>
  ) => db.employeeInfo.findUnique({ where: { id: root.id } }).tasksAssigned(),
  taskComments: (
    _obj,
    { root }: ResolverArgs<ReturnType<typeof employeeInfo>>
  ) => db.employeeInfo.findUnique({ where: { id: root.id } }).taskComments(),
}
