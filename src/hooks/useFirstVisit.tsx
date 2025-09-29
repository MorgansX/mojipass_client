import { useState, useEffect } from "react";

interface UseFirstVisit {
	isFirstVisit: boolean;
	markAsVisited: () => void;
	resetVisitStatus: () => void;
}

const STORAGE_KEY = "emojipassVisited";

export const useFirstVisit = (): UseFirstVisit => {
	const [isFirstVisit, setIsFirstVisit] = useState<boolean>(true);

	const markAsVisited = () => {
		localStorage.setItem(STORAGE_KEY, "true");
		setIsFirstVisit(false);
	};

	const resetVisitStatus = () => {
		localStorage.removeItem(STORAGE_KEY);
		setIsFirstVisit(true);
	};

	useEffect(() => {
		const hasVisited = localStorage.getItem(STORAGE_KEY);
		setIsFirstVisit(hasVisited !== "true");
	}, []);

	return {
		isFirstVisit,
		markAsVisited,
		resetVisitStatus,
	};
};
