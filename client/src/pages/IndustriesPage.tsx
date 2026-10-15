import { useEffect, useState } from "react";
import ProjectCTA from "../components/ProjectCTA";
import SEO from "../components/SEO";

type Industry = {
  title: string;
  images: string[];
  description: string;
  position?: string;
  contain?: boolean;
  brightness?: number;
};

const industries: Industry[] = [
  {
    title: "Automotive",
    images: [
      "/assets/industries/automotive-2.png",
      "/assets/industries/automotive-2.jpg",
      "/assets/industries/DU auto mag.png",
    ],
    description:
      "Sales and service materials, brochures, promotional products and branded marketing materials.",
    position: "center",
    contain: false,
    brightness: 1.3,
  },
  {
    title: "Education",
    images: [
      "/assets/industries/education.jpg",
      "/assets/industries/education-2.jpg",
    ],
    description:
      "Catalogs, apparel, presentation materials and custom school spirit products.",
  },
  {
    title: "Food & Beverage",
    images: [
      "/assets/industries/Takeaway Pkg.png",
      "/assets/Chori label.jpg",
      "/assets/Trademark Label.jpg",
    ],
    description:
      "Custom packaging, labels, tags, menus, displays and restaurant marketing materials.",
  },
  {
    title: "Health Care",
    images: [
      "/assets/industries/healthcare.jpg",
      "/assets/industries/healthcare-2.jpg",
    ],
    description:
      "Marketing collateral, labels and promotional products for health care organizations.",
    position: "center top",
  },
  {
    title: "Real Estate",
    images: [
      "/assets/industries/real-estate.jpg",
      "/assets/industries/real-estate-2.jpg",
    ],
    description:
      "Sales collateral, brochures, presentation folders, displays and signage.",
  },
  {
    title: "Retail",
    images: [
      "/assets/industries/Sea-to-Me.png",
      "/assets/industries/retail-2.jpg",
      "/assets/boxes pic.avif",
      "/assets/retail.png",
    ],
    description:
      "Product packaging, labels, point-of-sale displays, signage and window graphics.",
    position: "center 30%",
  },
];

/* -------------------------------------------------------
   IMAGE SLIDESHOW
------------------------------------------------------- */

function CardSlideshow({
  images,
  alt,
  position = "center",
  contain = false,
  brightness = 1,
  delay = 0,
}: {
  images: string[];
  alt: string;
  position?: string;
  contain?: boolean;
  brightness?: number;
  delay?: number;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let interval: number | undefined;

    const timeout = window.setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);

      interval = window.setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 5000);
    }, 4000 + delay);

    return () => {
      window.clearTimeout(timeout);

      if (interval) {
        window.clearInterval(interval);
      }
    };
  }, [images.length, delay]);

  return (
    <div className="relative w-full h-56 overflow-hidden bg-gray-50">
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={alt}
          className={`
            absolute inset-0
            w-full h-full
            ${contain ? "object-contain" : "object-cover"}
            transition-opacity duration-1000
            ${index === current ? "opacity-100" : "opacity-0"}
          `}
          style={{ objectPosition: position, filter: brightness !== 1 ? `brightness(${brightness})` : undefined }}
        />
      ))}
    </div>
  );
}

export default function IndustriesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <section className="text-center mb-12">
        // IndustriesPage.tsx
        <SEO
          title="Custom Print & Packaging Solutions by Industry | MMC"
          description="Explore custom printing and packaging solutions for brands and businesses across a range of industries."
          path="/industries"
        />
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
        {industries.map((industry, index) => (
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
            <CardSlideshow
              images={industry.images}
              alt={`${industry.title} print and packaging solutions`}
              position={industry.position}
              contain={industry.contain}
              brightness={(industry as any).brightness}
              delay={index * 600}
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
      <ProjectCTA />
    </main>
  );
}
