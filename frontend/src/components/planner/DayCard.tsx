import type { TripPlan } from "../../types/trip";

type Props = {
  day: TripPlan["days"][number];
};

const DayCard = ({ day }: Props) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-3xl font-bold text-blue-600">
          📅 Day {day.day}
        </h3>

        <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
          {day.estimatedCost}
        </span>
      </div>

      <div className="grid gap-5">
        <div className="rounded-2xl bg-orange-50 p-5">
          <h4 className="mb-2 font-bold text-orange-700">🌅 Morning</h4>
          <p className="leading-8 text-slate-700">{day.morning}</p>
        </div>

        <div className="rounded-2xl bg-yellow-50 p-5">
          <h4 className="mb-2 font-bold text-yellow-700">☀️ Afternoon</h4>
          <p className="leading-8 text-slate-700">{day.afternoon}</p>
        </div>

        <div className="rounded-2xl bg-indigo-50 p-5">
          <h4 className="mb-2 font-bold text-indigo-700">🌙 Evening</h4>
          <p className="leading-8 text-slate-700">{day.evening}</p>
        </div>
      </div>
    </div>
  );
};

export default DayCard;