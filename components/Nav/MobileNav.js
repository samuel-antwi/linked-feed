import { FaSearch } from 'react-icons/fa'
import Link from 'next/link'
import { HiChatAlt } from 'react-icons/hi'
import { FiEdit } from 'react-icons/fi'

const MobileNav = () => {
  return (
    <div className='sm:hidden'>
      <div className='max-w-6xl px-5 py-2 mx-auto bg-primary'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <Link href='/'>
              <a>
                <img className='w-8 h-8 rounded-full' src='/images/my-avatar.jpeg' alt='' />
              </a>
            </Link>
            <div className='flex items-center   py-1.5 px-3 rounded bg-[#EEF3F7]'>
              <FaSearch size={14} />
              <input
                className='bg-[#EEF3F7] focus:outline-none'
                type='text'
                placeholder='Search '
              />
            </div>
          </div>
          <Link href='/'>
            <a>
              <HiChatAlt className='text-gray-500' size={26} />
            </a>
          </Link>
        </div>
      </div>
      <div className='container px-5 mt-5 '>
        <div className='flex items-center px-4 py-3 shadow bg-primary'>
          <FiEdit size={25} className='mr-3 text-gray-600' />
          <input
            className='w-full tracking-wide focus:outline-none '
            type='text'
            placeholder='Share your thoughts or photos'
          />
        </div>
      </div>
    </div>
  )
}

export default MobileNav
