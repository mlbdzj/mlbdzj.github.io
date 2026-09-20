import { useState } from 'react'
import ProfileCard from './components/ProfileCard'
import PostList from './components/PostList'
import PostContent from './components/PostContent'
import AboutView from './components/AboutView'
import { posts } from './data/posts'
import { profile } from './data/profile'

function App() {
  const [view, setView] = useState<'post' | 'about'>('post')
  const [activeId, setActiveId] = useState(posts[0]?.id ?? '')
  const activePost = posts.find((post) => post.id === activeId) ?? posts[0]

  function selectPost(id: string) {
    setActiveId(id)
    setView('post')
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto flex max-w-[1100px] items-start gap-6 max-md:flex-col">
        <aside className="sticky top-6 flex w-[260px] shrink-0 flex-col gap-5 max-md:static max-md:w-full">
          <ProfileCard {...profile} onClick={() => setView('about')} />
          <PostList
            posts={posts}
            activeId={view === 'post' ? activeId : ''}
            onSelect={selectPost}
          />
        </aside>

        <main className="min-w-0 flex-1 rounded-2xl bg-white p-8 shadow-lg max-md:w-full">
          {view === 'about' ? (
            <AboutView />
          ) : activePost ? (
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
