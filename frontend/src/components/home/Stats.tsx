const stats = [
  { value: "50K+", label: "Trips Generated" },
  { value: "120+", label: "Countries Covered" },
  { value: "98%", label: "Happy Travelers" },
  { value: "24/7", label: "AI Assistance" },
];

const Stats = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-3xl border bg-slate-50 p-8 text-center shadow">
            <h3 className="text-4xl font-extrabold text-blue-600">{stat.value}</h3>
            <p className="mt-2 font-medium text-slate-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;