interface HeroSectionProps {
  title: string
  subtitle?: string
  backgroundImage: string
  ctaText?: string
  ctaLink?: string
}

export function HeroSection({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink,
}: HeroSectionProps) {
  return (
    <div
      className="relative h-96 md:h-[500px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
      }}
    >
      <div className="text-center text-white px-4">
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-2xl mb-8 text-blue-100 text-pretty">
            {subtitle}
          </p>
        )}
        {ctaText && ctaLink && (
          <a
            href={ctaLink}
            className="inline-block bg-secondary hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            {ctaText}
          </a>
        )}
      </div>
    </div>
  )
}
