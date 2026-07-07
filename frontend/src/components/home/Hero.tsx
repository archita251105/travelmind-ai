import { motion } from "framer-motion";
import { Plane, MapPin, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100 pt-36 pb-24">
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <Sparkles size={16} />
              AI Powered Travel Planner
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
              Plan Your Dream Trip with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                AI
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-600">
              Create personalized itineraries, discover amazing destinations,
              estimate travel costs and explore the world with the power of AI.
            </p>

            {/* Search */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <div className="flex flex-1 items-center rounded-full border border-slate-200 bg-white px-5 py-4 shadow-md">
                <MapPin className="mr-3 text-blue-500" size={20} />

                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  className="w-full bg-transparent outline-none"
                />
              </div>

              <button className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105">
                Plan Trip
              </button>

            </div>

            {/* Popular */}
            <div className="mt-8 flex flex-wrap gap-3">

              {["Paris", "Tokyo", "Bali", "Dubai"].map((city) => (
                <span
                  key={city}
                  className="rounded-full bg-white px-4 py-2 text-sm shadow"
                >
                  ✈ {city}
                </span>
              ))}

            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">

              <div className="h-96 w-96 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 opacity-20 blur-3xl"></div>

              <motion.div
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="flex h-64 w-64 items-center justify-center rounded-full bg-white shadow-2xl">

                  <Plane
                    size={90}
                    className="rotate-45 text-blue-600"
                  />

                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;