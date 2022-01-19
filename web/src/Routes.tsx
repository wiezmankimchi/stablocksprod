// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import AppProviderCell from 'src/components/Providers/AppProviderCell'
import DashboardLayout from 'src/layouts/DashboardLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={[AppProviderCell]}>
        <Route path="/onboarding" page={OnboardingPage} name="onboarding" />
        <Route path="/login" page={LoginPage} name="login" />
        <Set private unauthenticated="login">
          <Route path="/user-onboarding" page={UserOnboardingPage} name="userOnboarding" />
          <Set wrap={[DashboardLayout]}>
            <Route path="/profile" page={ProfilePage} name="profile" />
            <Route path="/organization/employees/new" page={EssentialsUserNewUserPage} name="newEmployees" />
            <Route path="/organization/employees/{id}/edit" page={EssentialsUserEditUserPage} name="editEmployees" />
            <Route path="/organization/employees/{id}" page={EssentialsUserUserPage} name="employee" />
            <Route path="/organization/settings" page={EssentialsOrganizationOrganizationSettingsPage} name="organizationSettings" />
            <Route path="/organization" page={EssentialsOrganizationOrganizationPage} name="organization" />
            <Route path="/" page={HomePage} name="home" />
          </Set>
        </Set>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
