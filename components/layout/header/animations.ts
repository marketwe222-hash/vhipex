import type { Variants } from "framer-motion";

export const headerVariants: Variants = {
  top: {
    backgroundColor: "rgba(0,0,0,0)",
    borderBottomColor: "rgba(255,255,255,0)",
  },
  scrolled: {
    backgroundColor: "var(--navbar-bg)",
    borderBottomColor: "var(--navbar-border)",
  },
};

export const navVisibilityVariants: Variants = {
  visible: { y: 0 },
  hidden: {
    y: "-100%",
    transition: { duration: 0.28, ease: "easeOut" },
  },
};

export const logoVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const navItemVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 + i * 0.04,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const dropdownVariants: Variants = {
  hidden: { opacity: 0, y: -10, scaleY: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    scaleY: 0.97,
    transition: { duration: 0.18, ease: "easeIn" },
  },
};

export const drawerVariants: Variants = {
  closed: { height: 0, opacity: 0 },
  open: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.38, ease: [0.4, 0, 0.2, 1] },
  },
};

export const drawerItemVariants: Variants = {
  closed: { opacity: 0, x: -12 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.04, duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.25 } },
};
