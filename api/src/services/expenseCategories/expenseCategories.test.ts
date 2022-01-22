import { expenseCategories } from './expenseCategories'
import type { StandardScenario } from './expenseCategories.scenarios'

describe('expenseCategories', () => {
  scenario(
    'returns all expenseCategories',
    async (scenario: StandardScenario) => {
      const result = await expenseCategories()

      expect(result.length).toEqual(
        Object.keys(scenario.expenseCategory).length
      )
    }
  )
})
