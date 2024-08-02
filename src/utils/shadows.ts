enum ShadowKeys {
  card,
}

export type Shadow = keyof typeof ShadowKeys

const Shadows: Record<ShadowKeys, string> = {
  [ShadowKeys.card]: 'shadow-lg shadow-neutral-dark/20',
}

export function getShadow(shadow: Shadow) {
  return Shadows[ShadowKeys[shadow]]
}
