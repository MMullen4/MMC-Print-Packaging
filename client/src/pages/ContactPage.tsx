import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const SEND_EMAIL = gql`
  mutation SendEmail($name: String!, $email: String!, $message: String!) {
    sendContactEmail(name: $name, email: $email, message: $message)
  }
`;

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sendEmail, { data, loading, error }] = useMutation(SEND_EMAIL);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendEmail({ variables: form });
    } catch (err) {
      console.error("Mutation error:", err);
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="w-full border p-2"
          required
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full border p-2"
          required
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          className="w-full border p-2 h-32"
          required
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
      {data?.sendContactEmail && (
        <p className="text-green-600 mt-4">Thanks! We'll be in touch.</p>
      )}
      {error && (
        <p className="text-red-600 mt-4">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
