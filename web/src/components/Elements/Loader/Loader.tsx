import { RiLoader4Fill } from 'react-icons/ri'

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full text-indigo-600">
      <RiLoader4Fill className="h-10 w-10 animate-spin" />
    </div>
  )
}

export default Loader
