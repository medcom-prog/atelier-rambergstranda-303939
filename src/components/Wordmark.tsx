type Variant = 'light' | 'dark'

export function Wordmark({ variant = 'light', className = '' }: { variant?: Variant; className?: string }) {
  return (
    <a href="#top" className={`inline-flex items-end group ${className}`} aria-label="Atelier Rambergstranda — hjem">
      <img
        src={variant === 'light' ? '/wordmark.svg' : '/wordmark-dark.svg'}
        alt="atelier rambergstranda"
        className="h-7 md:h-8 w-auto"
        width={749}
        height={60}
      />
    </a>
  )
}
