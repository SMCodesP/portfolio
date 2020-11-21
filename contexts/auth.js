import {createContext, useContext} from 'react'

import api from '../utils/api'

const AuthContext = createContext({})

function AuthProvider({ children }) {

	async function signIn({username, password, captcha, setError, router}) {
		console.log(captcha)
		try {
			const { data } = await api.post('/session', {
				username,
				password,
				'g-recaptcha-response': captcha
			})

			console.log(data)
			api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`

			router.push('/dashboard')
		} catch (err) {
			console.log(err)
			setError((err.response) ? err.response.data.error.message || 'Houve um erro desconhecido.' : 'Houve um erro desconhecido.')
		}
	}

	return (
		<AuthContext.Provider
			value={{
				signIn
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
