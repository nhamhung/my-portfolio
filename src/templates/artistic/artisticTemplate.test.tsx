import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { PortfolioApp } from "../../App";
import { Provider } from "../../components/ui/provider";
import { profile, sectionContent, sectionIds } from "../../data/portfolio";
import { engineeringTemplate } from "../engineering";
import { artisticTemplate } from ".";

const forbiddenArtisticCopy = [
  "Learning in public, making things with care.",
  "A collection of the subjects, projects, people, and small experiments that have shaped how I learn and what I hope to explore next.",
  "Things I notice",
  "What I am learning",
  "Away from the screen",
  "Where I hope to go",
  "Student Councillor",
  "Choir Member",
] as const;

const renderArtistic = () =>
  render(
    <Provider>
      <PortfolioApp initialTemplate={artisticTemplate} />
    </Provider>,
  );

beforeEach(() => {
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  );
  window.localStorage.clear();
  window.history.pushState(null, "", "/");
});

afterEach(() => cleanup());

describe("Artistic presentation ownership", () => {
  it("owns every canonical section", () => {
    for (const sectionId of sectionIds) {
      expect(
        artisticTemplate.sectionComponents[sectionId],
        `Artistic must own the ${sectionId} presentation`,
      ).not.toBe(engineeringTemplate.sectionComponents[sectionId]);
    }
  });

  it("owns its local journal view", () => {
    expect(artisticTemplate.JournalPostComponent).not.toBe(
      engineeringTemplate.JournalPostComponent,
    );
  });

  it("renders theme-owned section seams from shared truthful content", () => {
    renderArtistic();

    expect(screen.getByTestId("portfolio-main")).toHaveAttribute(
      "data-template-id",
      "artistic",
    );
    expect(document.body.textContent).toContain(profile.name);

    for (const sectionId of sectionIds) {
      expect(
        document.querySelector(`[data-presentation="artistic-${sectionId}"]`),
        `Artistic needs a stable ${sectionId} presentation seam`,
      ).toBeInTheDocument();
    }

    for (const copy of Object.values(sectionContent)) {
      expect(screen.getByText(copy.description)).toBeInTheDocument();
    }
  });

  it("renders no former notebook or activity-only personal copy", () => {
    renderArtistic();

    for (const forbiddenCopy of forbiddenArtisticCopy) {
      expect(screen.queryByText(forbiddenCopy)).not.toBeInTheDocument();
    }
  });

  it("uses the canonical Engineering section and subsection names", () => {
    renderArtistic();

    for (const copy of Object.values(sectionContent)) {
      expect(
        screen.getByRole("heading", { name: copy.title }),
      ).toBeInTheDocument();
      expect(screen.getByText(copy.eyebrow)).toBeInTheDocument();
    }

    expect(
      screen.getByRole("heading", { name: "Educational Videos" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Writing and Technical Notes" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Certificate Gallery" }),
    ).toBeInTheDocument();
    expect(screen.getByText("CONNECT_CHANNELS")).toBeInTheDocument();
  });
});
