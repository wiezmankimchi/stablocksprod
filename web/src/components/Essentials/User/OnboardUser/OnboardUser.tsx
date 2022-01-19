import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, Redirect, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import {
  FieldError,
  Form,
  FormError,
  HiddenField,
  Label,
  Submit,
  TextField,
} from '@redwoodjs/forms'

const ONBOARDING_CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`

const ONBOARDING_UPDATE_USER_MUTATION = gql`
  mutation UpdateUserMutation($id: String!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      firstName
      middleName
      lastName
      email
      otherEmails
      profileImage
      userTypes
      position
      supervisorId
      amount
      payType
      resume
      updatedAt
      createdAt
    }
  }
`

const NewUser = () => {
  const { currentUser } = useAuth()

  const [createUser, { loading, error }] = useMutation(
    ONBOARDING_CREATE_USER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Account updated')
        navigate(routes.home())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const [updateUser, { loading: updateLoading, error: updateError }] =
    useMutation(ONBOARDING_UPDATE_USER_MUTATION, {
      onCompleted: () => {
        toast.success('Account updated')
        navigate(routes.home())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    })

  const onSave = (input) => {
    if (!currentUser?.email) {
      input.userTypes = ['applicant']
      createUser({ variables: { input } })
    } else {
      delete input.email
      updateUser({ variables: { id: currentUser.id, input } })
    }
  }

  if (currentUser.firstName && currentUser.lastName) {
    return <Redirect to={routes.home()} />
  }

  return (
    <main className="flex justify-center h-full py-12 md:py-16 px-4 md:px-12">
      <div className="max-w-5xl w-full mx-auto">
        <div className="pb-5 mb-5 border-b border-gray-200">
          <h3 className="text-3xl leading-6 font-bold text-gray-900">
            Update Account Information
          </h3>
        </div>

        <div>
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Personal Information
                </h3>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="shadow rounded-md overflow-hidden">
                <Form onSubmit={onSave} error={updateError || error}>
                  <FormError
                    error={updateError || error}
                    wrapperClassName="rw-form-error-wrapper"
                    titleClassName="rw-form-error-title"
                    listClassName="rw-form-error-list"
                  />
                  <div className="shadow overflow-hidden rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <Label name="firstName">First name</Label>
                          <TextField
                            name="firstName"
                            validation={{ required: true }}
                          />
                          <FieldError
                            name="firstName"
                            className="rw-field-error"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <Label name="lastName">Last name</Label>
                          <TextField
                            name="lastName"
                            validation={{ required: true }}
                          />
                          <FieldError
                            name="lastName"
                            className="rw-field-error"
                          />
                        </div>

                        <HiddenField
                          name="email"
                          defaultValue={currentUser.email.toString()}
                          className="bg-gray-100"
                          validation={{ required: true }}
                        />
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <Submit
                        disabled={updateLoading || loading}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Save
                      </Submit>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NewUser
