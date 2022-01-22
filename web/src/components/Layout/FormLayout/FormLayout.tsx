import { Form, FormError, Submit } from '@redwoodjs/forms'

interface FormFieldsProps {
  singleLine?: boolean
  children?: React.ReactNode
}

interface FormSectionProps {
  title?: string
  description?: string
  children?: React.ReactNode
}

interface FormLayoutProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (data: any) => void
  loading: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any
  children?: React.ReactNode
}

export const FormFields = ({ singleLine, children }: FormFieldsProps) => {
  return (
    <div
      className={`${
        !singleLine ? 'sm:grid-cols-6 ' : ''
      }mt-6 grid grid-cols-1 gap-y-6 gap-x-4`}
    >
      {children}
    </div>
  )
}

export const FormSection = ({
  title,
  description,
  children,
}: FormSectionProps) => {
  return (
    <div>
      {title && (
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {title}
          </h3>
          {description && (
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          )}
        </div>
      )}
      {children}
    </div>
  )
}

const FormLayout = ({
  onSubmit,
  loading,
  error,
  children,
}: FormLayoutProps) => {
  return (
    <Form
      onSubmit={onSubmit}
      error={error}
      className="space-y-8 divide-y divide-gray-200"
    >
      <FormError
        error={error}
        wrapperClassName="rw-form-error-wrapper"
        titleClassName="rw-form-error-title"
        listClassName="rw-form-error-list"
      />
      {children}
      <div className="pt-5">
        <div className="flex justify-end">
          <Submit
            disabled={loading}
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </Submit>
        </div>
      </div>
    </Form>
  )
}

export default FormLayout