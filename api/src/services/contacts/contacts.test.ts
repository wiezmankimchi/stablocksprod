import {
  contacts,
  contact,
  createContact,
  updateContact,
  deleteContact,
} from './contacts'
import type { StandardScenario } from './contacts.scenarios'

describe('contacts', () => {
  scenario('returns all contacts', async (scenario: StandardScenario) => {
    const result = await contacts()

    expect(result.length).toEqual(Object.keys(scenario.contact).length)
  })

  scenario('returns a single contact', async (scenario: StandardScenario) => {
    const result = await contact({ id: scenario.contact.one.id })

    expect(result).toEqual(scenario.contact.one)
  })

  scenario('creates a contact', async (scenario: StandardScenario) => {
    const result = await createContact({
      input: {
        userId: scenario.contact.two.userId,
        updatedAt: '2022-01-15T20:52:06Z',
      },
    })

    expect(result.userId).toEqual(scenario.contact.two.userId)
    expect(result.updatedAt).toEqual('2022-01-15T20:52:06.000Z')
  })

  scenario('updates a contact', async (scenario: StandardScenario) => {
    const original = await contact({ id: scenario.contact.one.id })
    const result = await updateContact({
      id: original.id,
      input: { updatedAt: '2022-01-16T20:52:06Z' },
    })

    expect(result.updatedAt.toString()).toEqual('2022-01-16T20:52:06.000Z')
  })

  scenario('deletes a contact', async (scenario: StandardScenario) => {
    const original = await deleteContact({ id: scenario.contact.one.id })
    const result = await contact({ id: original.id })

    expect(result).toEqual(null)
  })
})
