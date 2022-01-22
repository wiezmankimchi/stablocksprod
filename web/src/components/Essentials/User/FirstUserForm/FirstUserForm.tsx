import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const UserForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.user?.id)
  }

  return (
    <>
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
        <div className="shadow overflow-hidden rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <Label
                  name="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </Label>
                <TextField
                  name="firstName"
                  defaultValue={props.user?.firstName}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  validation={{ required: true }}
                />
                <FieldError name="firstName" className="rw-field-error" />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <Label
                  name="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </Label>
                <TextField
                  name="lastName"
                  defaultValue={props.user?.lastName}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  validation={{ required: true }}
                />
                <FieldError name="lastName" className="rw-field-error" />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <Label
                  name="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </Label>
                <TextField
                  name="email"
                  defaultValue={props.user?.email}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  validation={{ required: true }}
                />
                <FieldError name="email" className="rw-field-error" />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <Submit
              disabled={props.loading}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </Submit>
          </div>
        </div>
      </Form>
    </>
  )
}

export default UserForm
