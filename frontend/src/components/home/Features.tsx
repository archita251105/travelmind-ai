import { motion, type Variants } from "framer-motion";
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
    glow: "from-blue-500/40 to-violet-500/40",
    accent: "text-blue-400",
  },
  {
    icon: MapPinned,
    title: "Smart Destinations",
    description:
      "Discover hidden gems, attractions, and must-visit places worldwide.",
    glow: "from-violet-500/40 to-purple-500/40",
    accent: "text-violet-400",
  },
  {
    icon: Wallet,
    title: "Budget Estimator",
    description:
      "Estimate travel expenses based on your destination and trip duration.",
    glow: "from-cyan-500/40 to-blue-500/40",
    accent: "text-cyan-400",
  },
  {
    icon: CloudSun,
    title: "Weather Forecast",
    description:
      "Get live weather updates before and during your journey.",
    glow: "from-indigo-500/40 to-blue-500/40",
    accent: "text-indigo-400",
  },
  {
    icon: Compass,
    title: "Travel Recommendations",
    description:
      "Receive hotel, restaurant, and activity suggestions tailored for you.",
    glow: "from-purple-500/40 to-violet-500/40",
    accent: "text-purple-400",
  },
  {
    icon: Clock3,
    title: "Instant Planning",
    description:
      "Create a complete day-by-day itinerary in just a few seconds.",
    glow: "from-blue-500/40 to-cyan-500/40",
    accent: "text-sky-400",
  },
];

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: "easeOut" as const,
    },
  }),
};

const Features = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 py-28 md:py-32"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-blue-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-violet-500/15 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300/80">
            Features
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Everything You Need For{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
              Smart Travel
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            TravelMind AI combines artificial intelligence, travel planning,
            budgeting, weather forecasting and destination discovery into one
            beautiful platform.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group relative"
              >
                {/* Animated gradient border */}
                <motion.div
                  className="absolute -inset-px rounded-2xl opacity-40 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4, #6366f1, #3b82f6)",
                    backgroundSize: "300% 100%",
                  }}
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Glass card */}
                <div className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-shadow duration-500 group-hover:shadow-[0_16px_48px_rgba(99,102,241,0.2)]">
                  {/* Icon with soft glow */}
                  <div className="relative mb-6 inline-flex">
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.glow} blur-xl`}
                    />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-lg backdrop-blur-sm">
                      <Icon size={30} className={feature.accent} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-4 flex-1 text-base leading-7 text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
