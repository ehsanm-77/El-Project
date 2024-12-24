import { El } from "../../utils/El.js";
import { Header } from "./Header/Header.js";

export function Home() {
	return El({
		element: "div",
		children: [Header()],
	});
}
