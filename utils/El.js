export function El({
	element,
	children,
	eventListener,
	dataset,
	restAttrs = {},
	...rest
}) {
	const elem = document.createElement(element);
	// create the element => <div></div>
	for (const attr in rest) {
		elem[attr] = rest[attr];
	}
	// add rest attributes to the element => <div attr></div>
	if (children) {
		for (const child of children) {
			elem.append(child);
		}
	}
	// [element , element] => add children to the element => <div>{children}</div>
	if (eventListener) {
		eventListener.map((el) => elem.addEventListener(el.event, el.callback));
	}
	// add the event listener to the element
	if (dataset) {
		for (const key in dataset) {
			elem.dataset[key] = dataset[key];
		}
	}
	// add data to the element => <div dataId=""></div>
	for (const key in restAttrs) {
		elem.setAttribute(key, restAttrs[key]);
	}
	return elem;
}
