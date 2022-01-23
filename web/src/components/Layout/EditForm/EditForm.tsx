import DescriptionList from 'src/components/Layout/DescriptionList'
import DescriptionListItem from 'src/components/Layout/DescriptionListItem'

import type { FormProps } from 'src/components/Layout/Form'

const EditForm = (props: FormProps) => {
  const { sections, onSubmit, loading, error, isSaved } = props

  return (
    <div className="space-y-12">
      {sections.map(
        (section, i) =>
          !section.editHide && (
            <DescriptionList
              key={i}
              title={section.title}
              onSubmit={onSubmit}
              loading={loading}
              error={error}
              isSaved={isSaved}
            >
              {section.fields.map(
                (field, i) =>
                  !field.editHide && (
                    <DescriptionListItem
                      key={i}
                      name={field.name}
                      label={field.label}
                      value={field.defaultValue}
                    >
                      <field.element
                        name={field.name}
                        defaultValue={field.defaultValue}
                        validation={{ required: field.required }}
                      />
                    </DescriptionListItem>
                  )
              )}
            </DescriptionList>
          )
      )}
    </div>
  )
}

export default EditForm
