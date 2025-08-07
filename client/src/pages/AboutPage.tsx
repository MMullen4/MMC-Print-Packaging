export default function AboutPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center">
      <img
        src="/assets/profile.jpg"
        alt="Founder"
        className="rounded-full w-40 h-40 mx-auto mb-6"
      />
      <h2 className="text-3xl font-semibold mb-4">About Us</h2>
      <p>
        With years of experience in print and packaging, MMC brings strategic
        insight and unmatched customer service. Let’s turn your ideas into print
        reality.
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <a href="https://www.mullenconsulting.biz/about" target="_blank">
          LinkedIn
        </a>
        <a href="https://www.instagram.com/mhmullen4/" target="_blank">
          Instagram
        </a>
      </div>
    </div>
  );
}
