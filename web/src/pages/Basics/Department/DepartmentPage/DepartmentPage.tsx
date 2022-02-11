import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const DepartmentPage = () => {
  return (
    <>
      <MetaTags title="Department" description="Department page" />

      <h1>DepartmentPage</h1>
      <p>
        Find me in <code>./web/src/pages/DepartmentPage/DepartmentPage.tsx</code>
      </p>
      <p>
        My default route is named <code>department</code>, link to me with `
        <Link to={routes.department()}>Department</Link>`
      </p>
    </>
  )
}

export default DepartmentPage
