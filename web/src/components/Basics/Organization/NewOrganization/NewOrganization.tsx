import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import NewOrganizationForm from '../NewOrganizationForm'

const CREATE_ORGANIZATION_MUTATION = gql`
  mutation CreateOrganizationMutation($input: CreateOrganizationInput!) {
    createOrganization(input: $input) {
      id
    }
  }
`

const NewOrganization = () => {
  const [createOrganization, { loading, error }] = useMutation(
    CREATE_ORGANIZATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Organization created')
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createOrganization({ variables: { input } })
  }

  return <NewOrganizationForm onSave={onSave} loading={loading} error={error} />
}

export default NewOrganization
