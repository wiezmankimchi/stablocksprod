import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const organizations = () => {
  return db.organization.findMany()
}

export const organization = () => {
  return db.organization.findFirst()
}

interface CreateOrganizationArgs {
  input: Prisma.OrganizationCreateInput
}

export const createOrganization = async ({ input }: CreateOrganizationArgs) => {
  const organization = await db.organization.findFirst()

  if (organization) return

  return db.organization.create({
    data: input,
  })
}

interface UpdateOrganizationArgs extends Prisma.OrganizationWhereUniqueInput {
  input: Prisma.OrganizationUpdateInput
}

export const updateOrganization = ({ input }: UpdateOrganizationArgs) => {
  return db.organization.update({
    data: input,
    where: { id: 1 },
  })
}

// export const deleteOrganization = ({
//   id,
// }: Prisma.OrganizationWhereUniqueInput) => {
//   return db.organization.delete({
//     where: { id },
//   })
// }
