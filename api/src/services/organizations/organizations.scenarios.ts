import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.OrganizationCreateArgs>({
  organization: {
    one: { data: { name: 'String', updatedAt: '2022-01-15T21:59:46Z' } },
    two: { data: { name: 'String', updatedAt: '2022-01-15T21:59:46Z' } },
  },
})

export type StandardScenario = typeof standard
