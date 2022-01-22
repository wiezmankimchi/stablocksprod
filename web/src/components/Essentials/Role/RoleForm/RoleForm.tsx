import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const RoleForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.role?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User userId
        </Label>
        <TextField
          name="userId"
          defaultValue={props.role?.userId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="userId" className="rw-field-error" />

        <Label
          name="admin"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Admin
        </Label>
        <CheckboxField
          name="admin"
          defaultChecked={props.role?.admin}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="admin" className="rw-field-error" />

        <Label
          name="employee"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Employee
        </Label>
        <CheckboxField
          name="employee"
          defaultChecked={props.role?.employee}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="employee" className="rw-field-error" />

        <Label
          name="external"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          External
        </Label>
        <CheckboxField
          name="external"
          defaultChecked={props.role?.external}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="external" className="rw-field-error" />

        <Label
          name="departmentAdmin"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Department admin
        </Label>
        <CheckboxField
          name="departmentAdmin"
          defaultChecked={props.role?.departmentAdmin}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="departmentAdmin" className="rw-field-error" />

        <Label
          name="hrAdmin"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Hr admin
        </Label>
        <CheckboxField
          name="hrAdmin"
          defaultChecked={props.role?.hrAdmin}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="hrAdmin" className="rw-field-error" />

        <Label
          name="hr"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Hr
        </Label>
        <CheckboxField
          name="hr"
          defaultChecked={props.role?.hr}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="hr" className="rw-field-error" />

        <Label
          name="recruitingAdmin"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Recruiting admin
        </Label>
        <CheckboxField
          name="recruitingAdmin"
          defaultChecked={props.role?.recruitingAdmin}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="recruitingAdmin" className="rw-field-error" />

        <Label
          name="recruiting"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Recruiting
        </Label>
        <CheckboxField
          name="recruiting"
          defaultChecked={props.role?.recruiting}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="recruiting" className="rw-field-error" />

        <Label
          name="crmAdmin"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Crm admin
        </Label>
        <CheckboxField
          name="crmAdmin"
          defaultChecked={props.role?.crmAdmin}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="crmAdmin" className="rw-field-error" />

        <Label
          name="crm"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Crm
        </Label>
        <CheckboxField
          name="crm"
          defaultChecked={props.role?.crm}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="crm" className="rw-field-error" />

        <Label
          name="marketingAdmin"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Marketing admin
        </Label>
        <CheckboxField
          name="marketingAdmin"
          defaultChecked={props.role?.marketingAdmin}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="marketingAdmin" className="rw-field-error" />

        <Label
          name="marketing"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Marketing
        </Label>
        <CheckboxField
          name="marketing"
          defaultChecked={props.role?.marketing}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="marketing" className="rw-field-error" />

        <Label
          name="salesAdmin"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sales admin
        </Label>
        <CheckboxField
          name="salesAdmin"
          defaultChecked={props.role?.salesAdmin}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="salesAdmin" className="rw-field-error" />

        <Label
          name="sales"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sales
        </Label>
        <CheckboxField
          name="sales"
          defaultChecked={props.role?.sales}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="sales" className="rw-field-error" />

        <Label
          name="helpdeskAdmin"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Helpdesk admin
        </Label>
        <CheckboxField
          name="helpdeskAdmin"
          defaultChecked={props.role?.helpdeskAdmin}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="helpdeskAdmin" className="rw-field-error" />

        <Label
          name="helpdesk"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Helpdesk
        </Label>
        <CheckboxField
          name="helpdesk"
          defaultChecked={props.role?.helpdesk}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="helpdesk" className="rw-field-error" />

        <Label
          name="projectsAdmin"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Projects admin
        </Label>
        <CheckboxField
          name="projectsAdmin"
          defaultChecked={props.role?.projectsAdmin}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="projectsAdmin" className="rw-field-error" />

        <Label
          name="projects"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Projects
        </Label>
        <CheckboxField
          name="projects"
          defaultChecked={props.role?.projects}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="projects" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default RoleForm
