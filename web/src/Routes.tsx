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
        <Set private unauthenticated="login" wrap={[DashboardLayout]}>
          <Route path="/profile" page={ProfilePage} name="profile" />
          <Route path="/users/new" page={EssentialsUserNewUserPage} name="newUser" />
          <Route path="/users/{id}/edit" page={EssentialsUserEditUserPage} name="editUser" />
          <Route path="/users/{id}" page={EssentialsUserUserPage} name="user" />
          <Route path="/users" page={EssentialsUserUsersPage} name="users" />
          <Route path="/organization/settings" page={EssentialsOrganizationOrganizationSettingsPage} name="organizationSettings" />
          <Route path="/organization" page={EssentialsOrganizationOrganizationPage} name="organization" />
          <Route path="/" page={HomePage} name="home" />
        </Set>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
