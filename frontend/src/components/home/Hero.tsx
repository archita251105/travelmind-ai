import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Sparkles, Plane } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100 pt-36 pb-24">
      <div className="absolute -top-32 left-10 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-300/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow">
            <Sparkles size={16} /> Powered by Gemini AI
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">
            Plan Your Dream Trip with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              AI
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            TravelMind AI creates personalized itineraries, hotel ideas, food
            recommendations, packing lists and travel tips in seconds.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/planner"
              className="rounded-full bg-blue-600 px-8 py-4 text-center font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              ✨ Start Planning
            </Link>

            <a
              href="#features"
              className="rounded-full border border-slate-300 bg-white px-8 py-4 text-center font-semibold text-slate-700 shadow transition hover:border-blue-500 hover:text-blue-600"
            >
              Explore Features
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Bali", "Paris", "Tokyo", "Dubai"].map((city) => (
              <span key={city} className="rounded-full bg-white px-4 py-2 text-sm shadow">
                <MapPin size={14} className="mr-1 inline text-blue-600" />
                {city}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative flex justify-center"
        >
          <div className="relative h-80 w-80 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl lg:h-96 lg:w-96">
            <motion.div
              animate={{ y: [-12, 12, -12] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute inset-10 flex items-center justify-center rounded-full bg-white shadow-2xl"
            >
              <Plane className="rotate-45 text-blue-600" size={110} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;