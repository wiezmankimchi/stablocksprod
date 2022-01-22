// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route, Set } from '@redwoodjs/router'
import AppProviderCell from 'src/components/Providers/AppProviderCell'
import ChatProvider from 'src/components/Providers/ChatProvider'
import DashboardLayout from 'src/layouts/DashboardLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={[AppProviderCell, ChatProvider]}>
        <Route path="/onboarding" page={OnboardingPage} name="onboarding" />
        <Route path="/login" page={LoginPage} name="login" />

        <Private unauthenticated="login">
          <Route path="/user-onboarding" page={UserOnboardingPage} name="userOnboarding" />

          <Set wrap={[DashboardLayout]}>
            <Route path="/profile" page={ProfilePage} name="profile" />

            <Private unauthenticated="home" role={['admin', 'employee']}>
              <Route path="/organization/employees/{id}/roles/edit" page={EssentialsRoleEditRolePage} name="editEmployeeRole" />
              <Route path="/organization/employees/{id}/roles" page={EssentialsRoleRolesPage} name="employeeRoles" />
              <Route path="/organization/employees/{id}/edit" page={EssentialsUserEditUserPage} name="editEmployees" />
              <Route path="/organization/employees/{id}" page={EssentialsUserUserPage} name="employee" />
              <Route path="/organization/employees" page={EssentialsUserEmployeesPage} name="employees" />

              <Private unauthenticated="organization" role={['admin']}>
                <Route path="/organization/settings" page={EssentialsOrganizationOrganizationSettingsPage} name="organizationSettings" />
              </Private>

              <Route path="/organization" page={EssentialsOrganizationOrganizationPage} name="organization" />
            </Private>

            <Route path="/" page={HomePage} name="home" />
          </Set>
        </Private>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
