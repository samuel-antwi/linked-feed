import { useEffect, useState } from 'react'
import client from '../graphql/client'
import { GET_CHATS } from '../graphql/queries'
import { FiEdit } from 'react-icons/fi'
import { HiDotsHorizontal } from 'react-icons/hi'
import { BsChevronCompactDown } from 'react-icons/bs'

const Chat = () => {
  const [chats, setChats] = useState([])
  const [openChat, setOpenChat] = useState(true)

  useEffect(() => {
    fetchChats()
  }, [])

  const fetchChats = async () => {
    const { chats } = await client.request(GET_CHATS)
    setChats(chats)
  }

  return (
    <div className='fixed overflow-scroll w-[290px] top-[105px] bottom-0 right-0'>
      <ChatHeader setOpenChat={setOpenChat} openChat={openChat} />
      {openChat && (
        <div className='pt-12'>
          <div className='overflow-scroll '>
            {chats && chats?.map((chat) => <ChatItem key={chat.id} {...chat} />)}
          </div>
        </div>
      )}
    </div>
  )
}

const ChatItem = ({ firstName, surname, image, date, online, message }) => {
  const elipsis = (message) => {
    if (message?.length > 10) {
      return message.substring(0, 30) + '...'
    } else {
      return message
    }
  }

  return (
    <div className='relative px-2 py-3 border-b cursor-pointer bg-primary '>
      <div className='flex items-center'>
        <div className='relative mr-3'>
          <img
            className='object-cover rounded-full w-[3.2rem] h-[3.2rem]'
            src={image.url}
            alt={firstName}
          />
          <div>
            {online ? (
              <div className='absolute w-4 h-4 bg-green-700 border-2 border-white rounded-full -right-1 top-8'></div>
            ) : (
              <div className='absolute flex items-center justify-center w-3.5 h-3.5 bg-green-700 rounded-full -right-1 top-8'>
                <p className='w-2 h-2 bg-white rounded-full '></p>
              </div>
            )}
          </div>
        </div>
        <div className=''>
          <span className='flex items-center space-x-2 text-sm'>
            <h1>{firstName}</h1>
            <h1>{surname}</h1>
          </span>
          <p className='text-xs text-gray-500'>
            {firstName} : {elipsis(message)}
          </p>
        </div>
      </div>
      <p className='absolute right-0 text-xs text-right text-gray-500 top-2'>May 12 </p>
    </div>
  )
}

const ChatHeader = ({ setOpenChat, openChat }) => {
  return (
    <div
      onClick={() => setOpenChat((openChat) => !openChat)}
      className={`${
        !openChat && 'bottom-0'
      } fixed z-10 border-b cursor-pointer rounded-t-md w-72 bg-primary`}>
      <div className='flex justify-between p-2 focus:outline-none'>
        <div className='flex items-center space-x-2'>
          <div className='relative'>
            <img className='object-cover w-8 h-8 rounded-full' src='images/my-avatar.jpeg' alt='' />
            <div className='absolute w-4 h-4 bg-green-700 border-2 border-white rounded-full -right-1 top-4'></div>
          </div>
          <h1 className='text-sm font-semibold'>Messaging</h1>
        </div>
        <div className='flex items-center space-x-4 text-gray-500'>
          <FiEdit size={15} />
          <HiDotsHorizontal />
          <BsChevronCompactDown />
        </div>
      </div>
    </div>
  )
}

export default Chat
