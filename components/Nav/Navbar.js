import { FaLinkedin, FaSearch } from 'react-icons/fa'
import Link from 'next/link'
import { HiUsers, HiChatAlt } from 'react-icons/hi'
import { ImHome3 } from 'react-icons/im'
import { FaBell } from 'react-icons/fa'
import { BsBriefcaseFill } from 'react-icons/bs'
import { BsGrid3X3GapFill } from 'react-icons/bs'
import { CgPlayButtonR } from 'react-icons/cg'
import { TiArrowSortedDown } from 'react-icons/ti'
import { BsDot } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'

const Navbar = () => {
  return (
    <main className='sticky top-0 z-20 hidden px-8 shadow bg-primary sm:block'>
      <div className='flex items-center max-w-6xl mx-auto lg:justify-between'>
        <LeftNavItems />
        <RightNavItems />
      </div>
    </main>
  )
}

const LeftNavItems = () => {
  return (
    <div className='flex items-center space-x-2'>
      <Link href='/'>
        <a>
          <FaLinkedin size={40} className='text-[#0E65C2]' />
        </a>
      </Link>
      <div className='hidden lg:block'>
        <div className='flex items-center xl:w-80 w-60 space-x-3 py-1.5 px-3 rounded bg-[#EEF3F7]'>
          <FaSearch size={14} />
          <input
            className='bg-[#EEF3F7] w-full focus:outline-none'
            type='text'
            placeholder='Search '
          />
        </div>
      </div>
    </div>
  )
}

const RightNavItems = () => {
  return (
    <div className=''>
      <div className='flex items-center space-x-8 text-gray-500'>
        <div className='ml-6 lg:hidden'>
          <LinkItems lable='Search' href='/' icon={<FaSearch />} />
        </div>
        <LinkItems
          alert={<BsDot className='text-gray-100' />}
          home={true}
          lable='Home'
          href='/'
          icon={<ImHome3 />}
        />
        <LinkItems lable='My Network' href='/' icon={<HiUsers />} />
        <LinkItems lable='Job' href='/' icon={<BsBriefcaseFill />} />
        <LinkItems lable='Messaging' href='/' icon={<HiChatAlt />} />
        <LinkItems
          lable='Nottifications'
          nottification={true}
          alert='1'
          href='/'
          icon={<FaBell />}
        />
        <Link href='/'>
          <a className='flex flex-col items-center justify-center'>
            <img className='rounded-full w-7 h-7' src='/images/my-avatar.jpeg' alt='Me' />
            <div className='hidden lg:block'>
              <span className='flex items-center text-xs'>
                Me <TiArrowSortedDown size={20} />
              </span>
            </div>
          </a>
        </Link>
        <div className='border-r border-gray-200 h-14'></div>
        <LinkItems lable='Work' href='/' icon={<BsGrid3X3GapFill />} />
        <LinkItems lable='Learning' href='/' icon={<CgPlayButtonR />} />
      </div>
    </div>
  )
}

const LinkItems = ({ icon, lable, href, alert, nottification, home }) => {
  return (
    <Link href={href}>
      <a className='flex flex-col items-center justify-center '>
        <div className='relative text-2xl text-gray-600 hover:text-gray-900 '>
          {icon}
          {nottification && (
            <p className='absolute flex items-center justify-center w-4 h-4 text-sm text-gray-100 bg-red-700 rounded-full -right-1.5 -top-1'>
              {alert}
            </p>
          )}
          {home && (
            <p className='absolute flex items-center justify-center w-4 h-4 text-gray-100 bg-red-700 rounded-full -right-1.5 -top-1'>
              {alert}
            </p>
          )}
        </div>
        <span className='hidden text-xs lg:block'>{lable}</span>
      </a>
    </Link>
  )
}

export default Navbar
