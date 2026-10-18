import SEO from "../components/SEO";
import ProjectCTA from "../components/ProjectCTA";

export default function MockupsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <SEO
        title="3D Packaging Mockups | MMC Print & Packaging"
        description="Visualize your custom packaging before production with interactive 3D packaging mockups from MMC Print & Packaging."
        path="/3d-mockups"
      />

      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          Visualize Your Packaging in 3D
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Explore packaging concepts before production. MMC can create realistic
          3D packaging mockups using your artwork, dimensions and packaging
          structure.
        </p>
      </section>

      {/* Interactive 3D Mockup */}
      <section className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <p className="text-blue-600 font-semibold mb-2">
            Interactive Packaging Visualization
          </p>

          <h2 className="text-3xl font-bold mb-5">
            See Your Packaging Before It's Produced
          </h2>

          <p className="text-gray-600 leading-relaxed mb-5">
            A 3D mockup allows you to evaluate the size, structure, artwork and
            overall presentation of your packaging before moving into
            production.
          </p>

          <p className="text-gray-600 leading-relaxed mb-5">
            Rotate the carton and inspect it from different angles to get a
            better understanding of how the finished package will look.
          </p>

          <p className="font-semibold text-gray-800">
            Click and drag the package to explore the 3D model.
          </p>
        </div>

        <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-gray-200 shadow-lg bg-gray-50">
          <iframe
            title="Interactive MMC 3D packaging mockup"
            src="https://www.pacdora.com/share?filter_url=ps5lcnjlku"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">
            From Concept to Production
          </h2>

          <p className="text-gray-600">
            MMC can help turn your packaging concept into a production-ready
            solution.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">1</div>

            <h3 className="font-bold mb-2">Choose a Structure</h3>

            <p className="text-gray-600 text-sm">
              Select the carton or packaging style that fits your product.
            </p>
          </div>

          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">2</div>

            <h3 className="font-bold mb-2">Set Dimensions</h3>

            <p className="text-gray-600 text-sm">
              Build the package around your product requirements.
            </p>
          </div>

          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">3</div>

            <h3 className="font-bold mb-2">Apply Artwork</h3>

            <p className="text-gray-600 text-sm">
              Preview branding, graphics and messaging on the package.
            </p>
          </div>

          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">4</div>

            <h3 className="font-bold mb-2">Produce</h3>

            <p className="text-gray-600 text-sm">
              Work with MMC to move the approved concept into production.
            </p>
          </div>
        </div>
      </section>

      <ProjectCTA />
    </main>
  );
}
