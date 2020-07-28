import { useState, useEffect } from 'react';
import Cookie from 'js-cookie';

function usePersistedState(key, initialState) {
	const [state, setState] = useState(initialState)

	useEffect(() => {
    	Cookie.set(key, JSON.stringify(state), {
    		expires: 365 * 10
    	});
	}, [key, state])

	return [state, setState]
}

export default usePersistedState