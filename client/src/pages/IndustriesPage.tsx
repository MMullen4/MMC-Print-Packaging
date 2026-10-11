const industries = [
  {
    title: "Automotive",
    description:
      "Sales materials, stationery, promotional products and branded marketing materials.",
  },
  {
    title: "Education",
    description:
      "Catalogs, stationery, presentation materials and custom school spirit products.",
  },
  {
    title: "Food & Beverage",
    description:
      "Custom packaging, labels, tags, menus, displays and restaurant marketing materials.",
  },
  {
    title: "Health Care",
    description:
      "Marketing collateral, stationery, labels and promotional products.",
  },
  {
    title: "Real Estate",
    description:
      "Sales collateral, brochures, presentation folders, displays and branded stationery.",
  },
  {
    title: "Retail",
    description:
      "Product packaging, labels, point-of-sale displays, signage and window graphics.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Solutions by Industry</h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          From packaging and labels to print marketing and point-of-sale
          displays, MMC provides solutions tailored to your business, your
          customers and your brand.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((industry) => (
          <div
            key={industry.title}
            className="border border-gray-200 rounded-xl p-6 shadow-sm
                       hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-3">{industry.title}</h2>

            <p className="text-gray-600 leading-relaxed">
              {industry.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold mb-3">
          Explore More Possibilities
        </h2>

        <p className="text-gray-600 mb-6">
          View our catalog for additional print, packaging, display and
          promotional product ideas.
        </p>

        <a
          href="/catalogs/mmc-print-packaging-catalog.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-2 border-blue-700
                     text-blue-700 px-6 py-3 rounded-lg font-semibold
                     hover:bg-blue-700 hover:text-white transition"
        >
          View Our Catalog
        </a>
      </div>
    </main>
  );
}
