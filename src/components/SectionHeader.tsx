export function SectionHeader({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ivory mb-4 leading-[1.05]">
        {title}
      </h2>
      <p className="text-lg text-sage max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  )
}
