import Chat from '../components/Chat'
import Feed from '../components/feed/Feed'
import Shadow from '../components/feed/Shadow'
import NewNottification from '../components/NewNottification'
import client from '../graphql/client'
import { GET_POSTS } from '../graphql/queries'

export default function Home({ posts }) {
  return (
    <div className='max-w-6xl mx-auto'>
      <Shadow />
      <Feed posts={posts} />
      <Chat />
      <NewNottification />
    </div>
  )
}

export const getStaticProps = async () => {
  const { posts } = await client.request(GET_POSTS)
  return {
    props: {
      posts,
    },
  }
}
