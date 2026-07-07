type Props = {
  title: string;
  items: string[];
};

const TravelListCard = ({ title, items }: Props) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
      <h3 className="text-2xl font-bold text-slate-900">{title}</h3>

      <ul className="mt-5 space-y-3">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex gap-3 rounded-2xl bg-slate-50 p-4 leading-7 text-slate-700"
          >
            <span className="font-bold text-blue-600">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelListCard;