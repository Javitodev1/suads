enum Colors {
  neutral_dark,
  neutral_white,
  neutral_dark_less,
  neutral_white_less,
  accent_title,
  accent_cta,
}

const TextColors: Record<Colors, string> = {
  [Colors.neutral_dark]: 'text-neutral-dark',
  [Colors.neutral_white]: 'text-neutral-white',
  [Colors.neutral_dark_less]: 'text-neutral-dark-less',
  [Colors.neutral_white_less]: 'text-neutral-white-less',
  [Colors.accent_title]: 'text-accent-title',
  [Colors.accent_cta]: 'text-accent-cta',
}

const BorderColors: Record<Colors, string> = {
  [Colors.neutral_dark]: 'border-neutral-dark',
  [Colors.neutral_white]: 'border-neutral-white',
  [Colors.neutral_dark_less]: 'border-neutral-dark-less',
  [Colors.neutral_white_less]: 'border-neutral-white-less',
  [Colors.accent_title]: 'border-accent-title',
  [Colors.accent_cta]: 'border-accent-cta',
}

const BackgroundColors: Record<Colors, string> = {
  [Colors.neutral_dark]: 'bg-neutral-dark',
  [Colors.neutral_white]: 'bg-neutral-white',
  [Colors.neutral_dark_less]: 'bg-neutral-dark-less',
  [Colors.neutral_white_less]: 'bg-neutral-white-less',
  [Colors.accent_title]: 'bg-accent-title',
  [Colors.accent_cta]: 'bg-accent-cta',
}

export type Color = keyof typeof Colors

export function getTextColor(color: Color) {
  return TextColors[Colors[color]]
}

export function getBorderColor(color: Color) {
  return BorderColors[Colors[color]]
}

export function getBackgroundColor(color: Color) {
  return BackgroundColors[Colors[color]]
}