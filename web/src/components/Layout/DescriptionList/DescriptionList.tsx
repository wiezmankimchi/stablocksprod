import { useEffect, useState } from 'react'
import { Checkbox, Form, FormError, Submit } from '@redwoodjs/forms'

interface DescriptionListProps {
  title: string
  description?: string
  onSubmit: (data: any) => void
  isSaved: boolean
  error: any
  children: React.ReactNode
}

const DescriptionList = ({
  title,
  description,
  onSubmit = () => {},
  isSaved,
  error,
  children,
}: DescriptionListProps) => {
  const [editAll, setEditAll] = useState(false)

  useEffect(() => {
    if (isSaved) {
      setEditAll(false)
    }
  }, [isSaved])

  return (
    <Form onSubmit={onSubmit} error={error} className="max-w-3xl">
      <div className="sm:flex flex-wrap items-center justify-between">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {title}
          </h3>
          {description && (
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              {description}
            </p>
          )}
        </div>
        <div className="btn-group mt-5 sm:mt-0">
          <button
            type="button"
            className="btn"
            onClick={() => setEditAll(!editAll)}
          >
            {editAll ? 'Cancel' : 'Edit'}
          </button>
          {editAll && <Submit className="btn btn-primary">Save</Submit>}
        </div>
      </div>

      <FormError
        error={error}
        wrapperClassName="text-xs mt-5 text-red-600"
        titleClassName=""
        listClassName=""
      />

      <div className="mt-5 border-t border-gray-200">
        <dl className="sm:divide-y sm:divide-gray-200">
          {React.Children.map(children, (child) => {
            if (typeof child === 'string') {
              return child
            }

            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                editAll,
              })
            }

            return child
          })}
        </dl>
      </div>

      {editAll && (
        <div className="flex items-center sm:justify-end pt-5 border-t border-gray-200">
          <div className="btn-group">
            <button
              type="button"
              className="btn"
              onClick={() => setEditAll(!editAll)}
            >
              Cancel
            </button>

            <Submit className="btn btn-primary">Save</Submit>
          </div>
        </div>
      )}
    </Form>
  )
}

export default DescriptionList
