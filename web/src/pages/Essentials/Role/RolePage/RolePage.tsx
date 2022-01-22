import RoleCell from 'src/components/Essentials/Role/RoleCell'

type RolePageProps = {
  id: String
}

const RolePage = ({ id }: RolePageProps) => {
  return <RoleCell id={id} />
}

export default RolePage
