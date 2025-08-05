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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendEmail({ variables: form });
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2"
          required
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2"
          required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          placeholder="Message"
          className="w-full border p-2 h-32"
          required
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
      {data && (
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
