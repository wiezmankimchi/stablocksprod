import {
  applications,
  application,
  createApplication,
  updateApplication,
  deleteApplication,
} from './applications'
import type { StandardScenario } from './applications.scenarios'

describe('applications', () => {
  scenario('returns all applications', async (scenario: StandardScenario) => {
    const result = await applications()

    expect(result.length).toEqual(Object.keys(scenario.application).length)
  })

  scenario(
    'returns a single application',
    async (scenario: StandardScenario) => {
      const result = await application({ id: scenario.application.one.id })

      expect(result).toEqual(scenario.application.one)
    }
  )

  scenario('creates a application', async (scenario: StandardScenario) => {
    const result = await createApplication({
      input: {
        jobId: scenario.application.two.jobId,
        userId: scenario.application.two.userId,
        updatedAt: '2022-01-15T20:51:50Z',
      },
    })

    expect(result.jobId).toEqual(scenario.application.two.jobId)
    expect(result.userId).toEqual(scenario.application.two.userId)
    expect(result.updatedAt.toString()).toEqual('2022-01-15T20:51:50.000Z')
  })

  scenario('updates a application', async (scenario: StandardScenario) => {
    const original = await application({ id: scenario.application.one.id })
    const result = await updateApplication({
      id: original.id,
      input: { updatedAt: '2022-01-16T20:51:50Z' },
    })

    expect(result.updatedAt).toEqual('2022-01-16T20:51:50Z')
  })

  scenario('deletes a application', async (scenario: StandardScenario) => {
    const original = await deleteApplication({
      id: scenario.application.one.id,
    })
    const result = await application({ id: original.id })

    expect(result).toEqual(null)
  })
})
