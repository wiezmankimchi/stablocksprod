import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const UserForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.user?.id)
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
          name="firstName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          First name
        </Label>
        <TextField
          name="firstName"
          defaultValue={props.user?.firstName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="firstName" className="rw-field-error" />

        <Label
          name="middleName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Middle name
        </Label>
        <TextField
          name="middleName"
          defaultValue={props.user?.middleName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="middleName" className="rw-field-error" />

        <Label
          name="lastName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Last name
        </Label>
        <TextField
          name="lastName"
          defaultValue={props.user?.lastName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="lastName" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>
        <TextField
          name="email"
          defaultValue={props.user?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="email" className="rw-field-error" />

        <Label
          name="otherEmails"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Other emails
        </Label>
        <TextField
          name="otherEmails"
          defaultValue={props.user?.otherEmails}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="otherEmails" className="rw-field-error" />

        <Label
          name="profileImage"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Profile image
        </Label>
        <TextField
          name="profileImage"
          defaultValue={props.user?.profileImage}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="profileImage" className="rw-field-error" />

        <Label
          name="userTypes"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User types
        </Label>
        <TextField
          name="userTypes"
          defaultValue={props.user?.userTypes}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="userTypes" className="rw-field-error" />

        <Label
          name="position"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Position
        </Label>
        <TextField
          name="position"
          defaultValue={props.user?.position}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="position" className="rw-field-error" />

        <Label
          name="supervisorId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Supervisor id
        </Label>
        <TextField
          name="supervisorId"
          defaultValue={props.user?.supervisorId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="supervisorId" className="rw-field-error" />

        <Label
          name="amount"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Amount
        </Label>
        <NumberField
          name="amount"
          defaultValue={props.user?.amount}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="amount" className="rw-field-error" />

        <Label
          name="type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Type
        </Label>
        <TextField
          name="type"
          defaultValue={props.user?.type}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="type" className="rw-field-error" />

        <Label
          name="resume"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Resume
        </Label>
        <TextField
          name="resume"
          defaultValue={props.user?.resume}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="resume" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserForm
