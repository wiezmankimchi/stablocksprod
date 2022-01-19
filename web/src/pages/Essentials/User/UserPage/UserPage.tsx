import UserCell from 'src/components/Essentials/User/UserCell'

type UserPageProps = {
  id: string
}

const UserPage = ({ id }: UserPageProps) => {
  return <UserCell id={id} />
}

export default UserPage
