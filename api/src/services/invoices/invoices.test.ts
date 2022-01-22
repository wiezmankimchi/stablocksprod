import { invoices } from './invoices'
import type { StandardScenario } from './invoices.scenarios'

describe('invoices', () => {
  scenario('returns all invoices', async (scenario: StandardScenario) => {
    const result = await invoices()

    expect(result.length).toEqual(Object.keys(scenario.invoice).length)
  })
})
