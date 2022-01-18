import type { FindUsers } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Users from 'src/components/Essentials/User/Users'

export const QUERY = gql`
  query FindUsers {
    users {
      id
      firstName
      middleName
      lastName
      email
      otherEmails
      profileImage
      userTypes
      position
      supervisorId
      amount
      payType
      resume
      updatedAt
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No users yet. '}
      <Link to={routes.newUser()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ users }: CellSuccessProps<FindUsers>) => {
  return <Users users={users} />
}
