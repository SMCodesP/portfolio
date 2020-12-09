import {createContext, useContext, useState, useEffect} from 'react'

import api from '../utils/api'
import usePersistedState from '../utils/usePersistedState'

const CartContext = createContext({})

function CartProvider({ children }) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(JSON.parse(localStorage.getItem('products') || '[]'))
    }, [])

    function addCart(product) {
        if (products.find((productPred) => productPred.id === product.id))
            return;

        setProducts((productsState) => {
            localStorage.setItem('products', JSON.stringify([...productsState, product]))

            return [...productsState, product]
        })
    }

    function removeCart(product) {
        setProducts((productsState) => {
            localStorage.setItem('products', JSON.stringify(productsState.filter((productState) => (productState.id !== product.id))))
            
            return productsState.filter((productState) => (productState.id !== product.id))
        })
    }

    async function payCart() {
        try {
            const {data: response} = await api.post('/mercadopago', {
                items: products.map((product) => product.id)
            })

            return response
        } catch (err) {
            alert(err)
            return err
        }
    }

    function clearCart() {
        setProducts([])
        localStorage.setItem('products', '[]')
    }

	return (
        <CartContext.Provider
            value={{
                addCart,
                removeCart,
                payCart,
                clearCart,
                products
            }}
        >
            {children}
        </CartContext.Provider>
	)
}


function useCart() {
	const context = useContext(CartContext)

	return context
}

export {
	useCart,
	CartProvider
}

export default CartContext
