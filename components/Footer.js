import Link from 'next/link'
import { HiUsers } from 'react-icons/hi'
import { ImHome3 } from 'react-icons/im'
import { FaBell } from 'react-icons/fa'
import { BsBriefcaseFill } from 'react-icons/bs'
import { MdAddBox } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='sm:hidden '>
      <div className='fixed bottom-0 flex items-center justify-between w-full px-5 py-2 text-gray-500 bg-primary'>
        <Link href='/'>
          <a className='flex flex-col items-center justify-center'>
            <ImHome3 className='text-xl' />
            <span className='text-xs'>Home</span>
          </a>
        </Link>
        <Link href='/'>
          <a className='flex flex-col items-center justify-center'>
            <HiUsers className='text-xl' />
            <span className='text-xs'>My Network</span>
          </a>
        </Link>
        <Link href='/'>
          <a className='flex flex-col items-center justify-center'>
            <MdAddBox className='text-xl' />
            <span className='text-xs'>Post</span>
          </a>
        </Link>
        <Link href='/'>
          <a className='flex flex-col items-center justify-center'>
            <FaBell className='text-xl' />
            <span className='text-xs'>Nottifications</span>
          </a>
        </Link>
        <Link href='/'>
          <a className='flex flex-col items-center justify-center'>
            <BsBriefcaseFill className='text-xl' />
            <span className='text-xs'>Jobs</span>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Footer
