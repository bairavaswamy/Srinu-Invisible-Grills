"use client";

import { useState } from "react";
import { Contact } from "@/lib/types";

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
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          status: "new",
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("⚠️ Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("❌ Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="bg-[#26395A] rounded-2xl shadow-2xl p-8 border border-amber-300/30 text-amber-50 backdrop-blur-sm">
      <h2 className="text-2xl font-bold bg-[#E78946] bg-clip-text text-transparent mb-6 text-center">
        Send Us a Message
      </h2>

      {submitted ? (
        <p className="text-emerald-300 font-medium text-center">
          ✅ Thank you! We’ll get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label
              htmlFor="input-fname"
              className="block text-amber-100 font-medium mb-1"
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
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.name ? "border-red-500" : "border-amber-200/50"
              } bg-white/10 text-amber-50 placeholder-amber-100/50 focus:ring-2 focus:ring-amber-300 outline-none`}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="input-gmail"
              className="block text-amber-100 font-medium mb-1"
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
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.email ? "border-red-500" : "border-amber-200/50"
              } bg-white/10 text-amber-50 placeholder-amber-100/50 focus:ring-2 focus:ring-amber-300 outline-none`}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="input-phone"
              className="block text-amber-100 font-medium mb-1"
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
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.phone ? "border-red-500" : "border-amber-200/50"
              } bg-white/10 text-amber-50 placeholder-amber-100/50 focus:ring-2 focus:ring-amber-300 outline-none`}
            />
            {errors.phone && (
              <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="label-for-tarea"
              className="block text-amber-100 font-medium mb-1"
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
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.message ? "border-red-500" : "border-amber-200/50"
              } bg-white/10 text-amber-50 placeholder-amber-100/50 focus:ring-2 focus:ring-amber-300 outline-none`}
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#E78946] text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition transform hover:scale-[1.02]"
          disabled>
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
