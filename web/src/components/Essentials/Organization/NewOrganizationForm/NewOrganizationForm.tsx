import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const NewOrganizationForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.organization?.id)
  }

  return (
    <>
      <Form onSubmit={onSubmit} error={props.error}>
        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <Label
                name="name"
                className="block text-sm font-medium text-gray-700"
              >
                Company Name
              </Label>
              <TextField
                name="name"
                defaultValue={props.organization?.name}
                placeholder="Acme, Inc."
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                validation={{ required: true }}
              />
              <FieldError name="name" className="rw-field-error" />
            </div>

            <div className="col-span-3 sm:col-span-2">
              <Label
                name="website"
                className="block text-sm font-medium text-gray-700"
              >
                Website
              </Label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                  https://
                </span>
                <TextField
                  name="website"
                  defaultValue={props.organization?.website}
                  className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                  placeholder="www.example.com"
                />
              </div>
              <FieldError name="website" className="rw-field-error" />
            </div>

            <div className="col-span-3 sm:col-span-2">
              <Label
                name="logo"
                className="block text-sm font-medium text-gray-700"
              >
                Logo URL
              </Label>
              <TextField name="logo" defaultValue={props.organization?.logo} />
              <FieldError name="logo" className="rw-field-error" />
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
      </Form>
    </>
  )
}

export default NewOrganizationForm
