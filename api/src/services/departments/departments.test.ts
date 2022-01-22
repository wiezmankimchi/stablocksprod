import {
  departments,
  department,
  createDepartment,
  updateDepartment,
  deleteDepartment,
} from './departments'
import type { StandardScenario } from './departments.scenarios'

describe('departments', () => {
  scenario('returns all departments', async (scenario: StandardScenario) => {
    const result = await departments()

    expect(result.length).toEqual(Object.keys(scenario.department).length)
  })

  scenario(
    'returns a single department',
    async (scenario: StandardScenario) => {
      const result = await department({ id: scenario.department.one.id })

      expect(result).toEqual(scenario.department.one)
    }
  )

  scenario('creates a department', async () => {
    const result = await createDepartment({
      input: { name: 'String', updatedAt: '2022-01-15T20:51:26Z' },
    })

    expect(result.name).toEqual('String')
    expect(result.updatedAt.toString()).toEqual('2022-01-15T20:51:26.000Z')
  })

  scenario('updates a department', async (scenario: StandardScenario) => {
    const original = await department({ id: scenario.department.one.id })
    const result = await updateDepartment({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a department', async (scenario: StandardScenario) => {
    const original = await deleteDepartment({ id: scenario.department.one.id })
    const result = await department({ id: original.id })

    expect(result).toEqual(null)
  })
})
