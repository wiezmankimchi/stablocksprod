import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Essentials/Role/RolesCell'

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
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

const RolesList = ({ roles }) => {
  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User userId</th>
            <th>Admin</th>
            <th>Employee</th>
            <th>External</th>
            <th>Department admin</th>
            <th>Hr admin</th>
            <th>Hr</th>
            <th>Recruiting admin</th>
            <th>Recruiting</th>
            <th>Crm admin</th>
            <th>Crm</th>
            <th>Marketing admin</th>
            <th>Marketing</th>
            <th>Sales admin</th>
            <th>Sales</th>
            <th>Helpdesk admin</th>
            <th>Helpdesk</th>
            <th>Projects admin</th>
            <th>Projects</th>
            <th>Updated at</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{truncate(role.id)}</td>
              <td>{truncate(role.userId)}</td>
              <td>{checkboxInputTag(role.admin)}</td>
              <td>{checkboxInputTag(role.employee)}</td>
              <td>{checkboxInputTag(role.external)}</td>
              <td>{checkboxInputTag(role.departmentAdmin)}</td>
              <td>{checkboxInputTag(role.hrAdmin)}</td>
              <td>{checkboxInputTag(role.hr)}</td>
              <td>{checkboxInputTag(role.recruitingAdmin)}</td>
              <td>{checkboxInputTag(role.recruiting)}</td>
              <td>{checkboxInputTag(role.crmAdmin)}</td>
              <td>{checkboxInputTag(role.crm)}</td>
              <td>{checkboxInputTag(role.marketingAdmin)}</td>
              <td>{checkboxInputTag(role.marketing)}</td>
              <td>{checkboxInputTag(role.salesAdmin)}</td>
              <td>{checkboxInputTag(role.sales)}</td>
              <td>{checkboxInputTag(role.helpdeskAdmin)}</td>
              <td>{checkboxInputTag(role.helpdesk)}</td>
              <td>{checkboxInputTag(role.projectsAdmin)}</td>
              <td>{checkboxInputTag(role.projects)}</td>
              <td>{timeTag(role.updatedAt)}</td>
              <td>{timeTag(role.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.essentialsRole({ id: role.id })}
                    title={'Show role ' + role.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.essentialsEditRole({ id: role.id })}
                    title={'Edit role ' + role.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RolesList
