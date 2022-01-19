import { roles, role, createRole, updateRole, deleteRole } from './roles'
import type { StandardScenario } from './roles.scenarios'

describe('roles', () => {
  scenario('returns all roles', async (scenario: StandardScenario) => {
    const result = await roles()

    expect(result.length).toEqual(Object.keys(scenario.role).length)
  })

  scenario('returns a single role', async (scenario: StandardScenario) => {
    const result = await role({ id: scenario.role.one.id })

    expect(result).toEqual(scenario.role.one)
  })

  scenario('creates a role', async (scenario: StandardScenario) => {
    const result = await createRole({
      input: {
        userId: scenario.role.two.userId,
        updatedAt: '2022-01-19T11:08:17Z',
      },
    })

    expect(result.userId).toEqual(scenario.role.two.userId)
    expect(result.updatedAt).toEqual('2022-01-19T11:08:17Z')
  })

  scenario('updates a role', async (scenario: StandardScenario) => {
    const original = await role({ id: scenario.role.one.id })
    const result = await updateRole({
      id: original.id,
      input: { updatedAt: '2022-01-20T11:08:17Z' },
    })

    expect(result.updatedAt).toEqual('2022-01-20T11:08:17Z')
  })

  scenario('deletes a role', async (scenario: StandardScenario) => {
    const original = await deleteRole({ id: scenario.role.one.id })
    const result = await role({ id: original.id })

    expect(result).toEqual(null)
  })
})
