import { useState } from "react";

import PlannerHeader from "../components/planner/PlannerHeader";
import PlannerStats from "../components/planner/PlannerStats";
import PlannerForm from "../components/planner/PlannerForm";
import LoadingCard from "../components/planner/LoadingCard";
import TripDashboard from "../components/planner/TripDashboard";
import api from "../services/api";

const Planner = () => {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("");
  const [style, setStyle] = useState("Adventure");

  const [loading, setLoading] = useState(false);
  const [tripPlan, setTripPlan] = useState<any>(null);

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

      setTripPlan(response.data.tripPlan);
    } catch (err) {
      console.error(err);
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-24">
      <div className="mx-auto max-w-6xl px-6">

        <PlannerHeader />

        <PlannerStats />

        <PlannerForm
          destination={destination}
          days={days}
          budget={budget}
          style={style}
          loading={loading}
          onDestinationChange={setDestination}
          onDaysChange={setDays}
          onBudgetChange={setBudget}
          onStyleChange={setStyle}
          onGenerate={generateTrip}
        />

        {loading && <LoadingCard />}

        {tripPlan && (
  <TripDashboard
    tripPlan={tripPlan}
    onReset={resetForm}
  />
)}
      </div>
    </div>
  );
};

export default Planner;