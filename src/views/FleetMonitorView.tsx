import { sampleSites } from "../data/sampleSites";
import { SiteStatusTable } from "../components/SiteStatusTable";
import { TelemetryCard } from "../components/TelemetryCard";

export function FleetMonitorView() {
  return (
    <section className="view-panel">
      <h1>Energy Fleet Monitor</h1>
      <p className="view-desc">Fleet telemetry UI for energy / IoT monitoring roles.</p>
      <div className="card-grid" aria-label="Site telemetry cards">
        {sampleSites.map((site) => (
          <TelemetryCard key={site.siteId} site={site} />
        ))}
      </div>
      <SiteStatusTable sites={sampleSites} />
    </section>
  );
}
