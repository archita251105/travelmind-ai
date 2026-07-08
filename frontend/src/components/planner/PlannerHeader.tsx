const PlannerHeader = () => {
  return (
    <div className="text-center">
      <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100 backdrop-blur">
        ✨ Powered by Gemini AI
      </p>

      <h1 className="mt-6 text-5xl font-extrabold text-white md:text-6xl">
        Plan Your Perfect Trip
      </h1>

      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
        Tell us your destination, budget and travel style. TravelMind AI will
        generate a personalized itinerary in seconds.
      </p>
    </div>
  );
};

export default PlannerHeader;