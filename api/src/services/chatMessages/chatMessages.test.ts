import { chatMessages } from './chatMessages'
import type { StandardScenario } from './chatMessages.scenarios'

describe('chatMessages', () => {
  scenario('returns all chatMessages', async (scenario: StandardScenario) => {
    const result = await chatMessages()

    expect(result.length).toEqual(Object.keys(scenario.chatMessage).length)
  })
})
