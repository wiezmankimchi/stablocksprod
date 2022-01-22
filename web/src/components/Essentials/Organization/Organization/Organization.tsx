import { Link, routes } from '@redwoodjs/router'

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Organization = ({ organization }) => {
  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Organization {organization.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{organization.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{organization.name}</td>
            </tr>
            <tr>
              <th>Website</th>
              <td>{organization.website}</td>
            </tr>
            <tr>
              <th>Logo</th>
              <td>{organization.logo}</td>
            </tr>
            <tr>
              <th>Recruiting</th>
              <td>{checkboxInputTag(organization.recruiting)}</td>
            </tr>
            <tr>
              <th>Crm</th>
              <td>{checkboxInputTag(organization.crm)}</td>
            </tr>
            <tr>
              <th>Helpdesk</th>
              <td>{checkboxInputTag(organization.helpdesk)}</td>
            </tr>
            <tr>
              <th>Projects</th>
              <td>{checkboxInputTag(organization.projects)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(organization.updatedAt)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(organization.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editOrganization({ id: organization.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
      </nav>
    </>
  )
}

export default Organization
