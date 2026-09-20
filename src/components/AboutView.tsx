import ProfileCard from './ProfileCard'
import ContributionGraph from './ContributionGraph'
import { profile } from '../data/profile'

function AboutView() {
  return (
    <article>
      <h1 className="text-2xl text-gray-900">关于我</h1>
      <div className="mt-6">
        <ProfileCard {...profile} plain />
      </div>
      <div className="mt-6 flex justify-center">
        <a
          href={`https://github.com/${profile.github}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
        >
          <svg className="size-[18px]" aria-hidden="true">
            <use href="/icons.svg#github-icon" />
          </svg>
          github.com/{profile.github}
        </a>
      </div>
      <div className="mt-8">
        <ContributionGraph />
      </div>
    </article>
  )
}

export default AboutView
