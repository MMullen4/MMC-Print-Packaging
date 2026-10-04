import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://mmc-print-packaging-production-0936.up.railway.app/contact", {
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
    <div className="px-4 py-8 sm:p-8 max-w-xl mx-auto">
      <img
        src="/assets/Direct Mail2.avif"
        alt="Direct Mail Example"
        className="w-full mb-6 rounded-lg shadow-lg"
      />
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">Contact Us</h2>
      <div className="mb-6 text-center space-y-2">
        <p className="text-base sm:text-lg">
          <span className="font-semibold">Email:</span>{" "}
          <a href="mailto:matt@mmcprintpackaging.com" className="text-blue-600 hover:underline">
            matt@mmcprintpackaging.com
          </a>
        </p>
        <p className="text-base sm:text-lg">
          <span className="font-semibold">Phone:</span>{" "}
          <a href="tel:+16268182525" className="text-blue-600 hover:underline">
            (626) 818-2525
          </a>
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="w-full border p-3 rounded text-base"
          required
          onChange={handleChange}
          value={form.name}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded text-base"
          required
          onChange={handleChange}
          value={form.email}
        />
        <textarea
          name="message"
          placeholder="Message"
          className="w-full border p-3 rounded text-base h-32"
          required
          onChange={handleChange}
          value={form.message}
        />
        <button
          type="submit"
          className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded text-base hover:bg-blue-700 transition"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status === "success" && (
        <p className="text-green-600 mt-4">Thanks! We'll be in touch.</p>
      )}
      {status === "error" && (
        <p className="text-red-600 mt-4">Something went wrong. Please try again.</p>
      )}
    </div>
  );
}
