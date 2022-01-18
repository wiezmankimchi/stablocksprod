import {
  ticketComments,
  ticketComment,
  createTicketComment,
  updateTicketComment,
  deleteTicketComment,
} from './ticketComments'
import type { StandardScenario } from './ticketComments.scenarios'

describe('ticketComments', () => {
  scenario('returns all ticketComments', async (scenario: StandardScenario) => {
    const result = await ticketComments()

    expect(result.length).toEqual(Object.keys(scenario.ticketComment).length)
  })

  scenario(
    'returns a single ticketComment',
    async (scenario: StandardScenario) => {
      const result = await ticketComment({ id: scenario.ticketComment.one.id })

      expect(result).toEqual(scenario.ticketComment.one)
    }
  )

  scenario('creates a ticketComment', async (scenario: StandardScenario) => {
    const result = await createTicketComment({
      input: {
        message: 'String',
        userId: scenario.ticketComment.two.userId,
        updatedAt: '2022-01-15T20:52:37Z',
      },
    })

    expect(result.message).toEqual('String')
    expect(result.userId).toEqual(scenario.ticketComment.two.userId)
    expect(result.updatedAt.toString()).toEqual('2022-01-15T20:52:37.000Z')
  })

  scenario('updates a ticketComment', async (scenario: StandardScenario) => {
    const original = await ticketComment({ id: scenario.ticketComment.one.id })
    const result = await updateTicketComment({
      id: original.id,
      input: { message: 'String2' },
    })

    expect(result.message).toEqual('String2')
  })

  scenario('deletes a ticketComment', async (scenario: StandardScenario) => {
    const original = await deleteTicketComment({
      id: scenario.ticketComment.one.id,
    })
    const result = await ticketComment({ id: original.id })

    expect(result).toEqual(null)
  })
})
