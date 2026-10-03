function ServiceCard({
  image,
  images,
  title,
  items,
  contain,
  position = "center",
  scale = 1,
}: {
  image?: string;
  images?: string[];
  title: string;
  items: string[];
  contain?: boolean;
  position?: string;
  scale?: number;
}) {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white">
      <div className="relative h-48">
        {images ? (
          <div className="flex h-full">
            <img src={images[0]} alt={title} className="w-1/2 h-full object-contain rotate-90 bg-gray-50" />
            <img src={images[1]} alt={title} className="w-1/2 h-full object-contain bg-gray-50" />
          </div>
        ) : (
          <img src={image} alt={title} className={`w-full h-full ${contain ? "object-contain bg-gray-50" : "object-cover"}`} style={{ objectPosition: position, filter: "brightness(1.2)" }} />
        )}
        <div className="absolute inset-0 bg-black/40 flex items-end p-4">
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
    image: "/assets/Direct Mail2.avif",
    title: "Print Marketing Solutions",
    items: ["Business Cards", "Flyers & Postcards", "Books & Brochures", "Signage & Banners", "Direct Mail"],
  },
  {
    image: "/assets/boxes pic.avif",
    title: "Packaging Solutions",
    items: ["Custom Boxes", "Labels", "Retail Displays"],
  },
  {
    image: "/assets/Trademark Label.jpg",
    title: "Labels & Sleeves",
    items: ["Product Labels", "Shrink Sleeves", "Custom Die-Cut Labels"],
    contain: false,
  },
  {
    image: "/assets/install.jpg",
    title: "Signage & Installation",
    items: ["Indoor Signage", "Outdoor Banners", "Vehicle Wraps", "Wall Graphics"],
    contain: false,
  },
  {
    images: ["/assets/Kistler pens.jpg", "/assets/Kinecta bottle.jpg"],
    title: "Promotional Items",
    items: ["Pens & Notebooks", "Mugs & Drinkware", "USB Drives", "Keychains & Magnets"],
  },
  {
    image: "/assets/ZG.jpeg",
    title: "Branded Apparel & Merchandise",
    items: ["T-shirts & Polos", "Hoodies & Jackets", "Hats & Caps", "Bags & Totes"],
    position: "center 5%",
  },
];

export default function ServicesPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-2 text-center">Our Products & Services</h2>
      <p className="text-center text-gray-500 mb-10">High-quality print and packaging solutions tailored to your brand.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <ServiceCard key={s.title} image={(s as any).image} images={(s as any).images} title={s.title} items={s.items} contain={(s as any).contain} position={(s as any).position} scale={(s as any).scale} />
        ))}
      </div>
    </div>
  );
}
