import type { Post } from '../data/posts'

interface PostListProps {
  posts: Post[]
  activeId: string
  onSelect: (id: string) => void
}

function PostList({ posts, activeId, onSelect }: PostListProps) {
  return (
    <nav className="rounded-2xl bg-white p-5 shadow-lg">
      <h2 className="mb-3 text-base text-gray-900">文章目录</h2>
      <ul className="flex flex-col gap-1">
        {posts.map((post) => (
          <li key={post.id}>
            <button
              type="button"
              className={
                post.id === activeId
                  ? 'w-full rounded-lg bg-indigo-50 px-2.5 py-2 text-left text-sm font-semibold text-indigo-600'
                  : 'w-full rounded-lg px-2.5 py-2 text-left text-sm text-gray-700 hover:bg-gray-100'
              }
              onClick={() => onSelect(post.id)}
            >
              {post.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default PostList
