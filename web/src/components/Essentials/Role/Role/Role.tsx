import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

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

const Role = ({ role }) => {
  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Role {role.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>User id</th>
              <td>{role.id}</td>
            </tr>
            <tr>
              <th>User userId</th>
              <td>{role.userId}</td>
            </tr>
            <tr>
              <th>Admin</th>
              <td>{checkboxInputTag(role.admin)}</td>
            </tr>
            <tr>
              <th>Employee</th>
              <td>{checkboxInputTag(role.employee)}</td>
            </tr>
            <tr>
              <th>External</th>
              <td>{checkboxInputTag(role.external)}</td>
            </tr>
            <tr>
              <th>Department admin</th>
              <td>{checkboxInputTag(role.departmentAdmin)}</td>
            </tr>
            <tr>
              <th>Hr admin</th>
              <td>{checkboxInputTag(role.hrAdmin)}</td>
            </tr>
            <tr>
              <th>Hr</th>
              <td>{checkboxInputTag(role.hr)}</td>
            </tr>
            <tr>
              <th>Recruiting admin</th>
              <td>{checkboxInputTag(role.recruitingAdmin)}</td>
            </tr>
            <tr>
              <th>Recruiting</th>
              <td>{checkboxInputTag(role.recruiting)}</td>
            </tr>
            <tr>
              <th>Crm admin</th>
              <td>{checkboxInputTag(role.crmAdmin)}</td>
            </tr>
            <tr>
              <th>Crm</th>
              <td>{checkboxInputTag(role.crm)}</td>
            </tr>
            <tr>
              <th>Marketing admin</th>
              <td>{checkboxInputTag(role.marketingAdmin)}</td>
            </tr>
            <tr>
              <th>Marketing</th>
              <td>{checkboxInputTag(role.marketing)}</td>
            </tr>
            <tr>
              <th>Sales admin</th>
              <td>{checkboxInputTag(role.salesAdmin)}</td>
            </tr>
            <tr>
              <th>Sales</th>
              <td>{checkboxInputTag(role.sales)}</td>
            </tr>
            <tr>
              <th>Helpdesk admin</th>
              <td>{checkboxInputTag(role.helpdeskAdmin)}</td>
            </tr>
            <tr>
              <th>Helpdesk</th>
              <td>{checkboxInputTag(role.helpdesk)}</td>
            </tr>
            <tr>
              <th>Projects admin</th>
              <td>{checkboxInputTag(role.projectsAdmin)}</td>
            </tr>
            <tr>
              <th>Projects</th>
              <td>{checkboxInputTag(role.projects)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(role.updatedAt)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(role.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.essentialsEditRole({ id: role.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
      </nav>
    </>
  )
}

export default Role
