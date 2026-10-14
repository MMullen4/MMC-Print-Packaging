export type Insight = {
  id: number;
  type: "news" | "linkedin";
  category: string;
  title: string;
  date: string;
  summary: string;
  whyItMatters?: string;
  link?: string;
  image?: string;
};

export const insights: Insight[] = [
  {
    id: 4,
    type: "linkedin",
    category: "Around the Industry",
    title: "Packaging Design That Makes the Product Benefit Clear",
    date: "October 14, 2026",
    summary:
      "Susan Jennings shares a packaging refresh for 3 Farm Daughters pasta that puts the product's high-fiber benefit front and center while improving brand recognition and shelf presence.",
    whyItMatters:
      "Effective packaging has only a few seconds to communicate with a shopper. Clear benefit messaging, strong visual hierarchy and shelf differentiation can turn the package itself into an important sales tool.",
    link: "https://www.linkedin.com/posts/susan-jennings-design_branddesign-packagingdesign-cpg-share-7514313741031895040-h0FA/",
    image: "/assets/insights/3-farm-daughters.jpg",
  },
  {
    id: 1,
    type: "news",
    category: "Packaging",
    title: "Digital Printing Expands Opportunities for Short-Run Packaging",
    date: "October 14, 2026",
    summary:
      "Advances in digital printing continue to make shorter packaging runs, versioned packaging and customized production more practical.",
    whyItMatters:
      "Brands can test designs, produce regional versions and reduce inventory commitments without requiring large traditional print runs.",
  },
  {
    id: 2,
    type: "news",
    category: "Technology",
    title: "Automation Continues to Change Print and Packaging Production",
    date: "October 14, 2026",
    summary:
      "Printers and converters continue to invest in automation across prepress, production, finishing and workflow management.",
    whyItMatters:
      "More automated production can improve turnaround times, consistency and the economics of shorter production runs.",
  },

];
