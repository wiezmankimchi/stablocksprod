import { render } from '@redwoodjs/testing/web'

import Editor from './Editor'

describe('Editor', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Editor />)
    }).not.toThrow()
  })
})
