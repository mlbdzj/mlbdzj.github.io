export interface Post {
  id: string
  title: string
  date: string
  content: string
}

const files = import.meta.glob('../posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function parseFrontmatter(raw: string) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw)
  const data: Record<string, string> = {}
  let content = raw
  if (match) {
    content = raw.slice(match[0].length)
    match[1].split(/\r?\n/).forEach((line) => {
      const index = line.indexOf(':')
      if (index === -1) return
      data[line.slice(0, index).trim()] = line.slice(index + 1).trim()
    })
  }
  return { data, content }
}

export const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const id = path.split('/').pop()!.replace(/\.md$/, '')
    const { data, content } = parseFrontmatter(raw)
    return {
      id,
      title: data.title ?? id,
      date: data.date ?? '',
      content,
    }
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1))
