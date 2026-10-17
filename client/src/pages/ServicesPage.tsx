import { useEffect, useState } from "react";
import ProjectCTA from "../components/ProjectCTA";
import SEO from "../components/SEO";

type Service = {
  title: string;
  images: string[];
  items: string[];
  position?: string;
  positions?: string[];
  contain?: boolean;
  contains?: boolean[];
  brightness?: number;
};

const services: Service[] = [
  {
    title: "Print Marketing Solutions",
    images: [
      "/assets/services/Direct Mail2.avif",
      "/assets/services/Loan Queen card.jpg",
    ],
    items: [
      "Business Cards",
      "Flyers & Postcards",
      "Books & Brochures",
      "Signage & Banners",
      "Direct Mail",
    ],
  },

  {
    title: "Packaging Solutions",
    images: [
      "/assets/services/boxes pic.avif",
      "/assets/services/Endless Summer Box.png",
      "/assets/services/Gift Bags.png",
    ],
    items: ["Custom Boxes & Bags", "Labels", "Retail Displays"],
  },

  {
    title: "Labels & Sleeves",
    images: [
      "/assets/services/sleeve.jpg",
      "/assets/services/Trademark Label.jpg",
    ],
    items: ["Product Labels", "Package Sleeves", "Custom Die-Cut Labels"],
    contain: false,
  },

  {
    title: "Signage & Installation",
    images: [
      "/assets/services/install.jpg",
      "/assets/services/FlexTech install.avif",
      "/assets/services/Schopp Wall Sign.png",
      "/assets/services/EDU Vehicle Sign.png",
    ],
    items: [
      "Indoor / Outdoor Signage & Banners",
      "Auto Magnets",
      "Wall Graphics",
    ],

    // Default settings
    contain: false,
    position: "center 35%",

    // Individual image settings
    positions: ["center 35%", "center 35%", "center center", "center 35%"],

    contains: [false, false, true, false],
  },

  {
    title: "Promotional Items",
    images: [
      "/assets/services/Elegant Silver Pen with Script K Logo.png",
      "/assets/services/Kinecta bottle.jpg",
    ],
    items: [
      "Pens & Notebooks",
      "Mugs & Drinkware",
      "USB Drives",
      "Keychains & Magnets",
    ],
    contain: true,
  },

  {
    title: "Branded Apparel & Merchandise",
    images: [
      "/assets/services/ZG.jpeg",
      "/assets/services/Kona Brewing Visors.png",
    ],
    items: [
      "T-shirts & Polos",
      "Hoodies & Jackets",
      "Hats & Caps",
      "Bags & Totes",
    ],
    position: "center 5%",
  },
];

/* -------------------------------------------------------
   IMAGE SLIDESHOW
------------------------------------------------------- */

function CardSlideshow({
  images,
  alt,
  position = "center",
  positions,
  contain = false,
  contains,
  brightness = 1,
  delay = 0,
}: {
  images: string[];
  alt: string;
  position?: string;
  positions?: string[];
  contain?: boolean;
  contains?: boolean[];
  brightness?: number;
  delay?: number;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

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
      {images.map((image, index) => {
        const imageContain = contains?.[index] ?? contain;
        const imagePosition = positions?.[index] ?? position;

        return (
          <img
            key={image}
            src={image}
            alt={`${alt} example ${index + 1}`}
            className={`
              absolute inset-0
              w-full h-full
              ${imageContain ? "object-contain" : "object-cover"}
              transition-opacity duration-1000
              ${index === current ? "opacity-100" : "opacity-0"}
            `}
            style={{
              objectPosition: imagePosition,
              filter:
                brightness !== 1 ? `brightness(${brightness})` : undefined,
            }}
          />
        );
      })}
    </div>
  );
}

/* -------------------------------------------------------
   SERVICES PAGE
------------------------------------------------------- */

export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <SEO
        title="Printing & Packaging Services | MMC Print & Packaging"
        description="Commercial printing, custom packaging, labels, signage, banners, promotional products and branded merchandise from MMC Print & Packaging."
        path="/services"
      />

      {/* Header */}

      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          Our Products & Services
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          High-quality print and packaging solutions tailored to your brand.
        </p>
      </section>

      {/* Service Cards */}

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={service.title}
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
              images={service.images}
              alt={service.title}
              position={service.position}
              positions={service.positions}
              contain={service.contain}
              contains={service.contains}
              brightness={service.brightness}
              delay={index * 600}
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3">{service.title}</h2>

              <ul className="space-y-2 text-gray-600">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />

                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}

      <ProjectCTA />
    </main>
  );
}
