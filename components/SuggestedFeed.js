import { BsInfoSquareFill } from 'react-icons/bs'
import { FiPlus } from 'react-icons/fi'

const SuggestedFeed = () => {
  return (
    <div className='sticky top-[325px] mt-2 border rounded-md bg-primary'>
      <div className='flex items-center justify-between px-3 mb-3'>
        <h1 className='font-semibold text-gray-800'>Add to your feed</h1>
        <BsInfoSquareFill className='text-gray-500' size={12} />
      </div>
      <div className='flex px-3 mb-4 '>
        <img
          className='object-cover rounded-full w-14 h-14'
          src='/images/suggested-01.jpeg'
          alt='Page'
        />
        <div className='ml-2'>
          <p className='font-medium text-black'>Debby Cute</p>
          <p className='text-sm text-gray-500'>
            graphic or web designs. The passage is attributed.
          </p>
          <button className='flex items-center px-4 py-1 mt-2 font-semibold text-gray-600 border border-gray-500 rounded-full '>
            <FiPlus size={20} />
            <p>Follow</p>
          </button>
        </div>
      </div>
      <div className='flex px-3 mb-4 '>
        <img
          className='object-cover rounded-full w-14 h-14'
          src='/images/suggested.jpeg'
          alt='Page'
        />
        <div className='ml-2'>
          <p className='font-medium text-black'>We love to code</p>
          <p className='text-sm text-gray-500'>
            graphic or web designs. The passage is attributed.
          </p>
          <button className='flex items-center px-4 py-1 mt-2 font-semibold text-gray-600 border border-gray-500 rounded-full '>
            <FiPlus size={20} />
            <p>Follow</p>
          </button>
        </div>
      </div>
      <div className='flex px-3 mb-4 '>
        <img
          className='object-cover rounded-full w-14 h-14'
          src='/images/tailwind.jpeg'
          alt='Page'
        />
        <div className='ml-2'>
          <p className='font-medium text-black'>Coding therapy</p>
          <p className='text-sm text-gray-500'>We build amazing experience with code</p>
          <button className='flex items-center px-4 py-1 mt-2 font-semibold text-gray-600 border border-gray-500 rounded-full '>
            <FiPlus size={20} />
            <p>Follow</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SuggestedFeed
