export default function TopHeroSection({
  heroTitle,
  heroSubtitle,
  topHeroImage,
}: {
  heroTitle: string;
  heroSubtitle: string;
  topHeroImage: string;
}) {
  return (
    <section className="bg-neutral-950 py-2 md:py-4">
      <div
        className="relative wrapper h-[50vh] bg-cover bg-center bg-no-repeat rounded-xl"
        style={{ backgroundImage: `url(${topHeroImage})` }}
      >
        <div className="absolute top-0 h-full w-full bg-neutral-950/60 md:bg-transparent md:bg-gradient-to-r md:from-neutral-950/80" />
        <div className="relative p-12">
          <h1 className="text-neutral-50 font-bold text-center md:text-start text-[2rem] md:text-[3rem]">
            {heroTitle}
          </h1>
          <h2 className="text-neutral-200 font-medium text-center md:text-start text-[0.8rem] md:text-[1rem]">
            {heroSubtitle}
          </h2>
        </div>
      </div>
    </section>
  );
}
