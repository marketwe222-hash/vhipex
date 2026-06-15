"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { IconMapPin, IconExternalLink } from "@tabler/icons-react";

const CAMPUSES = [
  {
    id: "bafoussam",
    label: "Bafoussam Campus",
    address: "Bafoussam, West Region, Cameroon",
    mapsUrl: "https://maps.google.com/?q=Bafoussam,Cameroon",
    // Real embed URL — replace with exact coordinates when available
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63817.94!2d10.4!3d5.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105f1e4b2a6d7f6d%3A0x6a2b3c4d5e6f7a8b!2sBafoussam!5e0!3m2!1sen!2scm!4v1680000000000",
  },
  {
    id: "yaounde",
    label: "Yaoundé Campus",
    address: "Yaoundé, Centre Region, Cameroon",
    mapsUrl: "https://maps.google.com/?q=Yaounde,Cameroon",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63817.94!2d11.5!3d3.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcfd5f7c0b7f5%3A0x2f1b3c4d5e6f7a8b!2sYaound%C3%A9!5e0!3m2!1sen!2scm!4v1680000000000",
  },
];

export default function MapEmbed() {
  const [active, setActive] = useState("bafoussam");
  const campus = CAMPUSES.find((c) => c.id === active)!;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: "var(--glass-bg-subtle)",
        border: "1px solid var(--glass-border)",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      {/* Tab switcher */}
      <div
        style={{
          display: "flex",
          gap: "4px",
          padding: "14px 16px 0",
          borderBottom: "1px solid var(--divider)",
        }}
      >
        {CAMPUSES.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            style={{
              padding: "8px 16px",
              borderRadius: "10px 10px 0 0",
              fontSize: "13px",
              fontWeight: active === c.id ? 700 : 500,
              cursor: "pointer",
              border:
                active === c.id
                  ? "1px solid var(--glass-border)"
                  : "1px solid transparent",
              borderBottom: "none",
              background: active === c.id ? "var(--glass-bg)" : "transparent",
              color:
                active === c.id ? "var(--accent-primary)" : "var(--text-muted)",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              transition: "all 0.18s",
            }}
          >
            <IconMapPin size={13} stroke={2} />
            {c.label}
          </button>
        ))}
      </div>

      {/* Map iframe */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
        <iframe
          key={active}
          src={campus.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map of ${campus.label}`}
        />
      </div>

      {/* Footer */}
      <div
        style={{
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
          <IconMapPin
            size={14}
            stroke={2}
            style={{ color: "var(--accent-primary)", flexShrink: 0 }}
          />
          <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
            {campus.address}
          </span>
        </div>
        <a
          href={campus.mapsUrl}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "12px",
            fontWeight: 600,
            color: "var(--accent-primary)",
            textDecoration: "none",
            padding: "5px 12px",
            borderRadius: "8px",
            background: "var(--info-bg)",
            border: "1px solid var(--info-border)",
          }}
        >
          Open in Maps
          <IconExternalLink size={12} stroke={2} />
        </a>
      </div>
    </motion.div>
  );
}
