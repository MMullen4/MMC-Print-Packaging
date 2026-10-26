export type Insight = {
  id: number;
  type: "news" | "linkedin" | "project";
  category: string;
  title: string;
  date: string;
  summary: string;
  whyItMatters?: string;
  link?: string;
  image?: string;
  video?: string;
};

export const insights: Insight[] = [
  {
    id: 7,
    type: "linkedin",
    category: "Promotional Products",
    title: "When Promotional Products Make a Lasting Impression",
    date: "October 21, 2026",
    summary:
      "A great example of how promotional products can leave a lasting impression! (And maybe gain you more business 😊",
    link: "https://www.linkedin.com/posts/joshua-j-wickstrom-1823786_this-is-guaranteed-to-get-a-good-laugh-i-share-7518311844441182208-qw1D/",
    image: "/assets/insights/promo-prod.png",
  },
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
    id: 5,
    type: "project",
    category: "Recent Projects",
    title: "Making an Impact with Large-Format Printing",
    date: "October 15, 2026",
    summary:
      "A look at a large-format banner (89 inches x 135 inches) produced for a client, demonstrating how print can create an immediate visual impact at scale.",
    whyItMatters:
      "Large-format graphics give brands an opportunity to command attention in ways that smaller printed pieces cannot. The right combination of imagery, production quality and scale can transform a space and reinforce a brand's presence.",
    video: "/assets/insights/marble-banner-project-cropped.mp4",
  },
  {
    id: 6,
    type: "news",
    category: "Industry News",
    title: "California Packaging Regulation Faces a Broader Legal Challenge",
    date: "October 9, 2026",
    summary:
      "Business and packaging trade groups challenging California's SB 343 recyclability-labeling law are seeking to expand their federal lawsuit to include SB 54, the state's extended producer responsibility and packaging source-reduction law.",
    whyItMatters:
      "The outcome could affect how packaging is designed, labeled and evaluated for recyclability in California. Brands and packaging suppliers should continue monitoring SB 343 and SB 54 as the legal challenges could influence compliance requirements, material choices and packaging costs.",
    link: "https://www.packagingdive.com/news/california-league-food-producers-lawsuit-sb343-sb54/832581/",
    image: "/assets/insights/California Packaging Laws and Recycling.png",
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
