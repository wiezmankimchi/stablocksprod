import {
  invoiceItems,
  invoiceItem,
  createInvoiceItem,
  updateInvoiceItem,
  deleteInvoiceItem,
} from './invoiceItems'
import type { StandardScenario } from './invoiceItems.scenarios'

describe('invoiceItems', () => {
  scenario('returns all invoiceItems', async (scenario: StandardScenario) => {
    const result = await invoiceItems()

    expect(result.length).toEqual(Object.keys(scenario.invoiceItem).length)
  })

  scenario(
    'returns a single invoiceItem',
    async (scenario: StandardScenario) => {
      const result = await invoiceItem({ id: scenario.invoiceItem.one.id })

      expect(result).toEqual(scenario.invoiceItem.one)
    }
  )

  scenario('creates a invoiceItem', async (scenario: StandardScenario) => {
    const result = await createInvoiceItem({
      input: {
        name: 'String',
        units: 2640956,
        rate: 8320628,
        invoiceId: scenario.invoiceItem.two.invoiceId,
        updatedAt: '2022-01-22T19:51:37Z',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.units).toEqual(2640956)
    expect(result.rate).toEqual(8320628)
    expect(result.invoiceId).toEqual(scenario.invoiceItem.two.invoiceId)
    expect(result.updatedAt).toEqual('2022-01-22T19:51:37Z')
  })

  scenario('updates a invoiceItem', async (scenario: StandardScenario) => {
    const original = await invoiceItem({ id: scenario.invoiceItem.one.id })
    const result = await updateInvoiceItem({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a invoiceItem', async (scenario: StandardScenario) => {
    const original = await deleteInvoiceItem({
      id: scenario.invoiceItem.one.id,
    })
    const result = await invoiceItem({ id: original.id })

    expect(result).toEqual(null)
  })
})
