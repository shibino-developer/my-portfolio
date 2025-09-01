import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_cbwdxxa", // ✅ Replace with your Service ID
        "template_4kmrfwe", // ✅ Replace with your Template ID
        formRef.current,
        "JhBPnrLmZHMQcCP1I" // ✅ Replace with your Public Key from EmailJS
      )
      .then(
        (result) => {
          setLoading(false);
          setSuccess(true);
          setError(false);
          formRef.current.reset();
        },
        (err) => {
          setLoading(false);
          setError(true);
          setSuccess(false);
        }
      );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h2 className="text-3xl font-bold mb-4 text-[#ab0f09]">Get in Touch</h2>
      <p className="text-gray-600 mb-6 text-center max-w-lg">
        Have a question, a project idea, or just want to say hello? Fill out the form below, and I’ll get back to you as soon as possible.
      </p>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ab0f09]"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Email
          </label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ab0f09]"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ab0f09]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#ab0f09] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#8f0d07] transition"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && (
          <p className="text-green-600 text-sm mt-3">
            ✅ Message sent successfully!
          </p>
        )}
        {error && (
          <p className="text-red-600 text-sm mt-3">
            ❌ Something went wrong. Try again!
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
