import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send message");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error sending contact form:", err);
      setStatus("error");
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <img
        src="/assets/Direct Mail2.avif"
        alt="Direct Mail Example"
        className="w-full mb-6 rounded-lg shadow-lg"
      />
      <h2 className="text-3xl font-semibold mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="w-full border p-2"
          required
          onChange={handleChange}
          value={form.name}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full border p-2"
          required
          onChange={handleChange}
          value={form.email}
        />
        <textarea
          name="message"
          placeholder="Message"
          className="w-full border p-2 h-32"
          required
          onChange={handleChange}
          value={form.message}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status === "success" && (
        <p className="text-green-600 mt-4">Thanks! We'll be in touch.</p>
      )}
      {status === "error" && (
        <p className="text-red-600 mt-4">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
