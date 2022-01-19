import { render } from '@redwoodjs/testing/web'

import PeopleTable from './PeopleTable'

describe('PeopleTable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PeopleTable />)
    }).not.toThrow()
  })
})
