import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const TasksPage = () => {
  return (
    <>
      <MetaTags title="Tasks" description="Tasks page" />

      <h1>TasksPage</h1>
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
