import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Tabs } from "./tabs";

describe("Tabs", () => {
  const renderTabs = () =>
    render(
      <Tabs defaultValue="tab1">
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">Content 1</Tabs.Content>
        <Tabs.Content value="tab2">Content 2</Tabs.Content>
      </Tabs>
    );

  it("renders tab triggers", () => {
    renderTabs();
    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
  });

  it("shows default tab content", () => {
    renderTabs();
    expect(screen.getByText("Content 1")).toBeInTheDocument();
  });

  it("has clickable tab triggers", () => {
    renderTabs();
    const tab2 = screen.getByText("Tab 2");
    expect(tab2).toHaveAttribute("role", "tab");
    expect(tab2.tagName).toBe("BUTTON");
    expect(tab2).not.toBeDisabled();
  });

  it("has correct ARIA roles", () => {
    renderTabs();
    expect(screen.getByRole("tablist")).toBeInTheDocument();
    expect(screen.getAllByRole("tab")).toHaveLength(2);
    expect(screen.getByRole("tabpanel")).toBeInTheDocument();
  });

  it("marks active tab as selected", () => {
    renderTabs();
    expect(screen.getByText("Tab 1")).toHaveAttribute("data-state", "active");
    expect(screen.getByText("Tab 2")).toHaveAttribute("data-state", "inactive");
  });

  it("applies kass-tabs classes", () => {
    renderTabs();
    expect(screen.getByRole("tablist").className).toContain("kass-tabs-list");
    expect(screen.getByText("Tab 1").className).toContain("kass-tabs-trigger");
    expect(screen.getByRole("tabpanel").className).toContain("kass-tabs-content");
  });
});
