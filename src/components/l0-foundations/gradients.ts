enum GradientKeys {
  transparent,
  light,
  dark,
  accent_1,
}

const Gradients: Record<GradientKeys, string> = {
  [GradientKeys.transparent]: '',
  [GradientKeys.dark]: 'bg-gradient-to-br from-gradient-card-dark to-neutral-dark',
  [GradientKeys.light]: 'bg-gradient-to-br from-neutral-white to-gradient-card-light',
  [GradientKeys.accent_1]: 'bg-gradient-to-r from-tangerine to-tangerine-400',
}

type Gradient = keyof typeof GradientKeys

function getGradient(gradient: Gradient) {
  return Gradients[GradientKeys[gradient]]
}

export { getGradient }
export type { Gradient }
