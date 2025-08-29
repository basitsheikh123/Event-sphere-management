export type Stat = { title: string; value: string | number; hint?: string };

export default function StatsCards({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div key={s.title} className="bg-white rounded-2xl shadow p-5">
          <div className="text-sm text-gray-500">{s.title}</div>
          <div className="text-2xl font-semibold mt-1">{s.value}</div>
          {s.hint && <div className="text-xs text-gray-400 mt-1">{s.hint}</div>}
        </div>
      ))}
    </div>
  );
}
