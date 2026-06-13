import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { App } from "../App";
import { sampleSites } from "../data/sampleSites";
import { Button } from "./Button";
import { Card } from "./Card";
import { SiteStatusTable } from "./SiteStatusTable";
import { TelemetryCard } from "./TelemetryCard";
import { TextField } from "./TextField";
import { FleetMonitorView } from "../views/FleetMonitorView";
import { SignInView } from "../views/SignInView";

describe("Button", () => {
  it("renders with accessible label", () => {
    render(<Button label="Save" />);
    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
  });
});

describe("TextField", () => {
  it("links label to input", () => {
    render(<TextField id="name" label="Name" value="" onChange={() => {}} />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
  });
});

describe("SignInView", () => {
  it("updates email on typing", async () => {
    const user = userEvent.setup();
    render(<SignInView />);
    await user.type(screen.getByLabelText("Work email"), "test@1password.com");
    expect(screen.getByLabelText("Work email")).toHaveValue("test@1password.com");
  });
});

describe("FleetMonitorView", () => {
  it("shows fleet dashboard", () => {
    render(<FleetMonitorView />);
    expect(screen.getByRole("heading", { name: "Energy Fleet Monitor" })).toBeInTheDocument();
    expect(screen.getAllByLabelText(/telemetry$/i)).toHaveLength(3);
  });
});

describe("TelemetryCard", () => {
  it("renders site metrics", () => {
    render(<TelemetryCard site={sampleSites[0]} />);
    expect(screen.getByText("sc-101")).toBeInTheDocument();
  });
});

describe("SiteStatusTable", () => {
  it("lists all sample sites", () => {
    render(<SiteStatusTable sites={sampleSites} />);
    expect(screen.getAllByRole("row")).toHaveLength(4);
  });
});

describe("App", () => {
  it("switches between lab views", async () => {
    const user = userEvent.setup();
    render(<App />);
    expect(screen.getByRole("heading", { name: "Design System — Sign In" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Fleet Monitor" }));
    expect(screen.getByRole("heading", { name: "Energy Fleet Monitor" })).toBeInTheDocument();
  });
});
