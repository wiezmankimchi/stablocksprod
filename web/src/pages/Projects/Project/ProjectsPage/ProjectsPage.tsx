import { useState } from 'react'
import PageTitle from 'src/components/Layout/PageTitle'
import Popup from 'src/components/Elements/Popup'
import NewProject from 'src/components/NewComponents/NewProject'
import ProjectsCell from 'src/components/Cells/Project/ProjectsCell'
import { PlusSmIcon } from '@heroicons/react/outline'

const ProjectsPage = () => {
  const [isNewOpen, setIsNewOpen] = useState(false)

  return (
    <>
      <PageTitle
        title="Projects"
        search={{ label: 'projects', type: 'project' }}
        buttons={[
          {
            label: 'New Project',
            icon: PlusSmIcon,
            onClick: () => setIsNewOpen(true),
            main: true,
          },
        ]}
      />

      <Popup isOpen={isNewOpen} setIsOpen={setIsNewOpen} title="New project">
        <NewProject setOpen={setIsNewOpen} />
      </Popup>

      <ProjectsCell />
    </>
  )
}

export default ProjectsPage
