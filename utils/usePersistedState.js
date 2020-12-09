import { useState, useEffect } from 'react';

function usePersistedState(key, initialState) {
	const [state, setState] = useState(initialState)

	useEffect(() => {
		if (localStorage.getItem(key)) {
			if (JSON.parse(localStorage.getItem(key)).title !== state.title) {
				setState(JSON.parse(localStorage.getItem(key)))
			}
		}
	}, [])

	return [state, setState]
}

export default usePersistedState
