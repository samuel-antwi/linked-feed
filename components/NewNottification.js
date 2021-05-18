import { useState, useEffect } from 'react'
import { HiArrowUp } from 'react-icons/hi'

const NewNottification = () => {
  const [detectScroll, setDetectScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 200 ? setDetectScroll(true) : setDetectScroll(false)
    })
    return detectScroll
  }, [detectScroll])

  return (
    <div className='hidden md:block'>
      {!detectScroll ? (
        <div className='absolute  top-[17rem] right-[50%]'>
          <div className='flex sticky top-[200px]  items-center rounded-full py-1 px-4 bg-[#0E65C2] text-white'>
            <HiArrowUp />
            <button className='ml-1.5 font-semibold'>New posts</button>
          </div>
        </div>
      ) : (
        <div className='fixed  top-16 right-[50%]'>
          <div className='flex sticky top-[200px]  items-center rounded-full py-1 px-4 bg-[#0E65C2] text-white'>
            <HiArrowUp />
            <button className='ml-1.5 font-semibold'>New posts</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default NewNottification
