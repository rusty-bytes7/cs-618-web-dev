import { PostList } from './components/PostList.jsx'
import { CreatePost } from './components/CreatePost.jsx'
import { PostFilter } from './components/PostFilter.jsx'
import { PostSorting } from './components/PostSorting.jsx'

export function Blog() {
  const posts = [
    {
      id: 1,
      author: 'John Doe',
      content: 'Hello World!',
      createdAt: '2023-01-01',
      updatedAt: '2023-01-02',
    },
    {
      id: 2,
      author: 'Jane Smith',
      content: 'React is awesome!',
      createdAt: '2023-01-03',
      updatedAt: '2023-01-04',
    },
  ]

  return (
    <div style={{ padding: 8 }}>
      <CreatePost />
      <br />
      <hr />
      Filter by:
      <PostFilter field='author' />
      <br />
      <PostSorting fields={['createdAt', 'updatedAt']} />
      <hr />
      <PostList posts={posts} />
    </div>
  )
}
