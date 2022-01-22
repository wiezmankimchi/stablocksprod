import { incomes } from './incomes'
import type { StandardScenario } from './incomes.scenarios'

describe('incomes', () => {
  scenario('returns all incomes', async (scenario: StandardScenario) => {
    const result = await incomes()

    expect(result.length).toEqual(Object.keys(scenario.income).length)
  })
})
