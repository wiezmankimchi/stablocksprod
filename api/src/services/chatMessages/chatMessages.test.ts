import {
  chatMessages,
  chatMessage,
  createChatMessage,
  updateChatMessage,
  deleteChatMessage,
} from './chatMessages'
import type { StandardScenario } from './chatMessages.scenarios'

describe('chatMessages', () => {
  scenario('returns all chatMessages', async (scenario: StandardScenario) => {
    const result = await chatMessages()

    expect(result.length).toEqual(Object.keys(scenario.chatMessage).length)
  })

  scenario(
    'returns a single chatMessage',
    async (scenario: StandardScenario) => {
      const result = await chatMessage({ id: scenario.chatMessage.one.id })

      expect(result).toEqual(scenario.chatMessage.one)
    }
  )

  scenario('creates a chatMessage', async (scenario: StandardScenario) => {
    const result = await createChatMessage({
      input: {
        userId: scenario.chatMessage.two.userId,
        chatId: scenario.chatMessage.two.chatId,
        message: 'String',
        updatedAt: '2022-01-23T14:28:26Z',
      },
    })

    expect(result.userId).toEqual(scenario.chatMessage.two.userId)
    expect(result.chatId).toEqual(scenario.chatMessage.two.chatId)
    expect(result.message).toEqual('String')
    expect(result.updatedAt).toEqual('2022-01-23T14:28:26Z')
  })

  scenario('updates a chatMessage', async (scenario: StandardScenario) => {
    const original = await chatMessage({ id: scenario.chatMessage.one.id })
    const result = await updateChatMessage({
      id: original.id,
      input: { message: 'String2' },
    })

    expect(result.message).toEqual('String2')
  })

  scenario('deletes a chatMessage', async (scenario: StandardScenario) => {
    const original = await deleteChatMessage({
      id: scenario.chatMessage.one.id,
    })
    const result = await chatMessage({ id: original.id })

    expect(result).toEqual(null)
  })
})
