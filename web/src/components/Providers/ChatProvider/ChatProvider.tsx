import { Fragment, useEffect, useRef, useState } from 'react'
import { useAuth } from '@redwoodjs/auth'
import { Form, Submit, TextAreaField } from '@redwoodjs/forms'
import { Transition } from '@headlessui/react'
import ChatMessage from 'src/components/Elements/ChatMessage'
import {
  ChatAlt2Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XIcon,
} from '@heroicons/react/outline'

interface ChatProviderProps {
  children: React.ReactNode
}

const ChatProvider = ({ children }: ChatProviderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedChat, setSelectedChat] = useState('')

  const lastMessageRef = useRef(null)

  const { currentUser } = useAuth()
  const userRoles = currentUser.roles

  if (userRoles.includes('admin') || userRoles.includes('employee')) {
    // return children
  }

  const options = [
    { id: 'qwertyuiop', title: 'Chat 1' },
    { id: 'asdfghjkl;', title: 'Chat 234353' },
  ]

  useEffect(() => {
    if (selectedChat) {
      lastMessageRef.current.scrollIntoView()
    }
  }, [selectedChat])

  return (
    <>
      {children}
      <div id="chat-container">
        <div className="max-w-sm w-full fixed bottom-12 right-0 z-40">
          <div className="relative flex flex-col items-end">
            <Transition
              appear
              show={isOpen}
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="border bg-white border-gray-300 rounded-2xl overflow-hidden shadow-sm mb-8 mx-4 w-full max-w-2xl">
                <div className="flex items-center px-6 py-4">
                  {selectedChat && (
                    <button
                      type="button"
                      className="p-1 rounded-full -ml-4 mr-1"
                      onClick={() => setSelectedChat('')}
                    >
                      <span className="sr-only">Select different chat</span>
                      <ChevronLeftIcon className="h-4 w-4" />
                    </button>
                  )}
                  <h3 className="font-semibold">Helpdesk Chat</h3>
                </div>
                <div className="flex flex-col border-t border-gray-300">
                  {!selectedChat && options && options.length > 0 && (
                    <div className="py-2 bg-gray-50">
                      {options.map((option, i) => (
                        <div key={i}>
                          <button
                            className="w-full group flex items-center justify-between text-left px-6 py-2 hover:bg-gray-200 focus:bg-gray-100"
                            onClick={() => setSelectedChat(option.id)}
                          >
                            {option.title}
                            <ChevronRightIcon
                              className="h-4 w-4 text-gray-500 group-hover:text-gray-900"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {selectedChat && (
                    <div className="bg-gray-50 pb-2 max-w-md w-full ">
                      <div className="max-h-[24rem] px-2 pb-1 overflow-y-auto">
                        <p className="text-xs text-gray-500 my-1 text-center">
                          Chat started 1 minute ago
                        </p>
                        <div className="space-y-4">
                          <ChatMessage />
                          <ChatMessage sent />
                          <ChatMessage />
                          <ChatMessage sent />
                          <ChatMessage />
                          <ChatMessage sent />
                          <ChatMessage />
                          <ChatMessage sent />
                          <ChatMessage />
                          <ChatMessage sent />
                          <ChatMessage />
                          <ChatMessage sent ref={lastMessageRef} />
                        </div>
                      </div>
                      <Form className="mt-2 px-2">
                        <TextAreaField
                          name="message"
                          className="min-h-[4rem] max-h-48"
                          placeholder="Write your message..."
                        />
                        <div className="flex items-center justify-between mt-2">
                          <div></div>
                          <Submit className="btn btn-primary text-xs">
                            Send
                          </Submit>
                        </div>
                      </Form>
                    </div>
                  )}
                </div>
              </div>
            </Transition>
          </div>
        </div>
        <button
          type="button"
          className="fixed bottom-4 right-4 p-3 bg-indigo-600 rounded-full text-gray-100 shadow hover:bg-indigo-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <>
              <span className="sr-only">Close help chat</span>
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </>
          ) : (
            <>
              <span className="sr-only">Open help chat</span>
              <ChatAlt2Icon className="h-6 w-6" aria-hidden="true" />
            </>
          )}
          <div
            className="bg-red-600 p-[.38rem] rounded-full absolute -top-[.13rem] -right-[.13rem] border-2 border-gray-100"
            aria-hidden="true"
          />
        </button>
      </div>
    </>
  )
}

export default ChatProvider
