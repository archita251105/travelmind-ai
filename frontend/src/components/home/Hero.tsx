import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin,
  Sparkles,
  Plane,
  Globe,
  Camera,
  Compass,
  Shield,
  Zap,
  Star,
  Users,
  Clock,
  CheckCircle2,
} from "lucide-react";

const cities = ["Bali", "Paris", "Tokyo", "Dubai"];

const stats = [
  { value: "50K+", label: "Trips Generated", icon: Plane },
  { value: "120+", label: "Countries Covered", icon: Globe },
  { value: "98%", label: "Happy Travelers", icon: Star },
  { value: "< 30s", label: "Avg. Plan Time", icon: Clock },
];

const trustBadges = [
  { icon: Sparkles, label: "Powered by Gemini AI" },
  { icon: Zap, label: "Instant Itineraries" },
  { icon: Shield, label: "No Sign-up Required" },
  { icon: CheckCircle2, label: "Free to Use" },
];

const floatingIcons = [
  { Icon: Plane, top: "12%", left: "8%", delay: 0, size: 22 },
  { Icon: Globe, top: "22%", right: "12%", delay: 0.4, size: 26 },
  { Icon: Camera, top: "58%", left: "5%", delay: 0.8, size: 20 },
  { Icon: Compass, top: "68%", right: "8%", delay: 1.2, size: 24 },
  { Icon: MapPin, top: "38%", right: "22%", delay: 0.6, size: 18 },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const Hero = () => {
  return (
    <section className="relative min-h-screen scroll-mt-24 overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 pt-40 pb-20 md:pt-44">
      {/* Ambient gradient orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-[400px] w-[400px] rounded-full bg-violet-500/25 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-cyan-500/15 blur-[90px]" />

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating travel icons */}
      {floatingIcons.map(({ Icon, delay, size, ...pos }, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute hidden rounded-2xl border border-white/10 bg-white/5 p-3 shadow-lg backdrop-blur-md sm:block"
          style={pos}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
            y: [0, -14, 0],
            rotate: [0, 6, -6, 0],
          }}
          transition={{
            opacity: { duration: 4, repeat: Infinity, delay },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" as const, delay },
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" as const, delay },
          }}
        >
          <Icon size={size} className="text-blue-300" />
        </motion.div>
      ))}

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Main hero grid */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          {/* Left — copy & CTAs */}
          <div>
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-200 shadow-lg backdrop-blur-md"
            >
              <Sparkles size={15} className="text-violet-300" />
              Powered by Gemini AI
              <span className="ml-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-300">
                v2.5 Flash
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-7 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Plan Your Dream Trip with{" "}
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
                AI Precision
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
            >
              TravelMind AI creates personalized itineraries, hotel ideas, food
              recommendations, packing lists and travel tips in seconds.
            </motion.p>

            {/* Glowing CTAs */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                to="/planner"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-8 py-4 text-center font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-300 hover:shadow-[0_0_45px_rgba(99,102,241,0.7)] hover:brightness-110"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-violet-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative flex items-center gap-2">
                  <Sparkles size={18} />
                  Start Planning
                </span>
              </Link>

              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-center font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                Explore Features
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-wrap gap-3"
            >
              {trustBadges.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-sm sm:text-sm"
                >
                  <Icon size={13} className="text-blue-400" />
                  {label}
                </span>
              ))}
            </motion.div>

            {/* Popular destinations */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <span className="text-sm font-medium text-slate-400">
                Popular:
              </span>
              {cities.map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200 backdrop-blur-sm transition-colors hover:border-blue-400/40 hover:bg-white/10"
                >
                  <MapPin size={12} className="text-blue-400" />
                  {city}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — glassmorphism preview card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-500/20 to-violet-500/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg">
                    <Plane size={20} className="-rotate-45 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      AI Trip Preview
                    </p>
                    <p className="text-xs text-slate-400">
                      Generated in 12 seconds
                    </p>
                  </div>
                </div>
                <span className="flex items-center gap-1 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Live
                </span>
              </div>

              <div className="space-y-3">
                {[
                  {
                    day: "Day 1",
                    title: "Arrival & Beach Sunset",
                    time: "Morning → Evening",
                  },
                  {
                    day: "Day 2",
                    title: "Temple Tour & Local Cuisine",
                    time: "Full Day Adventure",
                  },
                  {
                    day: "Day 3",
                    title: "Hidden Gems & Night Markets",
                    time: "Culture & Food",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.day}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.15 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:bg-white/10"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                        {item.day}
                      </span>
                      <span className="text-xs text-slate-400">{item.time}</span>
                    </div>
                    <p className="mt-1 font-semibold text-white">{item.title}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { label: "Hotels", count: "3" },
                  { label: "Restaurants", count: "5" },
                  { label: "Tips", count: "8" },
                ].map((chip) => (
                  <div
                    key={chip.label}
                    className="rounded-xl border border-white/10 bg-white/5 py-3 text-center backdrop-blur-sm"
                  >
                    <p className="text-lg font-bold text-white">{chip.count}</p>
                    <p className="text-xs text-slate-400">{chip.label}</p>
                  </div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 backdrop-blur-sm"
              >
                <Users size={16} className="shrink-0 text-blue-400" />
                <span className="text-center">
                  Trusted by <strong className="text-white">50,000+</strong>{" "}
                  travelers worldwide
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" as const }}
                className="absolute -right-3 -top-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br from-violet-500/80 to-blue-500/80 shadow-lg backdrop-blur-md"
              >
                <Sparkles size={24} className="text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Statistics cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-24 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-lg backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_8px_32px_rgba(99,102,241,0.15)]"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 transition-colors group-hover:from-blue-500/30 group-hover:to-violet-500/30">
                <stat.icon size={20} className="text-blue-300" />
              </div>
              <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
                {stat.value}
              </h3>
              <p className="mt-1 text-sm font-medium text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
