import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";

const destinations = [
  {
    name: "Paris",
    country: "France",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    rating: "4.9",
    budget: "$1800",
  },
  {
    name: "Tokyo",
    country: "Japan",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
    rating: "4.8",
    budget: "$2100",
  },
  {
    name: "Bali",
    country: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
    rating: "4.9",
    budget: "$1300",
  },
  {
    name: "Dubai",
    country: "UAE",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    rating: "4.8",
    budget: "$2000",
  },
  {
    name: "Switzerland",
    country: "Europe",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
    rating: "5.0",
    budget: "$2500",
  },
  {
    name: "Maldives",
    country: "Indian Ocean",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800",
    rating: "5.0",
    budget: "$2800",
  },
];

const Destinations = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-blue-600">
            Explore
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Popular Destinations
          </h2>

          <p className="mt-5 text-slate-600">
            Let AI recommend your next unforgettable adventure.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {destinations.map((place, index) => (

            <motion.div
              key={place.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="overflow-hidden rounded-3xl bg-white shadow-xl"
            >

              <img
                src={place.image}
                alt={place.name}
                className="h-64 w-full object-cover transition duration-500 hover:scale-110"
              />

              <div className="p-6">

                <div className="flex items-center justify-between">

                  <h3 className="text-2xl font-bold">
                    {place.name}
                  </h3>

                  <div className="flex items-center gap-1 text-yellow-500">

                    <Star size={18} fill="currentColor" />

                    {place.rating}

                  </div>

                </div>

                <div className="mt-2 flex items-center gap-2 text-slate-500">

                  <MapPin size={18} />

                  {place.country}

                </div>

                <div className="mt-5 flex items-center justify-between">

                  <div>

                    <p className="text-sm text-slate-500">
                      Average Budget
                    </p>

                    <p className="text-xl font-bold text-blue-600">
                      {place.budget}
                    </p>

                  </div>

                  <button className="rounded-full bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700">
                    Explore
                  </button>

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