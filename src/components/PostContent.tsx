import { marked } from 'marked'
import type { Post } from '../data/posts'

interface PostContentProps {
  post: Post
}

function PostContent({ post }: PostContentProps) {
  const html = marked.parse(post.content) as string

  return (
    <article>
      <h1 className="text-2xl text-gray-900">{post.title}</h1>
      {post.date && <p className="mt-2 mb-5 text-sm text-gray-400">{post.date}</p>}
      <div
        className="prose prose-gray max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  )
}

export default PostContent
