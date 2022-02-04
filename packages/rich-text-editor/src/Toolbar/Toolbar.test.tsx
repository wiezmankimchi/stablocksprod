import { render } from '@redwoodjs/testing/web'

import Toolbar from './Toolbar'

describe('Toolbar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Toolbar />)
    }).not.toThrow()
  })
})
