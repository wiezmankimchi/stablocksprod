interface MessageProps {
  sent?: boolean
}

const ChatMessage = React.forwardRef<HTMLDivElement, MessageProps>(
  (props, ref) => {
    const { sent } = props

    return (
      <div
        ref={ref}
        className={`${
          sent ? 'items-end ml-auto' : 'mr-auto'
        } flex flex-col max-w-xs`}
      >
        <p className="text-gray-500 text-xs mb-1">1m ago</p>
        <div
          className={`${
            sent ? 'bg-indigo-600 text-white' : 'bg-indigo-100'
          } px-3 py-2 shadow rounded-lg`}
        >
          <h4 className="font-bold text-sm">
            <span className="sr-only">from</span>
            {sent ? 'You' : 'User'}
          </h4>
          <p className="text-sm">Here&apos;s a message!</p>
        </div>
      </div>
    )
  }
)

export default ChatMessage
