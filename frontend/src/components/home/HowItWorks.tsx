import { motion } from "framer-motion";
import { Search, Sparkles, Plane } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Tell Us Your Destination",
    description:
      "Enter where you want to travel, your budget, travel dates and interests.",
  },
  {
    icon: Sparkles,
    title: "AI Creates Your Itinerary",
    description:
      "Gemini AI generates a personalized day-by-day travel plan in seconds.",
  },
  {
    icon: Plane,
    title: "Travel Stress-Free",
    description:
      "Book your trip, save your itinerary and enjoy your journey with confidence.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            How It Works
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Plan Your Dream Trip in 3 Easy Steps
          </h2>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Travel planning has never been easier. Let AI handle the hard work
            while you focus on enjoying your adventure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="rounded-3xl bg-white p-8 shadow-xl text-center"
              >

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">

                  <Icon className="text-blue-600" size={40} />

                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {step.description}
                </p>

              </motion.div>

            );
          })}

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;