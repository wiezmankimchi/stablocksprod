import { routes } from '@redwoodjs/router'
import PageTitle from 'src/ui/PageTitle'

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
