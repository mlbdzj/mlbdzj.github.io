interface ProfileCardProps {
  avatar: string
  name: string
  bio?: string
}

function ProfileCard({ avatar, name, bio }: ProfileCardProps) {
  return (
    <div className="flex w-full flex-col items-center gap-3 rounded-2xl bg-white px-6 py-8 shadow-lg">
      <div className="size-[120px] rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 p-1">
        <img
          src={avatar}
          alt={name}
          className="block size-full rounded-full bg-gray-100 object-cover"
        />
      </div>
      <h2 className="text-xl text-gray-900">{name}</h2>
      {bio && <p className="text-center text-sm text-gray-500">{bio}</p>}
    </div>
  )
}

export default ProfileCard
