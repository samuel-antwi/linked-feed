import Authur from './Authur'
import { BsThreeDots } from 'react-icons/bs'
import Markdown from 'react-markdown'
import { useState } from 'react'
import LinesEllipsis from 'react-lines-ellipsis'
import PostHandlers from './PostHandlers'

const PostItem = ({ authur, description, image, likes }) => {
  const [showCaption, setShowCaption] = useState(false)

  return (
    <div className='mb-4 border md:rounded-lg bg-primary'>
      <div className='p-4'>
        <div className='flex justify-between mb-3'>
          <div>
            {likes.map((like, index) => (
              <p className='text-sm ' key={index}>
                {like.name} <span className='text-xs text-gray-600'>likes this</span>
              </p>
            ))}
          </div>
          <div className='p-1 transition duration-300 rounded-full hover:bg-gray-200'>
            <BsThreeDots size={20} className='cursor-pointer ' />
          </div>
        </div>
        <hr />
        <Authur {...authur} />
        <div className='text-sm'>
          {showCaption ? (
            <Markdown>{description.markdown}</Markdown>
          ) : (
            <div className='relative'>
              <LinesEllipsis text={description.markdown} maxLine='3' basedOn='letters' />
              <button
                className='absolute bottom-0 text-gray-500 bg-white right-1 hover:underline hover:text-blue-500 focus:outline-none'
                onClick={() => setShowCaption(true)}>
                ...see more
              </button>
            </div>
          )}
        </div>
      </div>
      {image && <img src={image.url} alt='Post media' />}
      <div className='px-4 pt-5'>
        <hr className='' />
        <PostHandlers />
      </div>
    </div>
  )
}

export default PostItem
