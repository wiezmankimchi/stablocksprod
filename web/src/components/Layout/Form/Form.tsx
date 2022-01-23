import NewForm from 'src/components/Layout/NewForm'
import EditForm from 'src/components/Layout/EditForm'

import type { InputFieldProps } from '@redwoodjs/forms'

export interface FormField {
  name: string
  label: string
  element: React.ForwardRefExoticComponent<Omit<InputFieldProps, 'type'>>
  defaultValue: string | undefined
  required?: boolean
  newHide?: boolean
  editHide?: boolean
}

export interface Section {
  title?: string
  description?: string
  fields: FormField[]
  newHide?: boolean
  editHide?: boolean
}

export interface FormProps {
  sections: Section[]
  newForm?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (data: any) => void
  loading: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any
  isSaved?: boolean
}

const Form = (props: FormProps) => {
  if (props.newForm) return <NewForm {...props} />

  return <EditForm {...props} />
}

export default Form
