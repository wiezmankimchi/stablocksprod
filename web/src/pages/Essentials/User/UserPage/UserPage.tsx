import UserCell from 'src/components/Essentials/User/UserCell'

type UserPageProps = {
  id: String
}

const UserPage = ({ id }: UserPageProps) => {
  return <UserCell id={id} />
}

export default UserPage
