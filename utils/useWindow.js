import {useState, useEffect} from 'react'

export default function useWindowSize() {
	const [windowSize, setWindowSize] = useState({
		width: 1,
		height: 1,
	});

	useEffect(() => {
		if (typeof window !== 'undefined') {
			function handleResize() {

				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight,
				});
			}

			window.addEventListener("resize", handleResize);


			handleResize();

			return () => window.removeEventListener("resize", handleResize);
		}
	}, []);
	return windowSize;
}