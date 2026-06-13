import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { TextField } from "../components/TextField";

export function SignInView() {
  const [email, setEmail] = useState("");

  return (
    <section className="view-panel">
      <h1>Design System — Sign In</h1>
      <p className="view-desc">Reusable components for platform / design-system roles.</p>
      <Card title="Sign in">
        <TextField
          id="email"
          label="Work email"
          value={email}
          onChange={setEmail}
          placeholder="you@company.com"
        />
        <div className="button-row">
          <Button label="Continue" variant="primary" />
          <Button label="Use SSO" variant="secondary" />
        </div>
      </Card>
    </section>
  );
}
