import { Check, X } from "lucide-react";

const competitors = [
  "FinalBit",
  "Film U.",
  "Rivet AI",
  "Studio B.",
  "Yamdu",
  "Final Draft",
] as const;

const features = [
  {
    name: "AI Automation",
    support: [true, true, true, false, false, false] as const,
  },
  {
    name: "Breakdown",
    support: [true, true, true, "Manual", "Manual", false] as const,
  },
  {
    name: "Budget + Rebates",
    support: [true, "Partial", "Partial", false, false, false] as const,
  },
  {
    name: "Scheduling",
    support: [true, true, true, "Manual", "Manual", false] as const,
  },
  {
    name: "Story Development",
    support: [true, false, false, false, false, true] as const,
  },
  {
    name: "Script Analysis",
    support: [true, false, "Coverage", false, false, false] as const,
  },
  {
    name: "Storyboard",
    support: [true, true, false, "Manual", false, false] as const,
  },
  {
    name: "Video Creation",
    support: [true, false, false, false, false, false] as const,
  },
  {
    name: "Team Seats (base)",
    support: ["10", "10", "N/A", "6", "—", "—"] as const,
  },
  {
    name: "Price/mo",
    support: ["$999", "$499", "~$150", "$169", "$239", "~$10"] as const,
  },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check className="mx-auto h-5 w-5 text-secondary-300" strokeWidth={2.5} />;
  }
  if (value === false) {
    return <X className="mx-auto h-5 w-5 text-neutral-300" strokeWidth={2.5} />;
  }
  return <span>{value}</span>;
}

export function ComparisonTable() {
  return (
    <section className="px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-center">How FinalBit Compares</h2>
        <p className="mb-12 text-center text-neutral-200">
          The only platform that connects story development to pre-production in
          one workspace.
        </p>
        <div className="overflow-x-auto rounded-[16px] border border-gray-400/30">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-gray-400/30 bg-gray-400/30">
                <th className="px-4 py-3 text-left font-medium text-neutral-200">
                  Feature
                </th>
                {competitors.map((c, i) => (
                  <th
                    key={c}
                    className={`px-4 py-3 text-center font-semibold ${i === 0 ? "text-primary-300" : "text-neutral-200"}`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((f) => (
                <tr
                  key={f.name}
                  className="border-b border-gray-400/20 last:border-0"
                >
                  <td className="px-4 py-3 font-medium text-neutral-100">
                    {f.name}
                  </td>
                  {f.support.map((val, i) => (
                    <td
                      key={`${f.name}-${i}`}
                      className={`px-4 py-3 text-center ${i === 0 ? "bg-primary-300/5" : ""}`}
                    >
                      <CellValue value={val} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
