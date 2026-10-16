export function SectionHeader({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="mb-16 text-center">
      <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-4">
        {title}
      </h2>
      <p className="text-lg sm:text-xl text-silver-400 max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  )
}
