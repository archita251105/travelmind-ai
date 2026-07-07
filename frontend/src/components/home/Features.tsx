import { motion } from "framer-motion";
import {
  BrainCircuit,
  MapPinned,
  Wallet,
  CloudSun,
  Compass,
  Clock3,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Trip Planning",
    description:
      "Generate personalized travel itineraries in seconds using Gemini AI.",
  },
  {
    icon: MapPinned,
    title: "Smart Destinations",
    description:
      "Discover hidden gems, attractions, and must-visit places worldwide.",
  },
  {
    icon: Wallet,
    title: "Budget Estimator",
    description:
      "Estimate travel expenses based on your destination and trip duration.",
  },
  {
    icon: CloudSun,
    title: "Weather Forecast",
    description:
      "Get live weather updates before and during your journey.",
  },
  {
    icon: Compass,
    title: "Travel Recommendations",
    description:
      "Receive hotel, restaurant, and activity suggestions tailored for you.",
  },
  {
    icon: Clock3,
    title: "Instant Planning",
    description:
      "Create a complete day-by-day itinerary in just a few seconds.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-widest text-blue-600">
            Features
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Everything You Need For
            <span className="text-blue-600"> Smart Travel</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            TravelMind AI combines artificial intelligence, travel planning,
            budgeting, weather forecasting and destination discovery into one
            beautiful platform.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-white/60 bg-white p-8 shadow-lg transition"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon
                    size={32}
                    className="text-blue-600"
                  />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </motion.div>

            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Features;