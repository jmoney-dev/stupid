"use client";

import { useMemo, useState } from "react";

const rageMessages = [
  "Are you even trying?",
  "You call that stepping?",
  "My grandma taps faster.",
  "This is embarrassing.",
  "Please click harder.",
  "Step game weak.",
];

export default function Home() {
  const [steps, setSteps] = useState(0);
  const [missed, setMissed] = useState(0);

  const rageText = useMemo(
    () => rageMessages[steps % rageMessages.length],
    [steps],
  );

  const addStep = () => {
    const trollChance = Math.random();

    if (trollChance < 0.2) {
      setMissed((current) => current + 1);
      return;
    }

    setSteps((current) => current + 1);
  };

  const resetEverything = () => {
    setSteps(0);
    setMissed(0);
  };

  return (
    <main className="rage-root">
      <div className="noise" aria-hidden="true" />

      <section className="rage-card">
        <h1 className="rage-title">Worst Step Counter 2026</h1>
        <p className="rage-subtitle">Smash button. Regret instantly.</p>

        <div className="stats-wrap" aria-live="polite">
          <p className="main-stat">{steps}</p>
          <p className="stat-label">real-ish steps</p>
          <p className="missed-stat">Ignored clicks: {missed}</p>
        </div>

        <button className="big-bad-button" onClick={addStep} type="button">
          STEP NOW
        </button>

        <p className="rage-taunt">{rageText}</p>

        <button className="tiny-reset" onClick={resetEverything} type="button">
          reset and lose progress lol
        </button>
      </section>
    </main>
  );
}
