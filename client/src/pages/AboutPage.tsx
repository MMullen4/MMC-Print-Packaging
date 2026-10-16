import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function AboutPage() {
  return (
    <div className="relative px-4 py-8 sm:p-8 max-w-3xl mx-auto text-center">
      <SEO
        title="About MMC Print & Packaging | Print & Packaging Expertise"
        description="Learn about MMC Print & Packaging and our approach to helping businesses develop effective print marketing and packaging solutions."
        path="/about"
      />
      <div
        className="fixed inset-0 bg-cover bg-center opacity-20 -z-10"
        style={{ backgroundImage: "url('/assets/specialty packaging.avif')" }}
      />
      <img
        src="/assets/Matt.png"
        alt="Matt Mullen"
        className="rounded-full w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6"
      />
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">
        About MMC Print & Packaging
      </h2>
      <p className="text-base sm:text-xl">
        Matt Mullen brings strategic insight and unmatched customer service to
        clients. With over 20 years of experience in print and packaging, MMC
        offers solutions that builds your brand & grows your sales.
      </p>
      <div className="mt-12 text-left">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
          Why use MMC?
        </h3>
        <p className="text-base sm:text-xl mb-4">
          We are about you - your goals - your needs - your brand.
        </p>
        <p className="text-base sm:text-xl mb-4">
          Many large printing companies employ a transactional approach, leaving
          small to mid-sized businesses with fewer choices, an impersonal
          relationship, and your needs unfulfilled.
        </p>
        <p className="text-base sm:text-xl mb-4">
          We focus on unique solutions that maximize speed to market, elevate
          your brand and fulfill your goals.
        </p>
        <p className="text-base sm:text-xl mb-4">
          <strong>Click the link</strong> to set up a quick 15-minute meeting
          through Calendly. Or better yet,{" "}
          <Link
            to="/contact"
            className="text-blue-600 underline hover:text-blue-800"
          >
            just call
          </Link>
          .
        </p>
        <div className="text-center mt-4">
          <a
            href="https://calendly.com/mhmullen"
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
