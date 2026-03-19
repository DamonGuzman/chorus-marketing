import { act, render, screen, waitFor } from "@testing-library/react";
import { useState } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { SmoothScroll, useScrollCallback, useScrollY } from "../SmoothScroll";

function ScrollProbe() {
  const scrollY = useScrollY();
  const [scrollEvents, setScrollEvents] = useState(0);

  useScrollCallback(() => {
    setScrollEvents((count) => count + 1);
  });

  return (
    <>
      <output data-testid="scroll-events">{scrollEvents}</output>
      <output data-testid="scroll-y">{scrollY}</output>
    </>
  );
}

describe("SmoothScroll", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("does not install custom wheel or touch scroll interception", () => {
    const addEventListenerSpy = vi.spyOn(window, "addEventListener");

    render(
      <SmoothScroll>
        <div>content</div>
      </SmoothScroll>,
    );

    const eventTypes = addEventListenerSpy.mock.calls.map(([type]) => type);

    expect(eventTypes).not.toContain("wheel");
    expect(eventTypes).not.toContain("touchstart");
    expect(eventTypes).not.toContain("touchmove");
    expect(eventTypes).not.toContain("touchend");
  });

  it("propagates native window scroll updates to subscribers", async () => {
    render(
      <SmoothScroll>
        <ScrollProbe />
      </SmoothScroll>,
    );

    Object.defineProperty(window, "scrollY", {
      configurable: true,
      value: 120,
    });

    act(() => {
      window.dispatchEvent(new Event("scroll"));
    });

    await waitFor(() => {
      expect(screen.getByTestId("scroll-events")).toHaveTextContent("1");
      expect(screen.getByTestId("scroll-y")).toHaveTextContent("120");
    });
  });
});
