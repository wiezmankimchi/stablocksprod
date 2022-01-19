import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import OnboardUser from 'src/components/Essentials/User/OnboardUser'

const UserOnboardingPage = () => {
  return (
    <>
      <MetaTags title="User Onboarding" />

      <OnboardUser />
    </>
  )
}

export default UserOnboardingPage
