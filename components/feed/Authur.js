const Authur = ({ avatar, profession, name, id, isOnline }) => {
  return (
    <div className='pt-3'>
      <div className='flex'>
        <div className='relative'>
          <img className='object-cover w-12 h-12 mr-2 rounded-full' src={avatar.url} alt={name} />
          {isOnline ? <IsOnline /> : <IsOffline />}
        </div>
        <div>
          <p>{name}</p>
          <div className='flex flex-wrap space-x-2 capitalize'>
            {profession.map((pro, index) => (
              <p className='text-xs text-gray-500' key={index}>
                {pro}
              </p>
            ))}
          </div>
          <p className='text-xs text-gray-600'>2h</p>
        </div>
      </div>
    </div>
  )
}

export default Authur

export const IsOnline = () => {
  return (
    <div className='absolute w-4 h-4 bg-green-700 border-2 border-white rounded-full right-2 top-8'></div>
  )
}

export const IsOffline = () => {
  return (
    <div className='absolute flex items-center justify-center w-3.5 h-3.5 bg-green-700 rounded-full right-2 top-8'>
      <p className='w-2 h-2 bg-white rounded-full '></p>
    </div>
  )
}
