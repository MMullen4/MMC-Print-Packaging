import { Link } from "react-router-dom";

export default function ProjectCTA() {
  return (
    <section className="mt-16 bg-gray-100 rounded-xl px-6 py-10 text-center">
      <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>

      <p className="text-gray-600 max-w-2xl mx-auto mb-7">
        Whether you need custom packaging, labels, marketing materials, displays
        or promotional products, we'll help you find the right solution for your
        brand.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          to="/contact"
          className="
            bg-blue-700
            text-white
            border-2 border-blue-700
            px-6 py-3
            rounded-lg
            font-semibold
            hover:bg-blue-800
            transition
          "
        >
          Discuss Your Project
        </Link>

        <a
          href="/catalogs/mmc-print-packaging-catalog.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            border-2 border-blue-700
            text-blue-700
            px-6 py-3
            rounded-lg
            font-semibold
            hover:bg-blue-700
            hover:text-white
            transition
          "
        >
          View Our Catalog
        </a>
      </div>
    </section>
  );
}
