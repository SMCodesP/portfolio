import { useState, useEffect } from 'react';
import Cookie from 'js-cookie';

function usePersistedState(key, initialState) {
	const [state, setState] = useState(initialState)

  useEffect(() => {
		if (localStorage.getItem(key)) {
      setState(JSON.parse(localStorage.getItem(key)))
    }
  }, [])

	return [state, setState]
}

export default usePersistedState