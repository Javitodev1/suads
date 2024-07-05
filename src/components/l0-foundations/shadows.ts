enum ShadowKeys {
  card,
}

type Shadow = keyof typeof ShadowKeys

const Shadows: Record<ShadowKeys, string> = {
  [ShadowKeys.card]: 'shadow-lg shadow-neutral-dark/20',
}

function getShadow(shadow: Shadow) {
  return Shadows[ShadowKeys[shadow]]
}

export { getShadow }
export type { Shadow }
