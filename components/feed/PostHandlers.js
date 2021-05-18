import { RiSendPlaneFill } from 'react-icons/ri'
import { BsArrow90DegRight } from 'react-icons/bs'
import { BiLike, BiCommentDetail } from 'react-icons/bi'

const PostHandlers = () => {
  return (
    <div className='flex py-5 space-x-4 text-gray-500 '>
      <button className='flex items-center px-2 py-3 space-x-2 font-medium transition duration-200 rounded-md focus:outline-none hover:bg-gray-200'>
        <BiLike size={23} />
        <p>Like</p>
      </button>
      <button className='flex items-center px-2 py-3 space-x-2 font-medium transition duration-200 rounded-md focus:outline-none hover:bg-gray-200'>
        <BiCommentDetail size={23} />
        <p>Comment</p>
      </button>
      <button className='flex items-center px-2 py-3 space-x-2 font-medium transition duration-200 rounded-md focus:outline-none hover:bg-gray-200'>
        <BsArrow90DegRight size={23} />
        <p>Share</p>
      </button>
      <button className='flex items-center px-2 py-3 space-x-2 font-medium transition duration-200 rounded-md focus:outline-none hover:bg-gray-200'>
        <RiSendPlaneFill size={23} />
        <p>Send</p>
      </button>
    </div>
  )
}

export default PostHandlers
