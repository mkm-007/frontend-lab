import { useState } from "react";
import { FleetMonitorView } from "./views/FleetMonitorView";
import { SignInView } from "./views/SignInView";
import "./styles.css";

export type LabView = "sign-in" | "fleet-monitor";

export function App() {
  const [view, setView] = useState<LabView>("sign-in");

  return (
    <main className="app">
      <nav className="view-nav" aria-label="Lab views">
        <button
          type="button"
          className={view === "sign-in" ? "nav-active" : ""}
          onClick={() => setView("sign-in")}
        >
          Design System
        </button>
        <button
          type="button"
          className={view === "fleet-monitor" ? "nav-active" : ""}
          onClick={() => setView("fleet-monitor")}
        >
          Fleet Monitor
        </button>
      </nav>
      {view === "sign-in" ? <SignInView /> : <FleetMonitorView />}
    </main>
  );
}
