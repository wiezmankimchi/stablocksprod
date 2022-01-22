import { employeePays } from './employeePays'
import type { StandardScenario } from './employeePays.scenarios'

describe('employeePays', () => {
  scenario('returns all employeePays', async (scenario: StandardScenario) => {
    const result = await employeePays()

    expect(result.length).toEqual(Object.keys(scenario.employeePay).length)
  })
})
