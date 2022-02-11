import { Fragment, useEffect, useRef, useState } from 'react'
import { useAuth } from '@redwoodjs/auth'
import { Form, Submit, TextAreaField } from '@redwoodjs/forms'
import { Dialog, Transition } from '@headlessui/react'
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
  const userRoles = currentUser?.roles

  if (userRoles?.includes('admin') || userRoles?.includes('employee')) {
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
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-[90] overflow-y-auto"
          onClose={() => setIsOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div id="chat-container">
                <div className="fixed bottom-12 right-0 z-40 w-full max-w-sm">
                  <div className="relative flex flex-col items-end">
                    <div className="mx-4 mb-8 w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-300 bg-white">
                      <div className="flex items-center px-6 py-4">
                        {selectedChat && (
                          <button
                            type="button"
                            className="-ml-4 mr-1 rounded-full p-1"
                            onClick={() => setSelectedChat('')}
                          >
                            <span className="sr-only">
                              Select different chat
                            </span>
                            <ChevronLeftIcon className="h-4 w-4" />
                          </button>
                        )}
                        <h3 className="font-semibold">Helpdesk Chat</h3>
                      </div>
                      <div className="flex flex-col border-t border-gray-300">
                        {!selectedChat && options && options.length > 0 && (
                          <div className="bg-gray-50 py-2">
                            {options.map((option, i) => (
                              <div key={i}>
                                <button
                                  className="group flex w-full items-center justify-between px-6 py-2 text-left hover:bg-gray-200 focus:bg-gray-100"
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
                          <div className="w-full max-w-md bg-gray-50 pb-2 ">
                            <div className="max-h-[24rem] overflow-y-auto px-2 pb-1">
                              <p className="my-1 text-center text-xs text-gray-500">
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
                                className="max-h-48 min-h-[4rem]"
                                placeholder="Write your message..."
                              />
                              <div className="mt-2 flex items-center justify-between">
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
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <button
        type="button"
        className="fixed bottom-4 right-4 z-[60] rounded-full bg-indigo-600 p-3 text-gray-100 transition-colors duration-300 hover:bg-indigo-700"
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
          className="absolute -top-[.13rem] -right-[.13rem] rounded-full border-2 border-gray-100 bg-red-600 p-[.38rem]"
          aria-hidden="true"
        />
      </button>
    </>
  )
}

export default ChatProvider
