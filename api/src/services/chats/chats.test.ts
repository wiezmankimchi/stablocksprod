import { chats } from './chats'
import type { StandardScenario } from './chats.scenarios'

describe('chats', () => {
  scenario('returns all chats', async (scenario: StandardScenario) => {
    const result = await chats()

    expect(result.length).toEqual(Object.keys(scenario.chat).length)
  })
})
