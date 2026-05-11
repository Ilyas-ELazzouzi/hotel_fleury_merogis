const STATS = [
  { value: "72", label: "CHAMBRES" },
  { value: "25 min", label: "D'ORLY" },
  { value: "30 km", label: "DE PARIS" },
  { value: "24h", label: "PARKING GRATUIT" },
] as const;

export default function KeyFactsSection() {
  return (
    <section className="key-facts page-section" aria-labelledby="key-facts-title">
      <div className="key-facts__inner">
        <h2 id="key-facts-title" className="key-facts__title">
          EN QUELQUES MOTS
        </h2>
        <div className="key-facts__stats">
          {STATS.map((stat) => (
            <div key={stat.label} className="key-facts__stat">
              <p className="key-facts__value">{stat.value}</p>
              <p className="key-facts__label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
