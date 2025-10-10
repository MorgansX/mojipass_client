import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import AppWrapper from "../components/templates/AppWrapper";
import { useFirstVisit } from "../hooks/useFirstVisit";
import { Onboarding } from "../components/organisms/onboarding";

const RootLayout = () => {
	const { isFirstVisit } = useFirstVisit();
	return (
		<AppWrapper>
			{isFirstVisit && <Onboarding />}
			<Outlet />
			<TanStackRouterDevtools />
		</AppWrapper>
	);
};

export const Route = createRootRoute({ component: RootLayout });
