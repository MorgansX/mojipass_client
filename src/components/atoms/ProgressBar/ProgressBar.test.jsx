import React from "react";
import { render, screen, act } from "@testing-library/react";
import { ProgressBar } from "./index";

jest.mock("./styles", () => ({
	ProgressBarWrapper: ({ children, ...props }) => (
		<div data-testid="progress-wrapper" {...props}>
			{children}
		</div>
	),
	ProgressBarWidthItem: ({ children, itemWidth, ...props }) => (
		<div data-testid="progress-item" data-width={itemWidth} {...props}>
			{children}
		</div>
	),
}));

describe("ProgressBar", () => {
	beforeEach(() => {
		// Mock clientWidth
		Object.defineProperty(HTMLElement.prototype, "clientWidth", {
			configurable: true,
			value: 700,
		});
	});

	it("renders with initial step", () => {
		render(<ProgressBar itemsCount={7} currentStep={0} />);

		expect(screen.getByText("0/7")).toBeInTheDocument();
	});

	it("displays correct step count", () => {
		render(<ProgressBar itemsCount={5} currentStep={3} />);

		expect(screen.getByText("3/5")).toBeInTheDocument();
	});

	it("calculates width correctly based on current step", () => {
		render(<ProgressBar itemsCount={10} currentStep={5} />);

		const progressItem = screen.getByTestId("progress-item");
		// 700px (mocked clientWidth) / 10 items * 5 steps = 350px
		expect(progressItem).toHaveAttribute("data-width", "350px");
	});

	it("shows 0 width when at step 0", () => {
		render(<ProgressBar itemsCount={7} currentStep={0} />);

		const progressItem = screen.getByTestId("progress-item");
		expect(progressItem).toHaveAttribute("data-width", "0px");
	});

	it("shows full width when at final step", () => {
		render(<ProgressBar itemsCount={7} currentStep={7} />);

		const progressItem = screen.getByTestId("progress-item");
		// 700px (mocked clientWidth) / 7 items * 7 steps = 700px
		expect(progressItem).toHaveAttribute("data-width", "700px");
	});

	it("updates width on window resize", () => {
		const { rerender } = render(
			<ProgressBar itemsCount={10} currentStep={5} />,
		);

		// Initial width: 700 / 10 * 5 = 350px
		let progressItem = screen.getByTestId("progress-item");
		expect(progressItem).toHaveAttribute("data-width", "350px");

		// Change clientWidth
		Object.defineProperty(HTMLElement.prototype, "clientWidth", {
			configurable: true,
			value: 1000,
		});

		// Trigger resize wrapped in act
		act(() => {
			global.dispatchEvent(new Event("resize"));
		});

		// Rerender to see updated width
		rerender(<ProgressBar itemsCount={10} currentStep={5} />);

		progressItem = screen.getByTestId("progress-item");
		// New width: 1000 / 10 * 5 = 500px
		expect(progressItem).toHaveAttribute("data-width", "500px");
	});

	it("cleans up resize listener on unmount", () => {
		const removeEventListenerSpy = jest.spyOn(window, "removeEventListener");

		const { unmount } = render(<ProgressBar itemsCount={7} currentStep={3} />);

		unmount();

		expect(removeEventListenerSpy).toHaveBeenCalledWith(
			"resize",
			expect.any(Function),
		);

		removeEventListenerSpy.mockRestore();
	});

	it("handles edge case with 1 item", () => {
		render(<ProgressBar itemsCount={1} currentStep={1} />);

		const progressItem = screen.getByTestId("progress-item");
		expect(progressItem).toHaveAttribute("data-width", "700px");
		expect(screen.getByText("1/1")).toBeInTheDocument();
	});

	it("handles division by zero gracefully", () => {
		render(<ProgressBar itemsCount={0} currentStep={0} />);

		const progressItem = screen.getByTestId("progress-item");
		// Component should still render even with 0 items
		expect(progressItem).toBeInTheDocument();
	});

	it("calculates correct width for partial progress", () => {
		render(<ProgressBar itemsCount={4} currentStep={3} />);

		const progressItem = screen.getByTestId("progress-item");
		// 700px / 4 items * 3 steps = 525px
		expect(progressItem).toHaveAttribute("data-width", "525px");
		expect(screen.getByText("3/4")).toBeInTheDocument();
	});

	it("handles large number of items", () => {
		render(<ProgressBar itemsCount={100} currentStep={50} />);

		const progressItem = screen.getByTestId("progress-item");
		// 700px / 100 items * 50 steps = 350px
		expect(progressItem).toHaveAttribute("data-width", "350px");
		expect(screen.getByText("50/100")).toBeInTheDocument();
	});

	it("renders wrapper with ref", () => {
		render(<ProgressBar itemsCount={5} currentStep={2} />);

		const wrapper = screen.getByTestId("progress-wrapper");
		expect(wrapper).toBeInTheDocument();
	});
});
