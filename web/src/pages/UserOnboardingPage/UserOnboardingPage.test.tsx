import { render } from '@redwoodjs/testing/web'

import UserOnboardingPage from './UserOnboardingPage'

describe('UserOnboardingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserOnboardingPage />)
    }).not.toThrow()
  })
})
