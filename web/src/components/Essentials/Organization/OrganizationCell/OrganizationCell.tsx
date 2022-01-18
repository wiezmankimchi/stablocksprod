import type { FindOrganizationById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Organization from 'src/components/Essentials/Organization/Organization'

export const QUERY = gql`
  query FindOrganization {
    organization {
      id
      name
      website
      logo
      recruiting
      crm
      helpdesk
      projects
      updatedAt
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Organization not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  organization,
}: CellSuccessProps<FindOrganizationById>) => {
  return <Organization organization={organization} />
}
