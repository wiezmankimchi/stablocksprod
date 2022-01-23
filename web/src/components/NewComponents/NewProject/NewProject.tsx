import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import ProjectForm from 'src/components/Forms/ProjectForm'

import { QUERY as PROJECTS_QUERY } from 'src/components/Cells/Project/ProjectsCell'

const CREATE_PROJECT_MUTATION = gql`
  mutation CreateProjectMutation($input: CreateProjectInput!) {
    createProject(input: $input) {
      id
    }
  }
`

const NewProject = (props) => {
  const [createProject, { loading, error }] = useMutation(
    CREATE_PROJECT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Project created')
        props.setOpen(false)
      },
      refetchQueries: [{ query: PROJECTS_QUERY }],
      awaitRefetchQueries: true,
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createProject({ variables: { input } })
  }

  return (
    <ProjectForm
      onSave={onSave}
      loading={loading}
      error={error}
      newForm={true}
    />
  )
}

export default NewProject
