import { BsInfoSquareFill } from 'react-icons/bs'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { popular_courses } from '../../data'

const MostViewedcourse = () => {
  return (
    <div className='py-3 border border-gray-300 rounded-md  bg-primary'>
      <div className='flex items-center justify-between px-3 mb-3'>
        <h1 className='font-semibold'>Today most viewed courses</h1>
        <BsInfoSquareFill className='text-gray-500' size={12} />
      </div>
      <ol className='text-sm font-medium'>
        {popular_courses.map((course, index) => (
          <li
            key={index}
            className='px-2 mb-3 list-decimal list-inside cursor-pointer hover:bg-gray-200 '>
            <span>{course.title}</span>
            <span className='block ml-5 text-xs text-gray-500'>{course.authur}</span>
          </li>
        ))}
      </ol>
      <div>
        <button className='flex items-center px-3 py-1 mx-2 space-x-1 text-sm font-semibold text-gray-600 hover:bg-gray-300 focus:outline-none'>
          <span>Show more on LinkedIn Learning</span>
          <HiArrowNarrowRight size={20} />
        </button>
      </div>
    </div>
  )
}

export default MostViewedcourse
