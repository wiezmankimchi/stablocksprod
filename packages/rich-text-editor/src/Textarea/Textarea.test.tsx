import { render } from '@redwoodjs/testing/web'

import Textarea from './Textarea'

describe('Textarea', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Textarea />)
    }).not.toThrow()
  })
})
