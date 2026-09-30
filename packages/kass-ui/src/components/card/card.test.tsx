import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card } from "./card";

describe("Card", () => {
  it("renders card root", () => {
    render(<Card data-testid="card">Content</Card>);
    expect(screen.getByTestId("card")).toBeInTheDocument();
    expect(screen.getByTestId("card").className).toContain("kass-card");
  });

  it.each(["default", "outline", "ghost", "elevated"] as const)(
    "applies variant: %s",
    (variant) => {
      render(<Card variant={variant} data-testid="card">Content</Card>);
      expect(screen.getByTestId("card").className).toContain(`kass-card--${variant}`);
    }
  );

  it("renders Card.Header", () => {
    render(
      <Card>
        <Card.Header data-testid="header">Header</Card.Header>
      </Card>
    );
    expect(screen.getByTestId("header").className).toContain("kass-card__header");
  });

  it("renders Card.Title as h3", () => {
    render(
      <Card>
        <Card.Header>
          <Card.Title>My Title</Card.Title>
        </Card.Header>
      </Card>
    );
    const title = screen.getByText("My Title");
    expect(title.tagName).toBe("H3");
    expect(title.className).toContain("kass-card__title");
  });

  it("renders Card.Description as p", () => {
    render(
      <Card>
        <Card.Header>
          <Card.Description>A description</Card.Description>
        </Card.Header>
      </Card>
    );
    const desc = screen.getByText("A description");
    expect(desc.tagName).toBe("P");
    expect(desc.className).toContain("kass-card__description");
  });

  it("renders Card.Content", () => {
    render(
      <Card>
        <Card.Content data-testid="content">Body</Card.Content>
      </Card>
    );
    expect(screen.getByTestId("content").className).toContain("kass-card__content");
  });

  it("renders Card.Footer", () => {
    render(
      <Card>
        <Card.Footer data-testid="footer">Footer</Card.Footer>
      </Card>
    );
    expect(screen.getByTestId("footer").className).toContain("kass-card__footer");
  });

  it("composes all sub-components together", () => {
    render(
      <Card data-testid="card">
        <Card.Header>
          <Card.Title>Title</Card.Title>
          <Card.Description>Desc</Card.Description>
        </Card.Header>
        <Card.Content>Content</Card.Content>
        <Card.Footer>Footer</Card.Footer>
      </Card>
    );
    expect(screen.getByTestId("card")).toBeInTheDocument();
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Desc")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("merges custom className on sub-components", () => {
    render(
      <Card>
        <Card.Header className="custom-header">Header</Card.Header>
      </Card>
    );
    const header = screen.getByText("Header");
    expect(header.className).toContain("kass-card__header");
    expect(header.className).toContain("custom-header");
  });
});
