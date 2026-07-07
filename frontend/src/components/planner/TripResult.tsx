type TripResultProps = {
  tripPlan: string;
  onReset: () => void;
};

const TripResult = ({ tripPlan, onReset }: TripResultProps) => {
  return (
    <div className="mt-10 rounded-3xl border bg-gradient-to-br from-white to-blue-50 p-8 shadow-xl">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-3xl font-bold text-slate-900">
          ✈️ Your AI Travel Plan
        </h2>

        <div className="flex gap-3">
          <button
            onClick={() => navigator.clipboard.writeText(tripPlan)}
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            📋 Copy Plan
          </button>

          <button
            onClick={onReset}
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            🔄 New Trip
          </button>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-inner">
        <pre className="whitespace-pre-wrap font-sans leading-8 text-slate-700">
          {tripPlan}
        </pre>
      </div>
    </div>
  );
};

export default TripResult;