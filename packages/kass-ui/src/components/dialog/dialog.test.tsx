import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Dialog } from "./dialog";

describe("Dialog", () => {
  it("renders trigger", () => {
    render(
      <Dialog>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title>Title</Dialog.Title>
        </Dialog.Content>
      </Dialog>
    );
    expect(screen.getByText("Open")).toBeInTheDocument();
  });

  it("opens when trigger is clicked", () => {
    render(
      <Dialog>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title>My Dialog</Dialog.Title>
          <Dialog.Description>Description text</Dialog.Description>
        </Dialog.Content>
      </Dialog>
    );

    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByText("My Dialog")).toBeInTheDocument();
    expect(screen.getByText("Description text")).toBeInTheDocument();
  });

  it("renders header and footer", () => {
    render(
      <Dialog defaultOpen>
        <Dialog.Content>
          <Dialog.Header data-testid="header">
            <Dialog.Title>Title</Dialog.Title>
          </Dialog.Header>
          <Dialog.Footer data-testid="footer">
            <button>OK</button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    );

    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("shows close button by default", () => {
    render(
      <Dialog defaultOpen>
        <Dialog.Content>
          <Dialog.Title>Title</Dialog.Title>
        </Dialog.Content>
      </Dialog>
    );

    expect(screen.getByLabelText("Close")).toBeInTheDocument();
  });

  it("hides close button when showClose=false", () => {
    render(
      <Dialog defaultOpen>
        <Dialog.Content showClose={false}>
          <Dialog.Title>Title</Dialog.Title>
        </Dialog.Content>
      </Dialog>
    );

    expect(screen.queryByLabelText("Close")).not.toBeInTheDocument();
  });

  it("applies size class", () => {
    render(
      <Dialog defaultOpen>
        <Dialog.Content size="lg" data-testid="content">
          <Dialog.Title>Title</Dialog.Title>
        </Dialog.Content>
      </Dialog>
    );

    expect(screen.getByTestId("content").className).toContain("kass-dialog-content--lg");
  });

  it("closes when close button is clicked", () => {
    render(
      <Dialog defaultOpen>
        <Dialog.Content>
          <Dialog.Title>Dialog Title</Dialog.Title>
        </Dialog.Content>
      </Dialog>
    );

    expect(screen.getByText("Dialog Title")).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText("Close"));
    expect(screen.queryByText("Dialog Title")).not.toBeInTheDocument();
  });
});
