export default function ServicesPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">Our Services</h2>
      <section className="mb-8">
        <h3 className="text-2xl font-bold mb-2">Print Marketing</h3>
        <ul className="list-disc list-inside">
          <li>Business Cards</li>
          <li>Flyers & Postcards</li>
          <li>Brochures</li>
        </ul>
      </section>
      <section>
        <h3 className="text-2xl font-bold mb-2">Packaging</h3>
        <ul className="list-disc list-inside">
          <li>Custom Boxes</li>
          <li>Labels</li>
          <li>Retail Displays</li>
        </ul>
      </section>
    </div>
  );
}
