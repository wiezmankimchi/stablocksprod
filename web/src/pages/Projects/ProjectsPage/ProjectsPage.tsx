import { Link, routes } from '@redwoodjs/router'
import PageTitle from 'src/components/Layout/PageTitle'

const ProjectsPage = () => {
  return (
    <>
      <PageTitle
        title="Projects"
        search={{ label: 'projects', type: 'project' }}
      />

      <p>
        Find me in <code>./web/src/pages/ProjectsPage/ProjectsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>projects</code>, link to me with `
        <Link to={routes.projects()}>Projects</Link>`
      </p>
    </>
  )
}

export default ProjectsPage
