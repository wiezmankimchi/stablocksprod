import {
  tickets,
  ticket,
  createTicket,
  updateTicket,
  deleteTicket,
} from './tickets'
import type { StandardScenario } from './tickets.scenarios'

describe('tickets', () => {
  scenario('returns all tickets', async (scenario: StandardScenario) => {
    const result = await tickets()

    expect(result.length).toEqual(Object.keys(scenario.ticket).length)
  })

  scenario('returns a single ticket', async (scenario: StandardScenario) => {
    const result = await ticket({ id: scenario.ticket.one.id })

    expect(result).toEqual(scenario.ticket.one)
  })

  scenario('creates a ticket', async (scenario: StandardScenario) => {
    const result = await createTicket({
      input: {
        title: 'String',
        userId: scenario.ticket.two.userId,
        updatedAt: '2022-01-15T20:52:31Z',
      },
    })

    expect(result.title).toEqual('String')
    expect(result.userId).toEqual(scenario.ticket.two.userId)
    expect(result.updatedAt.toString()).toEqual('2022-01-15T20:52:31.000Z')
  })

  scenario('updates a ticket', async (scenario: StandardScenario) => {
    const original = await ticket({ id: scenario.ticket.one.id })
    const result = await updateTicket({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a ticket', async (scenario: StandardScenario) => {
    const original = await deleteTicket({ id: scenario.ticket.one.id })
    const result = await ticket({ id: original.id })

    expect(result).toEqual(null)
  })
})
