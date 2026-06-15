"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconPhoto, IconZoomIn } from "@tabler/icons-react";
import LightboxModal from "./LightboxModal";

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  category: "campus" | "events" | "graduation" | "labs";
  placeholderGradient: string;
  span?: "wide" | "tall" | "normal";
}

interface Props {
  items: GalleryItem[];
}

export default function GalleryGrid({ items }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + items.length) % items.length,
    );
  const next = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % items.length));

  if (items.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "80px 24px",
          color: "var(--text-muted)",
        }}
      >
        <IconPhoto
          size={48}
          stroke={1.2}
          style={{ marginBottom: "16px", opacity: 0.4 }}
        />
        <p style={{ fontSize: "16px", fontWeight: 500 }}>No photos found</p>
        <p style={{ fontSize: "13px", marginTop: "6px" }}>
          Try a different category or search term
        </p>
      </div>
    );
  }

  return (
    <>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px 80px",
        }}
      >
        {/* Masonry-style grid using CSS columns */}
        <div
          style={{
            columns: "3 300px",
            columnGap: "14px",
          }}
        >
          <AnimatePresence>
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  breakInside: "avoid",
                  marginBottom: "14px",
                  display: "inline-block",
                  width: "100%",
                }}
              >
                <button
                  onClick={() => openLightbox(index)}
                  aria-label={`Open ${item.title}`}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    display: "block",
                    textAlign: "left",
                    borderRadius: "16px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                  className="gallery-card"
                >
                  {/* Photo placeholder */}
                  <div
                    style={{
                      width: "100%",
                      aspectRatio:
                        item.span === "wide"
                          ? "16/9"
                          : item.span === "tall"
                            ? "4/5"
                            : "4/3",
                      background: item.placeholderGradient,
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "transform 0.35s ease",
                    }}
                  >
                    <IconPhoto
                      size={36}
                      stroke={1.2}
                      style={{ color: "rgba(255,255,255,0.35)" }}
                    />

                    {/* Hover overlay */}
                    <div
                      className="gallery-overlay"
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(0,0,0,0.42)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: 0,
                        transition: "opacity 0.25s ease",
                      }}
                    >
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "50%",
                          background: "rgba(255,255,255,0.18)",
                          border: "1px solid rgba(255,255,255,0.4)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <IconZoomIn
                          size={20}
                          stroke={1.8}
                          style={{ color: "#fff" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Caption */}
                  <div
                    style={{
                      padding: "12px 14px 14px",
                      background: "var(--glass-bg-subtle)",
                      border: "1px solid var(--glass-border)",
                      borderTop: "none",
                      borderBottomLeftRadius: "16px",
                      borderBottomRightRadius: "16px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        margin: "0 0 3px",
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </p>
                    <p
                      style={{
                        fontSize: "11.5px",
                        color: "var(--text-muted)",
                        margin: 0,
                        lineHeight: 1.4,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Hover effect via style tag */}
      <style>{`
        .gallery-card:hover .gallery-overlay { opacity: 1 !important; }
        .gallery-card:hover img { transform: scale(1.04); }
      `}</style>

      <LightboxModal
        item={lightboxIndex !== null ? items[lightboxIndex] : null}
        onClose={closeLightbox}
        onPrev={prev}
        onNext={next}
        currentIndex={lightboxIndex ?? 0}
        total={items.length}
      />
    </>
  );
}
