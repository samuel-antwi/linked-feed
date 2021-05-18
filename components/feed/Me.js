import { SaveIcon } from '../../icon'

const Me = () => {
  return (
    <div className='border rounded-lg bg-primary'>
      <div className='relative'>
        <img
          className='w-full h-14 border-t-4 rounded-t-md border-[#F8C77D]'
          src='/images/me-bg.png'
          alt='Samuel'
        />
        <p className='absolute text-xs font-medium tracking-widest text-gray-300 uppercase left-1 top-2'>
          premium
        </p>
      </div>
      <div className='flex items-center justify-center -mt-8 '>
        <img
          className='z-10 w-[4.5rem] h-[4.5rem] border-2 border-white rounded-full'
          src='/images/my-avatar.jpeg'
          alt='Me'
        />
      </div>
      <div className='flex flex-col items-center justify-center px-4 py-5'>
        <h1 className='mb-1 font-semibold tracking-wide'> 💥 Samuel Antwi</h1>
        <Skills />
      </div>
      <hr className='h-[0.3px] bg-gray-300' />
      <div className='px-4 py-4 '>
        <div className='flex justify-between mb-2 text-xs font-medium cursor-pointer hover:bg-gray-300'>
          <p className='text-gray-600'>Who viewed your profile</p>
          <p className='text-blue-600'>224</p>
        </div>
        <div className='flex justify-between text-xs font-medium cursor-pointer hover:bg-gray-300'>
          <p className='text-gray-600'>Viewed of your post</p>
          <p className='text-blue-600'>3624</p>
        </div>
      </div>
      <hr className='h-[0.3px] bg-gray-300' />
      <div className='py-4 cursor-pointer hover:bg-gray-200'>
        <div className='flex items-center px-4 space-x-2 text-xs'>
          <div className='h-3.5 w-3.5 rounded bg-[#E7A33E]'></div>
          <p className='font-semibold'>See all Premium features</p>
        </div>
      </div>
      <hr className='h-[0.3px] bg-gray-300' />
      <div className='py-4 cursor-pointer hover:bg-gray-200'>
        <div className='flex items-center px-4 space-x-2 text-xs'>
          <SaveIcon />
          <p className='font-semibold'>My items</p>
        </div>
      </div>
    </div>
  )
}

const Skills = () => {
  return (
    <div>
      <p className='text-xs text-center text-gray-500'>
        Front End Developer | React 🧡 | Next.js 🧡 | JavaScript | Responsive Web design | HTML5 |
        CSS3 | Firebase | Strapi | Graphcms | Git | 🇬🇧 Veteran
      </p>
    </div>
  )
}

export default Me
