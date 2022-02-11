import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const EditDepartmentPage = () => {
  return (
    <>
      <MetaTags title="EditDepartment" description="EditDepartment page" />

      <h1>EditDepartmentPage</h1>
      <p>
        Find me in <code>./web/src/pages/EditDepartmentPage/EditDepartmentPage.tsx</code>
      </p>
      <p>
        My default route is named <code>editDepartment</code>, link to me with `
        <Link to={routes.editDepartment()}>EditDepartment</Link>`
      </p>
    </>
  )
}

export default EditDepartmentPage
