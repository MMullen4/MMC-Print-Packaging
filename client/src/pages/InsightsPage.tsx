import { useState } from "react";
import ProjectCTA from "../components/ProjectCTA";
import { insights } from "../data/insights";

const filters = [
  "All",
  "Packaging",
  "Print",
  "Technology",
  "Sustainability",
  "Market News",
  "Around the Industry",
];

export default function InsightsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredInsights =
    activeFilter === "All"
      ? insights
      : insights.filter((insight) => insight.category === activeFilter);

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <section className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          Print & Packaging Insights
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Industry developments, technology, market trends and interesting
          perspectives from across the print and packaging world.
        </p>
      </section>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`
              px-4 py-2
              rounded-full
              border
              font-medium
              transition
              ${
                activeFilter === filter
                  ? "bg-blue-700 text-white border-blue-700"
                  : "bg-white text-gray-700 border-gray-300 hover:border-blue-700 hover:text-blue-700"
              }
            `}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Articles */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-start">
        {filteredInsights.map((insight) => (
          <article
            key={insight.id}
            className="
              bg-white
              border border-gray-200
              rounded-xl
              shadow-sm
              hover:shadow-lg
              transition
              duration-300
              overflow-hidden
              flex flex-col
            "
          >
            {insight.image && (
              <a
                href={insight.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-72 object-contain bg-gray-50 p-2"
                />
              </a>
            )}

            {/* Category */}
            <div className="px-6 pt-6">
              <div className="flex justify-between items-center gap-4 mb-4">
                <span
                  className={`
                    text-sm
                    font-semibold
                    px-3 py-1
                    rounded-full
                    ${
                      insight.type === "linkedin"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-700"
                    }
                  `}
                >
                  {insight.category}
                </span>

                <span className="text-sm text-gray-400">{insight.date}</span>
              </div>

              <h2 className="text-xl font-bold mb-3 leading-snug">
                {insight.title}
              </h2>

              <p className="text-gray-600 leading-relaxed">{insight.summary}</p>
            </div>

            {/* Why It Matters */}
            {insight.whyItMatters && (
              <div className="mx-6 mt-5 p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold text-gray-900 mb-1">
                  Why it matters
                </p>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {insight.whyItMatters}
                </p>
              </div>
            )}

            {/* Link */}
            {insight.link && (
              <div className="px-6 py-5 mt-auto">
                <a
                  href={insight.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-semibold hover:text-blue-900"
                >
                  {insight.type === "linkedin"
                    ? "View on LinkedIn →"
                    : "Read More →"}
                </a>
              </div>
            )}
          </article>
        ))}
      </section>

      {filteredInsights.length === 0 && (
        <div className="text-center py-16 text-gray-500">
          No articles in this category yet.
        </div>
      )}

      <ProjectCTA />
    </main>
  );
}
