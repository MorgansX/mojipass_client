import { useState, useEffect } from "react";

interface UseFirstVisit {
	isFirstVisit: boolean;
	markAsVisited: () => void;
	resetVisitStatus: () => void;
}

const STORAGE_KEY = "emojipassVisited";
const STORAGE_EVENT = "firstVisitChanged";

export const useFirstVisit = (): UseFirstVisit => {
	const [isFirstVisit, setIsFirstVisit] = useState<boolean>(() => {
		const hasVisited = localStorage.getItem(STORAGE_KEY);
		return hasVisited !== "true";
	});

	const markAsVisited = () => {
		localStorage.setItem(STORAGE_KEY, "true");
		setIsFirstVisit(false);

		window.dispatchEvent(new Event(STORAGE_EVENT));
	};

	const resetVisitStatus = () => {
		localStorage.removeItem(STORAGE_KEY);
		setIsFirstVisit(true);

		window.dispatchEvent(new Event(STORAGE_EVENT));
	};

	useEffect(() => {
		const handleStorageChange = () => {
			const hasVisited = localStorage.getItem(STORAGE_KEY);
			setIsFirstVisit(hasVisited !== "true");
		};

		window.addEventListener(STORAGE_EVENT, handleStorageChange);
		return () => window.removeEventListener(STORAGE_EVENT, handleStorageChange);
	}, []);

	return {
		isFirstVisit,
		markAsVisited,
		resetVisitStatus,
	};
};
