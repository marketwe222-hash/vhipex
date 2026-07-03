"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconLanguage, IconMenu2, IconX } from "@tabler/icons-react";
import { useTheme } from "@/context/ThemeContext";
import {
  backdropVariants,
  drawerItemVariants,
  drawerVariants,
  headerVariants,
  navVisibilityVariants,
} from "./header/animations";
import { DesktopNavLink } from "./header/DesktopNavLink";
import { Logo, PortalIcon, ThemeToggle, TopBar } from "./header/HeaderControls";
import { LANGUAGES, NAV_LINKS } from "./header/navigation";
import { MobileProgramsAccordion } from "./header/ProgramsDropdown";

export default function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrollTicking = useRef(false);

  const TOP_BAR_HEIGHT = 34;
  const NAV_BAR_HEIGHT = 68;
  const dropdownTopOffset = TOP_BAR_HEIGHT + NAV_BAR_HEIGHT;

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);

      if (!scrollTicking.current) {
        window.requestAnimationFrame(() => {
          const scrollingDown = currentY > lastScrollY.current;

          if (mobileOpen) {
            setHeaderVisible(true);
          } else if (scrollingDown && currentY > 80) {
            setHeaderVisible(false);
          } else {
            setHeaderVisible(true);
          }

          lastScrollY.current = currentY;
          scrollTicking.current = false;
        });

        scrollTicking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  useEffect(() => {
    const id = window.setTimeout(() => setMobileOpen(false), 0);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return (
    <>
      <motion.div
        className="fixed top-0 inset-x-0 z-50"
        variants={navVisibilityVariants}
        initial="visible"
        animate={isHeaderVisible ? "visible" : "hidden"}
      >
        <TopBar scrolled={scrolled} />

        <motion.header
          variants={headerVariants}
          animate={scrolled ? "scrolled" : "top"}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            borderBottom: "1px solid transparent",
            backdropFilter: scrolled ? "var(--navbar-blur)" : "none",
            WebkitBackdropFilter: scrolled ? "var(--navbar-blur)" : "none",
          }}
        >
          <div
            className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 2xl:px-10"
            style={{ height: `${NAV_BAR_HEIGHT}px`, maxWidth: "1280px" }}
          >
            <Logo />

            <nav className="hidden lg:flex items-center" style={{ gap: "2px" }}>
              {NAV_LINKS.map((link, i) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <DesktopNavLink
                    key={link.href}
                    link={link}
                    index={i}
                    isActive={isActive}
                    dropdownTopOffset={dropdownTopOffset}
                  />
                );
              })}
            </nav>

            <div className="flex items-center" style={{ gap: "8px" }}>
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              <PortalIcon />

              <motion.button
                className="flex lg:hidden items-center justify-center"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.93 }}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "10px",
                  border: "1px solid var(--glass-border)",
                  background: "var(--glass-bg-subtle)",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "var(--text-primary)",
                  flexShrink: 0,
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={mobileOpen ? "close" : "open"}
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: "flex" }}
                  >
                    {mobileOpen ? (
                      <IconX size={18} stroke={2} />
                    ) : (
                      <IconMenu2 size={18} stroke={2} />
                    )}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          <AnimatePresence initial={false}>
            {mobileOpen && (
              <motion.div
                variants={drawerVariants}
                initial="closed"
                animate="open"
                exit="closed"
                style={{
                  overflow: "hidden",
                  background: "var(--dropdown-bg)",
                  backdropFilter: "var(--navbar-blur)",
                  WebkitBackdropFilter: "var(--navbar-blur)",
                  borderTop: "1px solid var(--dropdown-border)",
                }}
              >
                <div style={{ padding: "10px 16px 18px" }}>
                  {NAV_LINKS.map((link, i) => {
                    if (link.dropdown) {
                      return (
                        <MobileProgramsAccordion
                          key={link.href}
                          sections={link.dropdown}
                          itemIndex={i}
                        />
                      );
                    }

                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href);
                    return (
                      <motion.div
                        key={link.href}
                        custom={i}
                        variants={drawerItemVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                      >
                        <Link
                          href={link.href}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            padding: "10px 13px",
                            borderRadius: "10px",
                            fontSize: "15px",
                            fontWeight: isActive ? 600 : 500,
                            textDecoration: "none",
                            color: isActive
                              ? "var(--accent-primary)"
                              : "var(--text-primary)",
                            background: isActive
                              ? "var(--glass-bg)"
                              : "transparent",
                            borderLeft: isActive
                              ? "3px solid var(--accent-primary)"
                              : "3px solid transparent",
                            transition: "background 0.15s, color 0.15s",
                            marginBottom: "2px",
                          }}
                        >
                          <span aria-hidden="true">{link.icon}</span>
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}

                  <motion.div
                    custom={NAV_LINKS.length}
                    variants={drawerItemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginTop: "10px",
                      padding: "10px 13px",
                      borderRadius: "10px",
                      background: "var(--glass-bg-subtle)",
                      border: "1px solid var(--glass-border)",
                    }}
                  >
                    <IconLanguage
                      size={15}
                      stroke={1.8}
                      style={{ color: "var(--text-muted)" }}
                    />
                    <span
                      style={{
                        fontSize: "13px",
                        color: "var(--text-muted)",
                        flex: 1,
                      }}
                    >
                      Language
                    </span>
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        style={{
                          padding: "4px 14px",
                          borderRadius: "7px",
                          fontSize: "12px",
                          fontWeight: 600,
                          cursor: "pointer",
                          border: "1px solid var(--glass-border)",
                          background: "var(--glass-bg)",
                          color: "var(--text-primary)",
                        }}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      </motion.div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            onClick={() => setMobileOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              background: "var(--modal-backdrop)",
              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
