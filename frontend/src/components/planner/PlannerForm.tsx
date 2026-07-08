type PlannerFormProps = {
  destination: string;
  days: string;
  budget: string;
  style: string;
  loading: boolean;
  onDestinationChange: (value: string) => void;
  onDaysChange: (value: string) => void;
  onBudgetChange: (value: string) => void;
  onStyleChange: (value: string) => void;
  onGenerate: () => void;
};

const travelStyles = [
  "Adventure",
  "Luxury",
  "Budget",
  "Family",
  "Solo",
  "Romantic",
];

const PlannerForm = ({
  destination,
  days,
  budget,
  style,
  loading,
  onDestinationChange,
  onDaysChange,
  onBudgetChange,
  onStyleChange,
  onGenerate,
}: PlannerFormProps) => {
  return (
    <div className="mt-12 rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-blue-100">
            📍 Destination
          </label>
          <input
            type="text"
            placeholder="e.g. Bali, Paris, Tokyo"
            value={destination}
            onChange={(e) => onDestinationChange(e.target.value)}
            className="mt-3 w-full rounded-2xl border border-white/20 bg-white/90 p-4 text-slate-900 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-blue-100">
            📅 Number of Days
          </label>
          <input
            type="number"
            placeholder="5"
            value={days}
            onChange={(e) => onDaysChange(e.target.value)}
            className="mt-3 w-full rounded-2xl border border-white/20 bg-white/90 p-4 text-slate-900 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-blue-100">
            💰 Budget
          </label>
          <input
            type="text"
            placeholder="₹80,000"
            value={budget}
            onChange={(e) => onBudgetChange(e.target.value)}
            className="mt-3 w-full rounded-2xl border border-white/20 bg-white/90 p-4 text-slate-900 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-blue-100">
            🎒 Travel Style
          </label>
          <select
            value={style}
            onChange={(e) => onStyleChange(e.target.value)}
            className="mt-3 w-full rounded-2xl border border-white/20 bg-white/90 p-4 text-slate-900 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20"
          >
            {travelStyles.map((travelStyle) => (
              <option key={travelStyle}>{travelStyle}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={onGenerate}
        disabled={loading}
        className="mt-8 w-full rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 py-4 text-lg font-bold text-white shadow-xl shadow-blue-900/30 transition hover:scale-[1.01] hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "✨ Generating your trip..." : "✨ Generate AI Trip"}
      </button>
    </div>
  );
};

export default PlannerForm;