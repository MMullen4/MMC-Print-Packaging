import { useEffect, useState } from "react";
import ProjectCTA from "../components/ProjectCTA";
import SEO from "../components/SEO";

function ServiceCard({
  image,
  images,
  currentImage = 0,
  title,
  items,
  contain,
  position = "center",
}: {
  image?: string;
  images?: string[];
  currentImage?: number;
  title: string;
  items: string[];
  contain?: boolean;
  position?: string;
}) {
  const cardImages = images ?? (image ? [image] : []);

  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white">
      <div className="relative h-48 bg-gray-50 overflow-hidden">
        {cardImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`${title} example ${index + 1}`}
            className={`
              absolute inset-0
              w-full h-full
              ${contain ? "object-contain p-3" : "object-cover"}
              transition-opacity duration-300 ease-in-out
              ${index === currentImage ? "opacity-100" : "opacity-0"}
            `}
            style={{
              objectPosition: position,
              filter: "brightness(1.1)",
            }}
          />
        ))}

        <div className="absolute inset-0 bg-black/20 flex items-end p-4">
          <h3 className="text-white text-xl font-bold">{title}</h3>
        </div>
      </div>

      <ul className="p-5 space-y-1 text-gray-700">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

const services = [
  {
    images: ["/assets/Direct Mail2.avif", "/assets/Loan Queen card.jpg"],
    title: "Print Marketing Solutions",
    items: [
      "Business Cards",
      "Flyers & Postcards",
      "Books & Brochures",
      "Signage & Banners",
      "Direct Mail",
    ],
  },

  {
    images: [
      "/assets/boxes pic.avif",
      "/assets/Endless Summer Box.png",
      "/assets/Gift Bags.png",
    ],
    title: "Packaging Solutions",
    items: ["Custom Boxes & Bags", "Labels", "Retail Displays"],
  },

  {
    images: ["/assets/sleeve.jpg", "/assets/Trademark Label.jpg"],
    title: "Labels & Sleeves",
    items: ["Product Labels", "Package Sleeves", "Custom Die-Cut Labels"],
    contain: false,
  },

  {
    images: [
      "/assets/install.jpg",
      "/assets/FlexTech install.avif",
      "/assets/Schopp install2.jpg",
      "/assets/EDU Vehicle Sign.png",
    ],
    title: "Signage & Installation",
    items: [
      "Indoor / Outdoor Signage & Banners",
      "Auto Magnets",
      "Wall Graphics",
    ],
    contain: false,
    position: "center 35%",
  },

  {
    images: [
      "/assets/Elegant Silver Pen with Script K Logo.png",
      "/assets/Kinecta bottle.jpg",
    ],
    title: "Promotional Items",
    items: [
      "Pens & Notebooks",
      "Mugs & Drinkware",
      "USB Drives",
      "Keychains & Magnets",
    ],
    contain: true,
  },

  {
    images: [
      "/assets/ZG.jpeg",
      "/assets/Kona Brewing Visors.png",
    ],
    title: "Branded Apparel & Merchandise",
    items: [
      "T-shirts & Polos",
      "Hoodies & Jackets",
      "Hats & Caps",
      "Bags & Totes",
    ],
    position: "center 5%",
  },
];

export default function ServicesPage() {
  // Tracks which image is currently displayed for each service card.
  const [imageIndexes, setImageIndexes] = useState(services.map(() => 0));

  // Start before the first card so the first rotating card
  // is selected on the first interval.
  const [activeCard, setActiveCard] = useState(-1);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveCard((currentCard) => {
        let nextCard = currentCard;

        // Find the next card containing multiple images.
        for (let i = 1; i <= services.length; i++) {
          const candidate =
            (currentCard + i + services.length) % services.length;

          const images = (services[candidate] as any).images as
            | string[]
            | undefined;

          if (images && images.length > 1) {
            nextCard = candidate;
            break;
          }
        }

        // Advance only the image belonging to that card.
        setImageIndexes((currentIndexes) => {
          const nextIndexes = [...currentIndexes];

          const images = (services[nextCard] as any).images as
            | string[]
            | undefined;

          if (images && images.length > 1) {
            nextIndexes[nextCard] = (nextIndexes[nextCard] + 1) % images.length;
          }

          return nextIndexes;
        });

        return nextCard;
      });
    }, 2000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <SEO
        title="Printing & Packaging Services | MMC Print & Packaging"
        description="Commercial printing, custom packaging, labels, signage, banners, promotional products and branded merchandise from MMC Print & Packaging."
        path="/services"
      />

      <h2 className="text-3xl font-semibold mb-2 text-center">
        Our Products & Services
      </h2>

      <p className="text-center text-gray-500 mb-10">
        High-quality print and packaging solutions tailored to your brand.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            image={(service as any).image}
            images={(service as any).images}
            currentImage={imageIndexes[index]}
            title={service.title}
            items={service.items}
            contain={(service as any).contain}
            position={(service as any).position}
          />
        ))}
      </div>

      {/* Project CTA */}
      <ProjectCTA />
    </div>
  );
}
