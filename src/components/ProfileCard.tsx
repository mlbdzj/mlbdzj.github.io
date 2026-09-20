interface ProfileCardProps {
  avatar: string
  name: string
  bio?: string
  plain?: boolean
  onClick?: () => void
}

function ProfileCard({ avatar, name, bio, plain, onClick }: ProfileCardProps) {
  const avatarContent = (
    <div className="size-[120px] rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 p-1">
      <img
        src={avatar}
        alt={name}
        className="block size-full rounded-full bg-gray-100 object-cover"
      />
    </div>
  )

  return (
    <div
      className={`flex w-full flex-col items-center gap-3 ${
        plain ? '' : 'rounded-2xl bg-white px-6 py-8 shadow-lg'
      }`}
    >
      {onClick ? (
        <button
          type="button"
          onClick={onClick}
          title="关于我"
          className="cursor-pointer rounded-full transition-transform hover:scale-105"
        >
          {avatarContent}
        </button>
      ) : (
        avatarContent
      )}
      <h2 className="text-xl text-gray-900">{name}</h2>
      {bio && <p className="text-center text-sm text-gray-500">{bio}</p>}
    </div>
  )
}

export default ProfileCard
