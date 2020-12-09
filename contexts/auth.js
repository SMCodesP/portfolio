import {createContext, useContext, useEffect, useState} from 'react'

import api from '../utils/api'

const AuthContext = createContext({})

function AuthProvider({ children }) {
	const [token, setToken] = useState('')

	async function signIn({username, password, captcha, setError, router}) {
		try {
			const { data } = await api.post(`/session`, {
				username,
				password,
				'g-recaptcha-response': captcha
			})

			setToken(data.token)
			localStorage.setItem('token', data.token)
			api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`

			const query = router.query || {}
			console.log(query)

			if (router.query.backurl) {
				router.push(router.query.backurl)
			} else {
				router.push('/dashboard')
			}
		} catch (err) {
			console.log(err)
			console.log(err.response)
			setError((err.response) ? err.response.data.error.message || 'Houve um erro desconhecido.' : 'Houve um erro desconhecido.')
		}
	}

	useEffect(() => {
		const localToken = localStorage.getItem('token')

		if (localToken) {
			api.defaults.headers.common['Authorization'] = `Bearer ${localToken}`
			setToken(localToken)
		}
	}, [])

	return (
		<AuthContext.Provider
			value={{
				signIn,
				token
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}


function useAuth() {
	const context = useContext(AuthContext)

	return context
}

export {
	useAuth,
	AuthProvider
}

export default AuthContext
