import { RiSendPlaneFill } from 'react-icons/ri'
import { BsArrow90DegRight } from 'react-icons/bs'
import { BiLike, BiCommentDetail } from 'react-icons/bi'

const PostHandlers = () => {
  return (
    <div className='flex justify-between py-5 text-gray-500 md:space-x-4 md:justify-start '>
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
      <div className='hidden md:block'>
        <button className='flex items-center px-2 py-3 space-x-2 font-medium transition duration-200 rounded-md focus:outline-none hover:bg-gray-200'>
          <RiSendPlaneFill size={23} />
          <p>Send</p>
        </button>
      </div>
    </div>
  )
}

export default PostHandlers
