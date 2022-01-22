import {
  employeePays,
  employeePay,
  createEmployeePay,
  updateEmployeePay,
  deleteEmployeePay,
} from './employeePays'
import type { StandardScenario } from './employeePays.scenarios'

describe('employeePays', () => {
  scenario('returns all employeePays', async (scenario: StandardScenario) => {
    const result = await employeePays()

    expect(result.length).toEqual(Object.keys(scenario.employeePay).length)
  })

  scenario(
    'returns a single employeePay',
    async (scenario: StandardScenario) => {
      const result = await employeePay({ id: scenario.employeePay.one.id })

      expect(result).toEqual(scenario.employeePay.one)
    }
  )

  scenario('creates a employeePay', async (scenario: StandardScenario) => {
    const result = await createEmployeePay({
      input: {
        amount: 1016462,
        userId: scenario.employeePay.two.userId,
        updatedAt: '2022-01-22T19:52:18Z',
      },
    })

    expect(result.amount).toEqual(1016462)
    expect(result.userId).toEqual(scenario.employeePay.two.userId)
    expect(result.updatedAt).toEqual('2022-01-22T19:52:18Z')
  })

  scenario('updates a employeePay', async (scenario: StandardScenario) => {
    const original = await employeePay({ id: scenario.employeePay.one.id })
    const result = await updateEmployeePay({
      id: original.id,
      input: { amount: 3377344 },
    })

    expect(result.amount).toEqual(3377344)
  })

  scenario('deletes a employeePay', async (scenario: StandardScenario) => {
    const original = await deleteEmployeePay({
      id: scenario.employeePay.one.id,
    })
    const result = await employeePay({ id: original.id })

    expect(result).toEqual(null)
  })
})
