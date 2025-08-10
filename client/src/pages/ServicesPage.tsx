export default function ServicesPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Our Products & Services
      </h2>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <section>
          <h3 className="text-2xl font-bold mb-2 border-b-2 border-gray-300 pb-2">
            Print Marketing Solutions
          </h3>

          <ul className="list-disc list-inside">
            <li>Business Cards</li>
            <li>Flyers & Postcards</li>
            <li>Books & Brochures</li>
            <li>Signage & Banners (indoor and outdoor)</li>
            <li>Direct Mail</li>
          </ul>
        </section>
        <section>
          <h3 className="text-2xl font-bold mb-2 border-b-2 border-gray-300 pb-2">
            Packaging Solutions
          </h3>

          <ul className="list-disc list-inside">
            <li>Custom Boxes</li>
            <li>Labels</li>
            <li>Retail Displays</li>
          </ul>
        </section>
      </div>

      {/* Promotional Products Section */}
      <div className="mt-12 text-left">
        <h3 className="text-2xl font-bold mb-6 text-left border-b-2 border-gray-300 pb-2">
          Promotional Product Solutions
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xl font-semibold mb-2">Apparel</h4>
            <ul className="list-disc list-inside mb-4">
              <li>T-shirts & Polos</li>
              <li>Hoodies & Jackets</li>
              <li>Hats & Caps</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Office Items</h4>
            <ul className="list-disc list-inside mb-4">
              <li>Pens & Notebooks</li>
              <li>Mugs & Drinkware</li>
              <li>USB Drives</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Trade Show</h4>
            <ul className="list-disc list-inside mb-4">
              <li>Banners & Displays</li>
              <li>Table Covers</li>
              <li>Branded Giveaways</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Custom Items</h4>
            <ul className="list-disc list-inside mb-4">
              <li>Awards & Plaques</li>
              <li>Keychains & Magnets</li>
              <li>Bags & Totes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
