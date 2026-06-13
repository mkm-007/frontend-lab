import type { SiteTelemetry } from "../data/sampleSites";

type TelemetryCardProps = {
  site: SiteTelemetry;
};

export function TelemetryCard({ site }: TelemetryCardProps) {
  return (
    <article className="telemetry-card" aria-label={`${site.siteId} telemetry`}>
      <h3>{site.siteId}</h3>
      <p>{site.region}</p>
      <p>
        Status: <strong>{site.state}</strong>
      </p>
      <p>Power: {site.powerKw} kW</p>
      <p>Devices: {site.deviceCount}</p>
    </article>
  );
}
