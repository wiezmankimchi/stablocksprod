import {
  invoices,
  invoice,
  createInvoice,
  updateInvoice,
  deleteInvoice,
} from './invoices'
import type { StandardScenario } from './invoices.scenarios'

describe('invoices', () => {
  scenario('returns all invoices', async (scenario: StandardScenario) => {
    const result = await invoices()

    expect(result.length).toEqual(Object.keys(scenario.invoice).length)
  })

  scenario('returns a single invoice', async (scenario: StandardScenario) => {
    const result = await invoice({ id: scenario.invoice.one.id })

    expect(result).toEqual(scenario.invoice.one)
  })

  scenario('creates a invoice', async (scenario: StandardScenario) => {
    const result = await createInvoice({
      input: {
        contactId: scenario.invoice.two.contactId,
        dueDate: '2022-01-22T19:51:31Z',
        updatedAt: '2022-01-22T19:51:31Z',
      },
    })

    expect(result.contactId).toEqual(scenario.invoice.two.contactId)
    expect(result.dueDate).toEqual('2022-01-22T19:51:31Z')
    expect(result.updatedAt).toEqual('2022-01-22T19:51:31Z')
  })

  scenario('updates a invoice', async (scenario: StandardScenario) => {
    const original = await invoice({ id: scenario.invoice.one.id })
    const result = await updateInvoice({
      id: original.id,
      input: { dueDate: '2022-01-23T19:51:31Z' },
    })

    expect(result.dueDate).toEqual('2022-01-23T19:51:31Z')
  })

  scenario('deletes a invoice', async (scenario: StandardScenario) => {
    const original = await deleteInvoice({ id: scenario.invoice.one.id })
    const result = await invoice({ id: original.id })

    expect(result).toEqual(null)
  })
})
