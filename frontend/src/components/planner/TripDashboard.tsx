import DestinationBanner from "./DestinationBanner";
import type { TripPlan } from "../../types/trip";
import DayCard from "./DayCard";
import TravelListCard from "./TravelListCard";
import TripOverview from "./TripOverview";

type Props = {
  tripPlan: TripPlan;
  onReset: () => void;
};

const TripDashboard = ({ tripPlan, onReset }: Props) => {
  const copyPlan = () => {
    navigator.clipboard.writeText(JSON.stringify(tripPlan, null, 2));
  };

  return (
    <div className="mt-10 space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-3xl font-bold text-slate-900">
          ✈️ Your AI Travel Plan
        </h2>

        <div className="flex gap-3">
          <button
            onClick={copyPlan}
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
      <DestinationBanner
        destination={tripPlan.overview.destination}
      />
      <TripOverview overview={tripPlan.overview} />

      <div className="grid gap-6">
        {tripPlan.days.map((day) => (
          <DayCard key={day.day} day={day} />
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <TravelListCard title="🏨 Hotel Recommendations" items={tripPlan.hotels} />
        <TravelListCard title="🍽 Food Recommendations" items={tripPlan.restaurants} />
        <TravelListCard title="🎒 Packing Checklist" items={tripPlan.packing} />
        <TravelListCard title="⚠️ Safety Tips" items={tripPlan.tips} />
        <TravelListCard title="📍 Hidden Gems" items={tripPlan.hiddenGems} />
      </div>
    </div>
  );
};

export default TripDashboard;