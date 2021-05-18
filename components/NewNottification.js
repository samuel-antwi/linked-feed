import { HiArrowUp } from 'react-icons/hi'

const NewNottification = () => {
  return (
    <div className='absolute  top-[17rem] right-[50%]'>
      <div className='flex sticky top-[200px]  items-center rounded-full py-1 px-4 bg-[#0E65C2] text-white'>
        <HiArrowUp />
        <button className='ml-1.5 font-semibold'>New posts</button>
      </div>
    </div>
  )
}

export default NewNottification
