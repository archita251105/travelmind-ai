const stats = [
  { value: "50K+", label: "Trips Planned" },
  { value: "120+", label: "Countries" },
  { value: "98%", label: "Happy Users" },
];

const PlannerStats = () => {
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-white/20 bg-white/10 p-5 text-center text-white backdrop-blur"
        >
          <h3 className="text-3xl font-bold">{stat.value}</h3>
          <p className="mt-1 text-sm text-blue-100">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default PlannerStats;