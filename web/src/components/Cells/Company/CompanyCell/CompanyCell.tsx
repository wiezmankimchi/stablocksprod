import { useState } from 'react'
import type { FindCompanyQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import Loader from 'src/components/Elements/Loader'
import PageTitle from 'src/components/Layout/PageTitle'
import Popup from 'src/components/Elements/Popup'
import NewCompany from 'src/components/NewComponents/NewCompany'
import { PencilAltIcon, PlusSmIcon } from '@heroicons/react/outline'

export const QUERY = gql`
  query FindCompanyQuery($id: String!) {
    company(id: $id) {
      id
      name
      website
      phone
    }
  }
`

export const Loading = () => (
  <>
    <PageTitle
      title="Company"
      breadcrumbs={[
        { title: 'Contacts', to: routes.contacts() },
        { title: 'Companies', to: routes.companies() },
      ]}
      search={{ label: 'companies', type: 'company' }}
    />
    <Loader />
  </>
)

export const Empty = () => <></>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ company }: CellSuccessProps<FindCompanyQuery>) => {
  const [isNewOpen, setIsNewOpen] = useState(false)

  return (
    <>
      <PageTitle
        title={company.name}
        breadcrumbs={[
          { title: 'Contacts', to: routes.contacts() },
          { title: 'Companies', to: routes.companies() },
        ]}
        search={{ label: 'companies', type: 'company' }}
        buttons={[
          {
            label: 'Edit',
            icon: PencilAltIcon,
            onClick: () => navigate(routes.editCompany({ id: company.id })),
            roles: ['admin', 'crmAdmin', 'crm'],
          },
          {
            label: 'New Company',
            icon: PlusSmIcon,
            onClick: () => setIsNewOpen(true),
            main: true,
          },
        ]}
      />

      <Popup isOpen={isNewOpen} setIsOpen={setIsNewOpen} title="New company">
        <NewCompany setOpen={setIsNewOpen} />
      </Popup>

      <div>{JSON.stringify(company)}</div>
    </>
  )
}
