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
      <div className="mt-8">
        <ContributionGraph />
      </div>
    </article>
  )
}

export default AboutView
