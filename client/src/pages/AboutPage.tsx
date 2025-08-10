export default function AboutPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center">
      <img
        src="/assets/Matt.png"
        alt="Matt Mullen"
        className="rounded-full w-40 h-40 mx-auto mb-6"
      />
      <h2 className="text-2xl font-semibold mb-4">About MMC Print & Packaging</h2>
      <p className="text-xl">
        With over 20 years of experience in print and packaging, Matt Mullen
        brings strategic insight and unmatched customer service to clients, and offers solutions that grow sales.
      </p>

      {/* Why Use Us Section */}
      <div className="mt-12 text-left">
        <h3 className="text-2xl font-semibold mb-4 text-center">
          Why use us?
        </h3>
        <p className="text-xl mb-4">
          We are about you. Your goals. Your needs. Your brand.
        </p>
        <p className="text-xl mb-4">
          Many larger print businesses employ a transactional approach unless
          you’re a large corporation, leaving small to mid-sized businesses with
          fewer choices, an impersonal relationship, and your needs unfulfilled.
        </p>
        <p className="text-xl mb-4">
          We focus on unique solutions that maximize speed to market, elevate
          your brand and fulfill your goals.
        </p>
        <p className="text-xl mb-4">
          <strong>Click the link</strong> to set up a quick 15-minute meeting
          through Calendly. Or better yet, just call.
        </p>
        <div className="text-center mt-4">
          <a
            href="https://calendly.com/YOUR-CALENDLY-LINK" // replace with your actual link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Book a 15-Minute Call
          </a>
        </div>
      </div>
    </div>
  );
}
