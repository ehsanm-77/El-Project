import { El } from "../../../utils/El.js";
export function Header() {
	let result = 24;
	const handleChange = (e) => {
		console.log(e.target.value);
	};
	const sendData = () => {
		console.log("asdasd");
	};
	return El({
		element: "div",
		children: [
			El({
				element: "div",
				children: [result],
				className:
					"text-red-400 bg-yellow-300 p-2 rounded-md shadow-md font-bold",
				eventListener: [
					{
						event: "click",
						callback: sendData,
					},
				],
			}),
			El({
				element: "div",
				children: [
					El({
						element: "input",
						children: ["logo section"],
						placeholder: "search",
						id: "",
						className: "",
						eventListener: [
							{
								event: "change",
								callback: handleChange,
							},
						],
					}),
				],
				className:
					"text-green-500 bg-gray-200 p-2 rounded-md shadow-md font-bold",
			}),
		],
		className: "bg-blue-500 p-4 flex justify-evenly",
	});
}
