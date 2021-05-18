import { BsImage } from 'react-icons/bs'
import { ImPlay } from 'react-icons/im'
import { MdEvent } from 'react-icons/md'
import { RiArticleLine } from 'react-icons/ri'
import xcls from 'xcls'
const NewPost = () => {
  return (
    <div className='hidden p-4 border rounded-lg md:block bg-primary'>
      <div>
        <div className='flex items-center mb-1'>
          <img className='w-12 h-12 mr-2 rounded-full' src='/images/my-avatar.jpeg' alt='Aatar' />
          <input
            placeholder='Start a post'
            className={xcls(
              'w-full px-4 py-2 font-medium border',
              'border-gray-300 rounded-full focus:outline-none'
            )}
            type='text'
          />
        </div>
        <div className='flex items-center justify-between'>
          <PostItem label='Photo' icon={<BsImage className='text-[#70B4F8]' size={20} />} />
          <PostItem label='Video' icon={<ImPlay className='text-[#7FC05E]' size={22} />} />
          <PostItem label='Event' icon={<MdEvent className='text-[#E7A33E]' size={22} />} />
          <PostItem
            label='Write article'
            icon={<RiArticleLine className='text-[#F5987D]' size={22} />}
          />
        </div>
      </div>
    </div>
  )
}

const PostItem = ({ label, icon }) => {
  return (
    <div className='flex transition duration-200 items-center cursor-pointer px-2 py-4 hover:bg-[#dddddd]'>
      <div>{icon}</div>
      <span className='ml-2 text-sm font-semibold text-gray-600'>{label}</span>
    </div>
  )
}

export default NewPost
