export default (color) => {
	return getComputedStyle(document.body).getPropertyValue(`--${color}`)
}