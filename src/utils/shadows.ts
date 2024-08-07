enum ShadowKeys {
  card,
}

export type Shadow = keyof typeof ShadowKeys

const Shadows: Record<ShadowKeys, string> = {
  [ShadowKeys.card]: 'shadow-sm shadow-neutral-dark/40',
}

export function getShadow(shadow: Shadow) {
  return Shadows[ShadowKeys[shadow]]
}
