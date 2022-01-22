import type { FindUsers } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import PeopleTable from 'src/components/Layout/PeopleTable'

import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query FindUsers {
    employees {
      id
      firstName
      middleName
      lastName
      email
      otherEmails
      profileImage
      position
      supervisorId
      resume
      departments {
        name
      }
      updatedAt
      createdAt
    }
  }
`

export const Loading = () => <></>

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ employees }: CellSuccessProps<FindUsers>) => {
  return <PeopleTable people={employees} />
}
