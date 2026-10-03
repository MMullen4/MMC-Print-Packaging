export default function HomePage() {
  return (
    <div className="px-4 py-8 sm:p-8 text-center">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4">
        Welcome to MMC Print & Packaging
      </h1>
      <p className="text-base sm:text-lg max-w-xl mx-auto">
        We deliver high-quality print marketing materials and custom packaging
        solutions that make your brand stand out.
      </p>
      <div className="flex justify-center gap-4 mt-7">
        <img src="/assets/boxes pic.avif" alt="Print Example" className="w-2/5 sm:w-1/4 rounded-lg shadow-lg object-cover object-left" />
        <img src="/assets/Kinecta bottle.jpg" alt="Packaging Example" className="w-2/5 sm:w-1/4 rounded-lg shadow-lg" />
      </div>
    </div>
  );
}
