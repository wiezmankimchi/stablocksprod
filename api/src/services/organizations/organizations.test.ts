import {
  organizations,
  organization,
  createOrganization,
  updateOrganization,
  deleteOrganization,
} from './organizations'
import type { StandardScenario } from './organizations.scenarios'

describe('organizations', () => {
  scenario('returns all organizations', async (scenario: StandardScenario) => {
    const result = await organizations()

    expect(result.length).toEqual(Object.keys(scenario.organization).length)
  })

  scenario(
    'returns a single organization',
    async (scenario: StandardScenario) => {
      const result = await organization({ id: scenario.organization.one.id })

      expect(result).toEqual(scenario.organization.one)
    }
  )

  scenario('creates a organization', async () => {
    const result = await createOrganization({
      input: { name: 'String', updatedAt: '2022-01-15T21:59:46Z' },
    })

    expect(result.name).toEqual('String')
    expect(result.updatedAt).toEqual('2022-01-15T21:59:46Z')
  })

  scenario('updates a organization', async (scenario: StandardScenario) => {
    const original = await organization({ id: scenario.organization.one.id })
    const result = await updateOrganization({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a organization', async (scenario: StandardScenario) => {
    const original = await deleteOrganization({
      id: scenario.organization.one.id,
    })
    const result = await organization({ id: original.id })

    expect(result).toEqual(null)
  })
})
