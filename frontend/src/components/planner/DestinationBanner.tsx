type Props = {
  destination: string;
};

const DestinationBanner = ({ destination }: Props) => {
  return (
    <div className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 p-10 text-white shadow-2xl">
      <div className="absolute right-6 top-4 text-8xl opacity-20">
        🌍
      </div>

      <p className="text-sm uppercase tracking-[0.3em] text-blue-100">
        Your Next Adventure
      </p>

      <h1 className="mt-3 text-5xl font-extrabold">
        {destination}
      </h1>

      <p className="mt-3 max-w-2xl text-blue-100">
        AI has prepared a personalized itinerary including attractions,
        hotels, restaurants, travel tips and packing recommendations.
      </p>
    </div>
  );
};

export default DestinationBanner;