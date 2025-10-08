import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import AppWrapper from "../components/templates/AppWrapper";
import { useTranslation } from "react-i18next";
import { useFirstVisit } from "../hooks/useFirstVisit";
import { ProgressBar } from "../components/atoms/ProgressBar";
import { useState } from "react";

const RootLayout = () => {
	const { t } = useTranslation();
	const { isFirstVisit, markAsVisited } = useFirstVisit();
	return (
		<AppWrapper>
			<div className="p-2 flex gap-2">
				<h1>{t("onboarding.greeting", { name: "John" })}</h1>
			</div>
			<ProgressBar itemsCount={itemsCount} currentStep={currentStep} />
			<button onClick={makeProgressStep} disabled={currentStep >= itemsCount}>
				Next ({currentStep}/{itemsCount})
			</button>
			<button onClick={resetProgress}>Reset</button>
			{/* {isFirstVisit && (
				<div>
					<h1>Onboarding</h1>
					<button onClick={markAsVisited}>click</button>
				</div>
			)} */}
			<Outlet />
			<TanStackRouterDevtools />
		</AppWrapper>
	);
};

export const Route = createRootRoute({ component: RootLayout });
