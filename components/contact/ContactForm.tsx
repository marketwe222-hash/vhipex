"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconSend,
  IconCheck,
  IconUser,
  IconMail,
  IconMessageCircle,
  IconPhone,
  IconAlertCircle,
} from "@tabler/icons-react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const SUBJECTS = [
  "General Enquiry",
  "Admissions / Enrolment",
  "Program Information",
  "Fees & Payments",
  "Student Support",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      e.email = "Invalid email address";
    if (!form.subject) e.subject = "Please select a subject";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.trim().length < 20)
      e.message = "Message must be at least 20 characters";
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    setErrors({});
    setStatus("loading");
    // Simulate API call — replace with your actual endpoint
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
  };

  const set =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
      if (errors[field])
        setErrors((err) => {
          const n = { ...err };
          delete n[field];
          return n;
        });
    };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          textAlign: "center",
          padding: "60px 32px",
          background: "var(--glass-bg-subtle)",
          border: "1px solid var(--glass-border)",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "var(--success-bg)",
            border: "1px solid var(--success-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px",
          }}
        >
          <IconCheck
            size={28}
            stroke={2}
            style={{ color: "var(--success-text)" }}
          />
        </div>
        <h3
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "var(--text-primary)",
            margin: "0 0 10px",
          }}
        >
          Message Sent!
        </h3>
        <p
          style={{
            fontSize: "14px",
            color: "var(--text-muted)",
            margin: "0 0 28px",
          }}
        >
          Thank you for reaching out. Our team will get back to you within 24
          hours.
        </p>
        <button
          onClick={() => {
            setForm({
              name: "",
              email: "",
              phone: "",
              subject: "",
              message: "",
            });
            setStatus("idle");
          }}
          className="btn-secondary"
          style={{
            padding: "10px 24px",
            fontSize: "13.5px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  const fieldStyle = (hasErr: boolean): React.CSSProperties => ({
    width: "100%",
    padding: "11px 14px",
    fontSize: "14px",
    borderRadius: "10px",
    background: "var(--input-bg)",
    border: `1px solid ${hasErr ? "var(--error-border)" : "var(--input-border)"}`,
    color: "var(--text-primary)",
    outline: "none",
    transition: "border-color 0.18s, background 0.18s, box-shadow 0.18s",
    boxSizing: "border-box",
  });

  const labelStyle: React.CSSProperties = {
    fontSize: "12.5px",
    fontWeight: 600,
    color: "var(--text-secondary)",
    letterSpacing: "0.03em",
    marginBottom: "6px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: "var(--glass-bg-subtle)",
        border: "1px solid var(--glass-border)",
        borderRadius: "20px",
        padding: "32px",
        backdropFilter: "var(--glass-blur-sm)",
      }}
    >
      <h2
        style={{
          fontSize: "18px",
          fontWeight: 700,
          color: "var(--text-primary)",
          margin: "0 0 6px",
        }}
      >
        Send Us a Message
      </h2>
      <p
        style={{
          fontSize: "13px",
          color: "var(--text-muted)",
          margin: "0 0 28px",
        }}
      >
        Fill in the form and we'll respond within one business day.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        {/* Name + Phone row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "14px",
          }}
        >
          {/* Name */}
          <div>
            <label style={labelStyle}>
              <IconUser size={13} stroke={2} /> Full Name *
            </label>
            <input
              value={form.name}
              onChange={set("name")}
              placeholder="Jean-Paul Mbarga"
              style={fieldStyle(!!errors.name)}
            />
            <ErrorMsg msg={errors.name} />
          </div>
          {/* Phone */}
          <div>
            <label style={labelStyle}>
              <IconPhone size={13} stroke={2} /> Phone (optional)
            </label>
            <input
              value={form.phone}
              onChange={set("phone")}
              placeholder="+237 6XX XXX XXX"
              style={fieldStyle(false)}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label style={labelStyle}>
            <IconMail size={13} stroke={2} /> Email Address *
          </label>
          <input
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder="you@example.com"
            style={fieldStyle(!!errors.email)}
          />
          <ErrorMsg msg={errors.email} />
        </div>

        {/* Subject */}
        <div>
          <label style={labelStyle}>
            <IconMessageCircle size={13} stroke={2} /> Subject *
          </label>
          <select
            value={form.subject}
            onChange={set("subject")}
            style={{ ...fieldStyle(!!errors.subject), appearance: "none" }}
          >
            <option value="">Select a subject…</option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <ErrorMsg msg={errors.subject} />
        </div>

        {/* Message */}
        <div>
          <label style={labelStyle}>
            <IconMessageCircle size={13} stroke={2} /> Message *
          </label>
          <textarea
            value={form.message}
            onChange={set("message")}
            rows={5}
            placeholder="Write your message here…"
            style={{
              ...fieldStyle(!!errors.message),
              resize: "vertical",
              minHeight: "120px",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ErrorMsg msg={errors.message} />
            <span
              style={{
                fontSize: "11px",
                color: "var(--text-muted)",
                marginLeft: "auto",
              }}
            >
              {form.message.length} chars
            </span>
          </div>
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={status === "loading"}
          className="btn-primary"
          style={{
            padding: "13px 28px",
            fontSize: "14px",
            fontWeight: 700,
            cursor: status === "loading" ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            opacity: status === "loading" ? 0.75 : 1,
            width: "100%",
          }}
        >
          {status === "loading" ? (
            <>
              <span
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  border: "2px solid rgba(255,255,255,0.4)",
                  borderTopColor: "#fff",
                  animation: "spin 0.7s linear infinite",
                  display: "inline-block",
                }}
              />
              Sending…
            </>
          ) : (
            <>
              <IconSend size={16} stroke={2} />
              Send Message
            </>
          )}
        </button>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        input::placeholder, textarea::placeholder { color: var(--text-disabled); }
        input:focus, textarea:focus, select:focus {
          border-color: var(--input-border-focus) !important;
          box-shadow: var(--input-shadow-focus);
          background: var(--input-bg-focus) !important;
        }
      `}</style>
    </motion.div>
  );
}

function ErrorMsg({ msg }: { msg?: string }) {
  return (
    <AnimatePresence>
      {msg && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          style={{
            fontSize: "11.5px",
            color: "var(--error-text)",
            margin: "5px 0 0",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <IconAlertCircle size={12} stroke={2} />
          {msg}
        </motion.p>
      )}
    </AnimatePresence>
  );
}
