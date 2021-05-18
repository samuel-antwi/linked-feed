import { HiDotsHorizontal } from 'react-icons/hi'

const Ads = () => {
  return (
    <div className='px-2 top-[65px] sticky py-2 pb-4 mt-2 border rounded-md bg-primary'>
      <span className='flex items-center justify-end mb-3 space-x-2'>
        <h1 className='text-sm text-gray-600'>Ad</h1>
        <HiDotsHorizontal />
      </span>
      <div className='flex flex-col items-center justify-center space-y-3 text-xs text-gray-600'>
        <p>Get the latest jobs and industry news</p>
        <div className='flex space-x-4'>
          <img
            className='object-cover w-16 h-16 rounded-full'
            src='/images/my-avatar.jpeg'
            alt='Samuel'
          />
          <img className='object-cover w-16 h-16' src='/images/ads.jpeg' alt='Company Logo' />
        </div>
        <p className='text-sm text-center'>
          💥 Samuel, explore relevant opportunities with{' '}
          <span className='font-semibold'>Appian Corporation</span>
        </p>
        <button className='border-2 border-[#0E65C2] py-1 px-6 rounded-full text-[#0E65C2] font-semibold text-base'>
          Follow
        </button>
      </div>
    </div>
  )
}

export default Ads
