import { useState } from "react";
import api from "../services/api";

const Planner = () => {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("");
  const [style, setStyle] = useState("Adventure");
  const [loading, setLoading] = useState(false);
  const [tripPlan, setTripPlan] = useState("");

  const generateTrip = async () => {
    if (!destination || !days || !budget || !style) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);
      setTripPlan("");

      const response = await api.post("/api/plan-trip", {
        destination,
        days,
        budget,
        style,
      });

      setTripPlan(response.data.tripPlan);
    } catch (error) {
      console.error(error);
      alert("Failed to generate trip.");
    } finally {
      setLoading(false);
    }
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
          {loading && (
            <div className="mt-8 rounded-2xl bg-blue-50 p-6 text-center animate-pulse">
              <p className="text-lg font-semibold text-blue-700">
                ✨ AI is planning your perfect trip...
              </p>

              <p className="mt-2 text-slate-600">
                Finding destinations, hotels, restaurants and travel tips...
              </p>
            </div>
          )}

          {tripPlan && (
            <div className="mt-10 rounded-3xl border bg-gradient-to-br from-white to-blue-50 p-8 shadow-xl">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-3xl font-bold text-slate-900">
                  ✈️ Your AI Travel Plan
                </h2>

                <button
                  onClick={() => navigator.clipboard.writeText(tripPlan)}
                  className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Copy Plan
                </button>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-inner">
                <pre className="whitespace-pre-wrap font-sans text-slate-700 leading-8">
                  {tripPlan}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Planner;