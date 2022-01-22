import { render } from '@redwoodjs/testing/web'

import ChatProvider from './ChatProvider'

describe('ChatProvider', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChatProvider />)
    }).not.toThrow()
  })
})
