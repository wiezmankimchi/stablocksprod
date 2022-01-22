import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const organizations = () => {
  return db.organization.findMany()
}

export const organization = ({ id }: Prisma.OrganizationWhereUniqueInput) => {
  return db.organization.findUnique({
    where: { id },
  })
}

interface CreateOrganizationArgs {
  input: Prisma.OrganizationCreateInput
}

export const createOrganization = ({ input }: CreateOrganizationArgs) => {
  return db.organization.create({
    data: input,
  })
}

interface UpdateOrganizationArgs extends Prisma.OrganizationWhereUniqueInput {
  input: Prisma.OrganizationUpdateInput
}

export const updateOrganization = ({ id, input }: UpdateOrganizationArgs) => {
  return db.organization.update({
    data: input,
    where: { id },
  })
}

export const deleteOrganization = ({
  id,
}: Prisma.OrganizationWhereUniqueInput) => {
  return db.organization.delete({
    where: { id },
  })
}
