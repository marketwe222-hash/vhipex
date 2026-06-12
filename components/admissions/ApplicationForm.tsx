"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  IconUser,
  IconMail,
  IconPhone,
  IconMapPin,
  IconSchool,
  IconFileText,
  IconSend,
  IconCheck,
} from "@tabler/icons-react";

const PROGRAM_LEVELS = [
  "National Diploma (ND)",
  "Higher National Diploma (HND)",
  "Bachelor's Degree",
  "Master's Degree",
];

const FIELDS_OF_STUDY = [
  "Agriculture",
  "Information Technology (IT)",
  "Engineering",
  "Health Sciences",
  "Business Administration",
  "Management",
  "Education",
  "Banking & Finance",
];

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    whatsapp: "",
    city: "",
    country: "",
    programLevel: "",
    fieldOfStudy: "",
    previousQualification: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        whatsapp: "",
        city: "",
        country: "",
        programLevel: "",
        fieldOfStudy: "",
        previousQualification: "",
        message: "",
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section
        id="application-form"
        className="relative py-20 overflow-hidden"
        style={{ background: "var(--bg-gradient)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="glass-strong p-12 rounded-2xl text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
              style={{
                background: "var(--badge-blue-bg)",
                color: "var(--accent-primary)",
              }}
            >
              <IconCheck size={40} stroke={2.5} />
            </motion.div>
            <h3
              className="text-3xl font-bold mb-4"
              style={{
                color: "var(--text-primary)",
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              Application Submitted!
            </h3>
            <p
              className="text-lg mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              Thank you for your interest in VIHIPEX. Our admissions team will
              review your application and contact you within 5-7 business days.
            </p>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Check your email for a confirmation message.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="application-form"
      className="relative py-20 overflow-hidden"
      style={{ background: "var(--bg-gradient)" }}
    >
      {/* Background Decoration */}
      <div
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-10"
        style={{
          background:
            "radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              color: "var(--text-primary)",
            }}
          >
            Submit Your Application
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Fill out the form below and our admissions team will contact you
            within 5-7 days
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-strong p-8 rounded-2xl"
        >
          <div className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3
                className="text-xl font-bold mb-4 flex items-center gap-2"
                style={{ color: "var(--text-primary)" }}
              >
                <IconUser
                  size={20}
                  style={{ color: "var(--accent-primary)" }}
                />
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="glass-input w-full px-4 py-3 text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass-input w-full px-4 py-3 text-sm"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="glass-input w-full px-4 py-3 text-sm"
                    placeholder="+237 6XX XXX XXX"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="glass-input w-full px-4 py-3 text-sm"
                    placeholder="+237 6XX XXX XXX"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="glass-input w-full px-4 py-3 text-sm"
                    placeholder="Yaoundé"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Country *
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="glass-input w-full px-4 py-3 text-sm"
                    placeholder="Cameroon"
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="divider border-t" />

            {/* Academic Information */}
            <div>
              <h3
                className="text-xl font-bold mb-4 flex items-center gap-2"
                style={{ color: "var(--text-primary)" }}
              >
                <IconSchool
                  size={20}
                  style={{ color: "var(--accent-primary)" }}
                />
                Academic Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Program Level *
                  </label>
                  <select
                    name="programLevel"
                    value={formData.programLevel}
                    onChange={handleChange}
                    required
                    className="glass-input w-full px-4 py-3 text-sm"
                  >
                    <option value="">Select program level</option>
                    {PROGRAM_LEVELS.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Field of Study *
                  </label>
                  <select
                    name="fieldOfStudy"
                    value={formData.fieldOfStudy}
                    onChange={handleChange}
                    required
                    className="glass-input w-full px-4 py-3 text-sm"
                  >
                    <option value="">Select field</option>
                    {FIELDS_OF_STUDY.map((field) => (
                      <option key={field} value={field}>
                        {field}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Previous/Current Qualification *
                  </label>
                  <input
                    type="text"
                    name="previousQualification"
                    value={formData.previousQualification}
                    onChange={handleChange}
                    required
                    className="glass-input w-full px-4 py-3 text-sm"
                    placeholder="e.g., GCE A-Level, Baccalauréat, ND, etc."
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="divider border-t" />

            {/* Additional Information */}
            <div>
              <h3
                className="text-xl font-bold mb-4 flex items-center gap-2"
                style={{ color: "var(--text-primary)" }}
              >
                <IconFileText
                  size={20}
                  style={{ color: "var(--accent-primary)" }}
                />
                Additional Information
              </h3>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="glass-input w-full px-4 py-3 text-sm resize-none"
                  placeholder="Tell us about your career goals, why you're interested in VIHIPEX, or any questions you have..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full md:w-auto px-8 py-4 text-base font-semibold rounded-xl inline-flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Submit Application
                    <IconSend size={18} stroke={2} />
                  </>
                )}
              </button>
            </div>

            {/* Privacy Note */}
            <p
              className="text-xs leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              By submitting this form, you agree to be contacted by VIHIPEX
              University Institute regarding your application. We respect your
              privacy and will never share your information with third parties.
            </p>
          </div>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 grid md:grid-cols-3 gap-4"
        >
          <div className="glass-sm p-4 rounded-xl text-center">
            <IconPhone
              size={24}
              className="mx-auto mb-2"
              style={{ color: "var(--accent-primary)" }}
            />
            <p
              className="text-xs font-medium mb-1"
              style={{ color: "var(--text-muted)" }}
            >
              Call Us
            </p>
            <p
              className="text-sm font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              +237 652 761 202
            </p>
          </div>
          <div className="glass-sm p-4 rounded-xl text-center">
            <IconMail
              size={24}
              className="mx-auto mb-2"
              style={{ color: "var(--accent-primary)" }}
            />
            <p
              className="text-xs font-medium mb-1"
              style={{ color: "var(--text-muted)" }}
            >
              Email Us
            </p>
            <p
              className="text-sm font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              victoryinstitute68@gmail.com
            </p>
          </div>
          <div className="glass-sm p-4 rounded-xl text-center">
            <IconMapPin
              size={24}
              className="mx-auto mb-2"
              style={{ color: "var(--accent-primary)" }}
            />
            <p
              className="text-xs font-medium mb-1"
              style={{ color: "var(--text-muted)" }}
            >
              Visit Us
            </p>
            <p
              className="text-sm font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              Yaoundé, Cameroon
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
