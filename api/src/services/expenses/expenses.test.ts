import { expenses } from './expenses'
import type { StandardScenario } from './expenses.scenarios'

describe('expenses', () => {
  scenario('returns all expenses', async (scenario: StandardScenario) => {
    const result = await expenses()

    expect(result.length).toEqual(Object.keys(scenario.expense).length)
  })
})
