import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "../App";
import { sampleSites } from "../data/sampleSites";
import { SiteStatusTable } from "../components/SiteStatusTable";
import { TelemetryCard } from "../components/TelemetryCard";

describe("TelemetryCard", () => {
  it("renders site metrics", () => {
    render(<TelemetryCard site={sampleSites[0]} />);
    expect(screen.getByText("sc-101")).toBeInTheDocument();
    expect(screen.getByText(/420/)).toBeInTheDocument();
  });
});

describe("SiteStatusTable", () => {
  it("lists all sample sites", () => {
    render(<SiteStatusTable sites={sampleSites} />);
    expect(screen.getAllByRole("row")).toHaveLength(4);
  });
});

describe("App", () => {
  it("shows fleet monitor dashboard", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: "Energy Fleet Monitor" })).toBeInTheDocument();
    expect(screen.getByLabelText("Energy site status")).toBeInTheDocument();
    expect(screen.getAllByLabelText(/telemetry$/i)).toHaveLength(3);
  });
});
