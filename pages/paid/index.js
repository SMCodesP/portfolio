import { useRouter } from 'next/router'
import Link from 'next/link'
import {useEffect} from 'react'
import ReactDOM from 'react-dom'
import Lottie from 'react-lottie';

import * as animationSuccess from '../../public/animations/5449-success-tick.json'
import * as animationError from '../../public/animations/5707-error.json'
import * as animationPending from '../../public/animations/17277-payment-pending.json'

import {useCart} from '../../contexts/cart'

import {
    Button
} from '../../styles/pages/paid'

function Paid() {
    const {query} = useRouter()
    const {clearCart} = useCart()
    const status = query.status || "failure"

    const optionsStatus = {
        "approved": () => {
            clearCart()
            return (
                <>
                    <Lottie
                        width={116}
                        height={116}
                        options={{
                            loop: false,
                            autoplay: true,
                            animationData: animationSuccess.default,
                            rendererSettings: {
                                preserveAspectRatio: 'xMidYMid slice'
                            }
                        }}
                    />
                    <br />
                    <h2>Pagamento feito com sucesso!</h2>
                </>
            )
        },
        "failure": () => (
            <>
                <Lottie
                    width={116}
                    height={116}
                    options={{
                        loop: false,
                        autoplay: true,
                        animationData: animationError.default,
                        rendererSettings: {
                            preserveAspectRatio: 'xMidYMid slice'
                        }
                    }}
                />
                <br />
                <h2>Houve um erro no pagamento!</h2>
            </>
        ),
        "pending": () => {
            clearCart()
            return (
            <>
                <Lottie
                    width={128}
                    height={128}
                    options={{
                        loop: true,
                        autoplay: true,
                        animationData: animationPending.default,
                        rendererSettings: {
                            preserveAspectRatio: 'xMidYMid slice'
                        }
                    }}
                />
                <h2>O pagamento ainda está sendo processado!</h2>
            </>
            )
        }
    }

    useEffect(() => {
        if (optionsStatus[status]) {
            ReactDOM.render(optionsStatus[status](), document.getElementById('paid-container'))
        }
    }, [status])

    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <div id="paid-container">
            </div>
            <Link href="/cart">
                <Button>Voltar ao carrinho</Button>
            </Link>
        </div>
    )
}

export default Paid