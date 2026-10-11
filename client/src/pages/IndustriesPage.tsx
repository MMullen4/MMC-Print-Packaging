import { Link } from "react-router-dom";

const industries = [
  {
    title: "Automotive",
        image: "/assets/industries/automotive-2.png",
    description:
      "Sales and service materials, stationery, promotional products and branded marketing materials.",
    position: "center",
    contain: true,
  },
  {
    title: "Education",
    image: "/assets/industries/education.jpg",
    description:
      "Catalogs, stationery, presentation materials and custom school spirit products.",
  },
  {
    title: "Food & Beverage",
    image: "/assets/industries/food-beverage.jpg",
    description:
      "Custom packaging, labels, tags, menus, displays and restaurant marketing materials.",
  },
  {
    title: "Health Care",
    image: "/assets/industries/healthcare.jpg",
    description:
      "Marketing collateral, stationery, labels and promotional products for health care organizations.",
    position: "center top",
  },
  {
    title: "Real Estate",
    image: "/assets/industries/real-estate.jpg",
    description:
      "Sales collateral, brochures, presentation folders, displays and branded stationery.",
  },
  {
    title: "Retail",
    image: "/assets/industries/retail.jpg",
    description:
      "Product packaging, labels, point-of-sale displays, signage and window graphics.",
    position: "center 30%",
  },
];

export default function IndustriesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          Solutions by Industry
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          From packaging and labels to print marketing and point-of-sale
          displays, MMC provides solutions tailored to your business, your
          customers and your brand.
        </p>
      </section>

      {/* Industry Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry) => (
          <div
            key={industry.title}
            className="
              bg-white
              border border-gray-200
              rounded-xl
              overflow-hidden
              shadow-sm
              hover:shadow-xl
              transition
              duration-300
            "
          >
            <img
              src={industry.image}
              alt={`${industry.title} print and packaging solutions`}
              className={`w-full h-56 ${ (industry as any).contain ? "object-contain bg-gray-50" : "object-cover"}`}
              style={{ objectPosition: (industry as any).position || "center" }}
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3">{industry.title}</h2>

              <p className="text-gray-600 leading-relaxed">
                {industry.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="mt-16 bg-gray-100 rounded-xl px-6 py-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-7">
          Whether you need custom packaging, labels, marketing materials,
          displays or promotional products, we'll help you find the right
          solution for your brand.
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
    </main>
  );
}
