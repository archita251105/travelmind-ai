import { useState } from "react";
import LoadingCard from "../components/planner/LoadingCard";
import TripDashboard from "../components/planner/TripDashboard";
import type { TripPlan } from "../types/trip";
import api from "../services/api";


const Planner = () => {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("");
  const [style, setStyle] = useState("Adventure");
  const [loading, setLoading] = useState(false);
  const [tripPlan, setTripPlan] = useState<TripPlan | null>(null);

  const generateTrip = async () => {
    if (!destination || !days || !budget || !style) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);
      setTripPlan(null);

      const response = await api.post("/api/plan-trip", {
        destination,
        days,
        budget,
        style,
      });

      setTripPlan(response.data.tripPlan as TripPlan);
    } catch (error) {
      console.error(error);
      alert("Failed to generate trip.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setDestination("");
    setDays("");
    setBudget("");
    setStyle("Adventure");
    setTripPlan(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-5xl font-bold text-center">AI Trip Planner</h1>

        <p className="mt-4 text-center text-slate-600">
          Let AI create your perfect travel itinerary.
        </p>

        <div className="mt-12 rounded-3xl bg-white p-8 shadow-xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="font-semibold">Destination</label>
              <input
                type="text"
                placeholder="e.g. Bali"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="mt-2 w-full rounded-xl border p-4"
              />
            </div>

            <div>
              <label className="font-semibold">Number of Days</label>
              <input
                type="number"
                placeholder="5"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                className="mt-2 w-full rounded-xl border p-4"
              />
            </div>

            <div>
              <label className="font-semibold">Budget</label>
              <input
                type="text"
                placeholder="₹80,000"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="mt-2 w-full rounded-xl border p-4"
              />
            </div>

            <div>
              <label className="font-semibold">Travel Style</label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="mt-2 w-full rounded-xl border p-4"
              >
                <option>Adventure</option>
                <option>Luxury</option>
                <option>Budget</option>
                <option>Family</option>
                <option>Solo</option>
                <option>Romantic</option>
              </select>
            </div>
          </div>

          <button
            onClick={generateTrip}
            disabled={loading}
            className="mt-8 w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Generating..." : "Generate AI Trip"}
          </button>

          {loading && <LoadingCard />}

          {tripPlan && <TripDashboard tripPlan={tripPlan} onReset={resetForm} />}
        </div>
      </div>
    </div>
  );
};

export default Planner;