import Ads from '../Ads'
import Chat from '../Chat'
import SuggestedFeed from '../SuggestedFeed'
import Me from './Me'
import MostViewedcourse from './MostViewedcourse'
import NewPost from './NewPost'
import News from './News'
import Posts from './Posts'
import Recent from './Recent'
import Sort from './Sort'

const Feed = ({ posts }) => {
  return (
    <div className='mb-40 md:space-x-6 md:flex '>
      <div className='hidden w-60 lg:block'>
        <Me />
        <Recent />
      </div>
      <div className='flex-1 '>
        <NewPost />
        <Sort />
        <Posts posts={posts} />
      </div>
      <div className='hidden w-[300px] lg:block'>
        <News />
        <MostViewedcourse />
        <Ads />
        <SuggestedFeed />
      </div>
    </div>
  )
}

export default Feed
// import MostViewedcourse from './MostViewedcourse'
// import NewPost from './NewPost'
// import News from './News'
// import Posts from './Posts'
// import Sort from './Sort'

// const Feed = ({ posts }) => {
//   return (
//     <div className='relative grid-cols-12 gap-5 mb-40 md:grid '>
//       <div className='hidden col-span-3 bg-primary md:block'></div>
//       <div className='col-span-6 '>
//         <NewPost />
//         <Sort />
//         <Posts posts={posts} />
//       </div>
//       <div className='absolute right-0 hidden col-span-3 md:block'>
//         <News />
//         <MostViewedcourse />
//       </div>
//     </div>
//   )
// }

// export default Feed
