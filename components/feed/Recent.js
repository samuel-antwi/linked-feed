import { HiUsers } from 'react-icons/hi'
import { FaHashtag } from 'react-icons/fa'
import { GiVideoConference } from 'react-icons/gi'

const Recent = () => {
  return (
    <div className='sticky pt-4 mt-2 text-gray-600 border rounded-md top-[65px] bg-primary'>
      <div className='mb-5'>
        <h1 className='px-4 mb-3 text-xs'>Recent</h1>
        <LinkItems icon={<HiUsers />} name='Premium Career Group' />
        <LinkItems icon={<HiUsers />} name='Javascript developers.com' />
        <LinkItems icon={<FaHashtag />} name='Freelancers.com' />
        <LinkItems icon={<GiVideoConference />} name='Antwistudioweb Conference' />
        <LinkItems icon={<HiUsers />} name='FrontEnd developers Group' />
      </div>
      <div className='mb-5'>
        <h1 className='px-4 font-semibold mb-3 text-[#0E65C2] text-xs'>Groups</h1>
        <LinkItems icon={<HiUsers />} name='Premium Career Group' />
        <LinkItems icon={<HiUsers />} name='Javascript developers.com' />
        <LinkItems icon={<HiUsers />} name='Freelancers.com' />
        <LinkItems icon={<HiUsers />} name='Antwistudioweb Conference' />
        <LinkItems icon={<HiUsers />} name='FrontEnd developers Group' />
      </div>
      <div className='mb-5'>
        <h1 className='px-4 font-semibold mb-3 text-[#0E65C2] text-xs'>Events</h1>
        <LinkItems icon={<FaHashtag />} name='Premium Career Group' />
        <LinkItems icon={<FaHashtag />} name='Javascript developers.com' />
        <LinkItems icon={<FaHashtag />} name='Freelancers.com' />
        <LinkItems icon={<FaHashtag />} name='Antwistudioweb Conference' />
        <LinkItems icon={<FaHashtag />} name='FrontEnd developers Group' />
      </div>
      <hr />
      <div className='flex items-center justify-center py-2 text-xs hover:bg-gray-300 rounded-b-md'>
        <button className='font-bold'>Discover more</button>
      </div>
    </div>
  )
}

const LinkItems = ({ name, icon }) => {
  return (
    <button className='block w-full py-1 hover:bg-gray-300'>
      <div className='flex items-center px-4 space-x-3'>
        {icon}
        <p className='text-xs font-semibold text-gray-500'>{name}</p>
      </div>
    </button>
  )
}

export default Recent
