/** Stamp-like entrance: slight overshoot then settle */
export const stampSpring = {
  type: "spring" as const,
  stiffness: 420,
  damping: 22,
  mass: 0.85,
};

export const stampSpringSoft = {
  type: "spring" as const,
  stiffness: 320,
  damping: 24,
  mass: 0.9,
};
