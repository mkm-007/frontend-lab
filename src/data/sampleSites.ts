export type SiteTelemetry = {
  siteId: string;
  region: string;
  state: "online" | "degraded" | "offline";
  powerKw: number;
  deviceCount: number;
};

export const sampleSites: SiteTelemetry[] = [
  { siteId: "sc-101", region: "US-West", state: "online", powerKw: 420, deviceCount: 12 },
  { siteId: "pw-204", region: "US-East", state: "degraded", powerKw: 180, deviceCount: 8 },
  { siteId: "mf-309", region: "EMEA", state: "online", powerKw: 950, deviceCount: 24 },
];
