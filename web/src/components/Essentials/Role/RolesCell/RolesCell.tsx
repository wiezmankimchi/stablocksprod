import type { FindRoles } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Roles from 'src/components/Essentials/Role/Roles'

export const QUERY = gql`
  query FindRoles {
    roles {
      id
      userId
      admin
      employee
      external
      departmentAdmin
      hrAdmin
      hr
      recruitingAdmin
      recruiting
      crmAdmin
      crm
      marketingAdmin
      marketing
      salesAdmin
      sales
      helpdeskAdmin
      helpdesk
      projectsAdmin
      projects
      updatedAt
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return <div className="rw-text-center">{'No roles yet.'}</div>
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ roles }: CellSuccessProps<FindRoles>) => {
  return <Roles roles={roles} />
}
