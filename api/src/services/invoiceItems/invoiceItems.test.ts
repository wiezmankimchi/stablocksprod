import { invoiceItems } from './invoiceItems'
import type { StandardScenario } from './invoiceItems.scenarios'

describe('invoiceItems', () => {
  scenario('returns all invoiceItems', async (scenario: StandardScenario) => {
    const result = await invoiceItems()

    expect(result.length).toEqual(Object.keys(scenario.invoiceItem).length)
  })
})
