import { useEffect, useState } from 'react'
import { BsInfoSquareFill, BsChevronDown } from 'react-icons/bs'
import { IoChevronDown, IoChevronUp } from 'react-icons/io5'
import { news } from '../../data'

const News = () => {
  const [posts, setPosts] = useState([])
  const [toggleButton, setToggleButton] = useState(false)

  const readMoreNews = () => {
    setPosts(news.slice(0, 10))
    setToggleButton((button) => !button)
  }
  const readLessNews = () => {
    setPosts(news.slice(0, 4))
    setToggleButton((button) => !button)
  }

  useEffect(() => {
    setPosts(news.slice(0, 4))
  }, [])

  return (
    <div className='py-3 mb-2 border border-gray-300 rounded-md bg-primary '>
      <div className='flex items-center justify-between px-3 mb-3'>
        <h1 className='font-semibold'>LinkedIn News</h1>
        <BsInfoSquareFill className='text-gray-500' size={12} />
      </div>
      <ul className='text-sm font-medium'>
        {posts.map((post, index) => (
          <li
            key={index}
            className='px-2 mb-3 list-disc list-inside cursor-pointer hover:bg-gray-200 '>
            <span>{post.title}</span>
            <span className='block ml-5 text-xs text-gray-500'>{post.date}</span>
          </li>
        ))}
      </ul>
      <div>
        {toggleButton ? (
          <button
            onClick={readLessNews}
            className='flex items-center px-3 py-1 mx-5 space-x-1 text-sm font-semibold text-gray-600 hover:bg-gray-300 focus:outline-none'>
            <span>Show Less</span>
            <IoChevronUp size={20} />
          </button>
        ) : (
          <button
            onClick={readMoreNews}
            className='flex items-center px-3 py-1 mx-5 space-x-1 text-sm font-semibold text-gray-600 hover:bg-gray-300 focus:outline-none'>
            <span>Show More</span>
            <IoChevronDown size={20} />
          </button>
        )}
      </div>
    </div>
  )
}

export default News
