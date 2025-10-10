import React from "react";
import { render, screen } from "@testing-library/react";
import { ProgressBar } from "./index";
import "@testing-library/jest-dom";

// Mock the styled components
jest.mock("./styles", () => ({
  ProgressBarWrapper: ({ children, ...props }) => (
    <div data-testid="progress-bar-wrapper" {...props}>
      {children}
    </div>
  ),
  ProgressBarWidthItem: ({ itemWidth, ...props }) => (
    <div data-testid="progress-bar-item" data-width={itemWidth} {...props} />
  ),
}));

describe("ProgressBar", () => {
  // Mock clientWidth
  const mockClientWidth = 400;

  beforeEach(() => {
    // Mock the clientWidth property
    Object.defineProperty(HTMLElement.prototype, "clientWidth", {
      configurable: true,
      value: mockClientWidth,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    render(<ProgressBar itemsCount={5} currentStep={0} />);
    expect(screen.getByTestId("progress-bar-wrapper")).toBeInTheDocument();
    expect(screen.getByTestId("progress-bar-item")).toBeInTheDocument();
  });

  it("calculates correct width for first step", () => {
    render(<ProgressBar itemsCount={5} currentStep={0} />);
    const progressItem = screen.getByTestId("progress-bar-item");
    
    // widthPerItem = 400 / 5 = 80
    // width = (0 + 1) * 80 = 80
    expect(progressItem).toHaveAttribute("data-width", "80px");
  });

  it("calculates correct width for middle step", () => {
    render(<ProgressBar itemsCount={5} currentStep={2} />);
    const progressItem = screen.getByTestId("progress-bar-item");
    
    // widthPerItem = 400 / 5 = 80
    // width = (2 + 1) * 80 = 240
    expect(progressItem).toHaveAttribute("data-width", "240px");
  });

  it("calculates correct width for last step", () => {
    render(<ProgressBar itemsCount={5} currentStep={4} />);
    const progressItem = screen.getByTestId("progress-bar-item");
    
    // widthPerItem = 400 / 5 = 80
    // width = (4 + 1) * 80 = 400
    expect(progressItem).toHaveAttribute("data-width", "400px");
  });

  it("handles different itemsCount values correctly", () => {
    const { rerender } = render(<ProgressBar itemsCount={10} currentStep={5} />);
    let progressItem = screen.getByTestId("progress-bar-item");
    
    // widthPerItem = 400 / 10 = 40
    // width = (5 + 1) * 40 = 240
    expect(progressItem).toHaveAttribute("data-width", "240px");

    rerender(<ProgressBar itemsCount={3} currentStep={1} />);
    progressItem = screen.getByTestId("progress-bar-item");
    
    // widthPerItem = 400 / 3 = 133.333...
    // width = (1 + 1) * 133.333... = 266.666...
    expect(progressItem).toHaveAttribute("data-width", "266.6666666666667px");
  });

  it("adds and removes resize event listener", () => {
    const addEventListenerSpy = jest.spyOn(window, "addEventListener");
    const removeEventListenerSpy = jest.spyOn(window, "removeEventListener");

    const { unmount } = render(<ProgressBar itemsCount={5} currentStep={2} />);

    expect(addEventListenerSpy).toHaveBeenCalledWith("resize", expect.any(Function));

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith("resize", expect.any(Function));

    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
  });

  it("updates width on window resize", () => {
    const { rerender } = render(<ProgressBar itemsCount={5} currentStep={2} />);
    let progressItem = screen.getByTestId("progress-bar-item");
    
    // Initial width calculation with clientWidth = 400
    expect(progressItem).toHaveAttribute("data-width", "240px");

    // Change the clientWidth
    Object.defineProperty(HTMLElement.prototype, "clientWidth", {
      configurable: true,
      value: 600,
    });

    // Trigger resize event
    window.dispatchEvent(new Event("resize"));

    // Force re-render to see the updated width
    rerender(<ProgressBar itemsCount={5} currentStep={2} />);
    progressItem = screen.getByTestId("progress-bar-item");
    
    // New width calculation: (2 + 1) * (600 / 5) = 360
    expect(progressItem).toHaveAttribute("data-width", "360px");
  });

  it("handles edge case with single item", () => {
    render(<ProgressBar itemsCount={1} currentStep={0} />);
    const progressItem = screen.getByTestId("progress-bar-item");
    
    // widthPerItem = 400 / 1 = 400
    // width = (0 + 1) * 400 = 400
    expect(progressItem).toHaveAttribute("data-width", "400px");
  });

  it("handles zero initial width gracefully", () => {
    Object.defineProperty(HTMLElement.prototype, "clientWidth", {
      configurable: true,
      value: 0,
    });

    render(<ProgressBar itemsCount={5} currentStep={2} />);
    const progressItem = screen.getByTestId("progress-bar-item");
    
    // widthPerItem = 0 / 5 = 0
    // width = (2 + 1) * 0 = 0
    expect(progressItem).toHaveAttribute("data-width", "0px");
  });
});