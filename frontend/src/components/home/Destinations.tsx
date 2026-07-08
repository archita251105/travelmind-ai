import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, MapPin, ArrowRight } from "lucide-react";

const destinations = [
  {
    name: "Bali",
    country: "Indonesia",
    description:
      "Tropical temples, rice terraces, and serene beaches perfect for a soulful escape.",
    rating: "4.9",
    gradient: "from-emerald-600 via-teal-700 to-cyan-900",
    overlay: "from-emerald-500/20 to-transparent",
  },
  {
    name: "Paris",
    country: "France",
    description:
      "Iconic landmarks, world-class cuisine, and romantic boulevards in the City of Light.",
    rating: "4.9",
    gradient: "from-rose-600 via-purple-800 to-indigo-950",
    overlay: "from-rose-400/20 to-transparent",
  },
  {
    name: "Tokyo",
    country: "Japan",
    description:
      "Neon-lit streets, ancient shrines, and unmatched culinary adventures await.",
    rating: "4.8",
    gradient: "from-fuchsia-700 via-violet-900 to-slate-950",
    overlay: "from-fuchsia-500/20 to-transparent",
  },
  {
    name: "Dubai",
    country: "UAE",
    description:
      "Futuristic skylines, desert safaris, and luxury experiences beyond imagination.",
    rating: "4.8",
    gradient: "from-amber-600 via-orange-800 to-slate-950",
    overlay: "from-amber-400/20 to-transparent",
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
      delay: i * 0.12,
      ease: "easeOut" as const,
    },
  }),
};

const Destinations = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 py-28 md:py-32">
      <div className="pointer-events-none absolute -top-20 right-1/4 h-80 w-80 rounded-full bg-violet-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-[90px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300/80">
            Explore
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Popular{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
              Destinations
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-400">
            Let AI recommend your next unforgettable adventure.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((place, index) => (
            <motion.div
              key={place.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ scale: 1.04, transition: { duration: 0.25 } }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${place.gradient}`}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${place.overlay}`}
              />

              {/* Decorative shapes */}
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-white/5 blur-xl" />

              <div className="relative flex h-full min-h-[380px] flex-col justify-between p-6">
                {/* Rating badge */}
                <div className="flex items-start justify-between">
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-semibold text-white backdrop-blur-md">
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    {place.rating}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div className="mb-1 flex items-center gap-1.5 text-sm text-white/70">
                    <MapPin size={14} />
                    {place.country}
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {place.name}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    {place.description}
                  </p>

                  <Link
                    to="/planner"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                  >
                    Plan Trip
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
