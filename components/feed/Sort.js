import { IoMdArrowDropdown } from 'react-icons/io'

const Sort = () => {
  return (
    <div className='hidden md:block'>
      <div className='flex items-center justify-between py-1'>
        <hr className='flex-1 h-[1.4px] mr-2 bg-gray-400' />
        <div className='flex items-center space-y-1'>
          <p className='mr-1 text-sm text-gray-600'>Sorted by: </p>
          <p className='text-sm'>Top </p>
          <IoMdArrowDropdown size={20} />
        </div>
      </div>
    </div>
  )
}

export default Sort
