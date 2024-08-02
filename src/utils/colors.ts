enum Colors {
  neutral_dark,
  neutral_white,
  neutral_dark_less,
  neutral_white_less,
  accent_title,
  accent_cta,
}

const TextColors = {
  [Colors.neutral_dark]: 'text-neutral-dark',
  [Colors.neutral_white]: 'text-neutral-white',
  [Colors.neutral_dark_less]: 'text-neutral-dark-less',
  [Colors.neutral_white_less]: 'text-neutral-white-less',
  [Colors.accent_title]: 'text-accent-title',
  [Colors.accent_cta]: 'text-accent-cta',
}

const BorderColors = {
  [Colors.neutral_dark]: 'border-neutral-dark',
  [Colors.neutral_white]: 'border-neutral-white',
  [Colors.neutral_dark_less]: 'border-neutral-dark-less',
  [Colors.neutral_white_less]: 'border-neutral-white-less',
  [Colors.accent_title]: 'border-accent-title',
  [Colors.accent_cta]: 'border-accent-cta',
}

export type Color = keyof typeof Colors

export function getTextColor(color: Color) {
  return TextColors[Colors[color]]
}

export function getBorderColor(color: Color) {
  return BorderColors[Colors[color]]
}