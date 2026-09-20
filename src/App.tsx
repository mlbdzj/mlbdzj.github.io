import { useState } from 'react'
import ProfileCard from './components/ProfileCard'
import PostList from './components/PostList'
import PostContent from './components/PostContent'
import { posts } from './data/posts'

function App() {
  const [activeId, setActiveId] = useState(posts[0]?.id ?? '')
  const activePost = posts.find((post) => post.id === activeId) ?? posts[0]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto flex max-w-[1100px] items-start gap-6 max-md:flex-col">
        <aside className="sticky top-6 flex w-[260px] shrink-0 flex-col gap-5 max-md:static max-md:w-full">
          <ProfileCard
            avatar="/avatar.webp"
            name="你的名字"
            bio="这是一段个人简介"
          />
          <PostList posts={posts} activeId={activeId} onSelect={setActiveId} />
        </aside>

        <main className="min-w-0 flex-1 rounded-2xl bg-white p-8 shadow-lg max-md:w-full">
          {activePost ? (
            <PostContent post={activePost} />
          ) : (
            <p className="text-gray-400">暂无文章</p>
          )}
        </main>
      </div>
    </div>
  )
}

export default App
