export default function HomePage() {
  return (
    <div className="p-8 text-center">
      <img
        src="/assets/logo.png"
        alt="MMC Logo"
        className="mx-auto mb-6 w-48"
      />
      <h1 className="text-4xl font-bold mb-4">
        Welcome to MMC Print & Packaging
      </h1>
      <p className="text-lg max-w-xl mx-auto">
        We deliver high-quality print marketing materials and custom packaging
        solutions that make your brand stand out.
      </p>
      <div className="bg-green-200 text-xl p-4">Tailwind is working!</div>
    </div>
  );
}
