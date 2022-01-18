import { useEffect, useState } from 'react'
import { FieldError, Label, Submit } from '@redwoodjs/forms'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/solid'

interface DescriptionListItemProps {
  label: string
  name: string
  value: string | number | boolean
  editAll?: boolean
  checkbox?: boolean
  children?: React.ReactNode
}

const DescriptionListItem = ({
  label,
  name,
  value,
  editAll,
  checkbox,
  children,
}: DescriptionListItemProps) => {
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    setEditing(editAll)
  }, [editAll, setEditing])

  const onSave = (e) => {
    e.currentTarget.click()
    setEditing(false)
  }

  return (
    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        {!editing ? (
          <div className="flex items-center justify-between">
            <span>
              {checkbox ? (
                value ? (
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                ) : (
                  <XCircleIcon className="h-5 w-5 text-red-600" />
                )
              ) : (
                <>{value}</>
              )}
            </span>
            {!editAll && (
              <button
                onClick={() => setEditing(true)}
                type="button"
                className="rounded-sm text-indigo-600"
              >
                edit
              </button>
            )}
          </div>
        ) : (
          <div className="md:flex md:items-center">
            <div className="flex-1">
              <Label name={name} className="hidden">
                {label}
              </Label>

              {children}

              <FieldError name={name} className="rw-field-error" />
            </div>
            {!editAll && (
              <div className="mt-2 flex items-center justify-end space-x-2 md:mt-0 md:ml-2">
                <button
                  onClick={() => setEditing(false)}
                  type="button"
                  className="rounded-sm text-indigo-600"
                >
                  cancel
                </button>
                <Submit onClick={onSave} className="btn btn-primary">
                  Save
                </Submit>
              </div>
            )}
          </div>
        )}
      </dd>
    </div>
  )
}

export default DescriptionListItem
