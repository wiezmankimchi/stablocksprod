import { routes } from '@redwoodjs/router'
import PageTitle from 'src/components/Layout/PageTitle'

const DepartmentsPage = () => {
  return (
    <>
      <PageTitle
        title="Departments"
        breadcrumbs={[{ title: 'Organization', to: routes.organization() }]}
        search={{ label: 'departments', type: 'department' }}
      />
    </>
  )
}

export default DepartmentsPage
