import { chats, chat, createChat, updateChat, deleteChat } from './chats'
import type { StandardScenario } from './chats.scenarios'

describe('chats', () => {
  scenario('returns all chats', async (scenario: StandardScenario) => {
    const result = await chats()

    expect(result.length).toEqual(Object.keys(scenario.chat).length)
  })

  scenario('returns a single chat', async (scenario: StandardScenario) => {
    const result = await chat({ id: scenario.chat.one.id })

    expect(result).toEqual(scenario.chat.one)
  })

  scenario('creates a chat', async (scenario: StandardScenario) => {
    const result = await createChat({
      input: {
        userId: scenario.chat.two.userId,
        updatedAt: '2022-01-22T19:53:42Z',
      },
    })

    expect(result.userId).toEqual(scenario.chat.two.userId)
    expect(result.updatedAt).toEqual('2022-01-22T19:53:42Z')
  })

  scenario('updates a chat', async (scenario: StandardScenario) => {
    const original = await chat({ id: scenario.chat.one.id })
    const result = await updateChat({
      id: original.id,
      input: { updatedAt: '2022-01-23T19:53:42Z' },
    })

    expect(result.updatedAt).toEqual('2022-01-23T19:53:42Z')
  })

  scenario('deletes a chat', async (scenario: StandardScenario) => {
    const original = await deleteChat({ id: scenario.chat.one.id })
    const result = await chat({ id: original.id })

    expect(result).toEqual(null)
  })
})
