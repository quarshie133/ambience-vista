// ── Fade In Up ──────────────────────────────────────────────────────────────
export const fadeInUp = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

// ── Fade In (pure opacity) ──────────────────────────────────────────────────
export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

// ── Blur Up (modern image/card reveal) ─────────────────────────────────────
export const blurUp = {
  hidden:  { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

// ── Fade In from Left ───────────────────────────────────────────────────────
export const fadeInLeft = {
  hidden:  { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

// ── Fade In from Right ──────────────────────────────────────────────────────
export const fadeInRight = {
  hidden:  { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

// ── Scale In (cards, badges) ────────────────────────────────────────────────
export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

// ── Clip-path wipe from left (stat numbers, section labels) ─────────────────
export const clipReveal = {
  hidden:  { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
  visible: { clipPath: 'inset(0 0% 0 0)', opacity: 1, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

// ── Slide Up Spring (bouncy, for tags / chips) ──────────────────────────────
export const slideUpSpring = {
  hidden:  { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 18 } },
};

// ── Stagger Container ───────────────────────────────────────────────────────
export const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

// ── Fast Stagger (tight grids) ──────────────────────────────────────────────
export const fastStagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

// ── Draw Line (horizontal rule / accent line grows in) ──────────────────────
export const drawLine = {
  hidden:  { scaleX: 0, originX: 0 },
  visible: { scaleX: 1, originX: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// ── Default viewport settings ───────────────────────────────────────────────
export const defaultViewport = { once: true, margin: '-70px' };
