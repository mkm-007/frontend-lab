import { sampleSites } from "./data/sampleSites";
import { SiteStatusTable } from "./components/SiteStatusTable";
import { TelemetryCard } from "./components/TelemetryCard";
import "./styles.css";

export function App() {
  return (
    <main className="app">
      <h1>Energy Fleet Monitor</h1>
      <section className="card-grid" aria-label="Site telemetry cards">
        {sampleSites.map((site) => (
          <TelemetryCard key={site.siteId} site={site} />
        ))}
      </section>
      <SiteStatusTable sites={sampleSites} />
    </main>
  );
}
