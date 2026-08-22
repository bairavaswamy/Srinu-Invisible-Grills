"use client";

import { useState } from "react";
import { Contact } from "@/lib/types";
import { siteConfig } from "@/lib/site";

const ContactForm = () => {
  const [formData, setFormData] = useState<Contact>({
    name: "",
    email: "",
    phone: "",
    message: "",
    status: "new",
  });

  const [errors, setErrors] = useState<Partial<Contact>>({});
  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Validate fields
  const validate = () => {
    const newErrors: Partial<Contact> = {};

    if (!formData.name.trim()) newErrors.name = "Full Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    return newErrors;
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const message = [
      "Hello Srinu Invisible Grills, I would like a free quote.",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Requirement: ${formData.message}`,
    ].join("\n");

    window.open(
      `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      status: "new",
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="site-card rounded-2xl p-6 sm:p-8">
      <h2 className="mb-2 text-center text-2xl font-bold">
        Request a Free Quote
      </h2>
      <p className="mb-6 text-center text-sm leading-6 text-[var(--text-secondary)]">
        Share your requirement and continue securely in WhatsApp.
      </p>

      {submitted ? (
        <p className="text-emerald-300 font-medium text-center">
          Your WhatsApp message is ready. We’ll respond as soon as possible.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label
              htmlFor="input-fname"
              className="mb-1 block font-medium text-[var(--text-primary)]"
            >
              Full Name
            </label>
            <input
              id="input-fname"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.name ? "border-red-500" : "border-amber-200/50"
              } bg-white/85 text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:ring-2 focus:ring-[var(--brand-aqua)] outline-none`}
            />
            {errors.name && (
              <p id="name-error" className="text-red-300 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="input-gmail"
              className="mb-1 block font-medium text-[var(--text-primary)]"
            >
              Email
            </label>
            <input
              id="input-gmail"
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.email ? "border-red-500" : "border-amber-200/50"
              } bg-white/85 text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:ring-2 focus:ring-[var(--brand-aqua)] outline-none`}
            />
            {errors.email && (
              <p id="email-error" className="text-red-300 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="input-phone"
              className="mb-1 block font-medium text-[var(--text-primary)]"
            >
              Phone Number
            </label>
            <input
              id="input-phone"
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              inputMode="numeric"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.phone ? "border-red-500" : "border-amber-200/50"
              } bg-white/85 text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:ring-2 focus:ring-[var(--brand-aqua)] outline-none`}
            />
            {errors.phone && (
              <p id="phone-error" className="text-red-300 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="label-for-tarea"
              className="mb-1 block font-medium text-[var(--text-primary)]"
            >
              Message
            </label>
            <textarea
              id="label-for-tarea"
              name="message"
              placeholder="Write your message here..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.message ? "border-red-500" : "border-amber-200/50"
              } bg-white/85 text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:ring-2 focus:ring-[var(--brand-aqua)] outline-none`}
            />
            {errors.message && (
              <p id="message-error" className="text-red-300 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="site-cta w-full rounded-xl py-3 font-bold transition focus:outline-none focus:ring-2 focus:ring-[var(--brand-aqua)]"
          >
            Continue in WhatsApp
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
