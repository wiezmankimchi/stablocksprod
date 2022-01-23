import { Link, routes } from '@redwoodjs/router'
import PageTitle from 'src/components/Layout/PageTitle'

const TasksPage = () => {
  return (
    <>
      <PageTitle
        title="Your Tasks"
        breadcrumbs={[{ title: 'Projects', to: routes.projects() }]}
        currentCrumbLabel="Tasks"
        search={{ label: 'tasks', type: 'task' }}
      />

      <p>
        Find me in <code>./web/src/pages/TasksPage/TasksPage.tsx</code>
      </p>
      <p>
        My default route is named <code>tasks</code>, link to me with `
        <Link to={routes.tasks()}>Tasks</Link>`
      </p>
    </>
  )
}

export default TasksPage
