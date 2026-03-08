import { useContext, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const { login, handleUser } = useContext(ChatContext)

    const navigate = useNavigate()

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setError(null)
        const response = login({ email, password })

        if (!response) {
            setError(true)
            return
        }

        handleUser({ email, password })
        navigate("/")
    }

    return (
        <section className="cont-login">
            <form onSubmit={handleSubmit} >
                <h1>Bienvenido</h1>
                <h2>Inicia sesión</h2>
                <input type="email" placeholder="Correo electrónico" required autoComplete="off" onChange={handleChangeEmail}/>
                <input type="password" placeholder="Contraseña" required onChange={handleChangePassword}/>
                <button>Ingresar</button>
                {
                    error && <p className="error-form">Error al ingresar</p>
                }                
            </form>
        </section>
    )
}

export { Login }