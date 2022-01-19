import EditRoleCell from 'src/components/Essentials/Role/EditRoleCell'

type RolePageProps = {
  id: string
}

const EditRolePage = ({ id }: RolePageProps) => {
  return <EditRoleCell id={id} />
}

export default EditRolePage
