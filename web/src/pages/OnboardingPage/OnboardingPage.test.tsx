import { render } from '@redwoodjs/testing/web'

import OnboardingPage from './OnboardingPage'

describe('OnboardingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OnboardingPage />)
    }).not.toThrow()
  })
})
