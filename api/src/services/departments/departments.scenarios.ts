import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.DepartmentCreateArgs>({
  department: {
    one: { data: { name: 'String', updatedAt: '2022-01-15T20:51:26Z' } },
    two: { data: { name: 'String', updatedAt: '2022-01-15T20:51:26Z' } },
  },
})

export type StandardScenario = typeof standard
