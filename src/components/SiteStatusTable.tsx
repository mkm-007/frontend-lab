import type { SiteTelemetry } from "../data/sampleSites";

type SiteStatusTableProps = {
  sites: SiteTelemetry[];
};

export function SiteStatusTable({ sites }: SiteStatusTableProps) {
  return (
    <table className="site-table" aria-label="Energy site status">
      <thead>
        <tr>
          <th scope="col">Site</th>
          <th scope="col">Region</th>
          <th scope="col">State</th>
          <th scope="col">Power (kW)</th>
        </tr>
      </thead>
      <tbody>
        {sites.map((site) => (
          <tr key={site.siteId}>
            <td>{site.siteId}</td>
            <td>{site.region}</td>
            <td>{site.state}</td>
            <td>{site.powerKw}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
