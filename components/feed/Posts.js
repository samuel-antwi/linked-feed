import PostItem from './PostItem'

const Post = ({ posts }) => {
  return <div>{posts && posts.map((post) => <PostItem key={post.id} {...post} />)}</div>
}

export default Post
