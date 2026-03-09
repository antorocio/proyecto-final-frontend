import { useContext, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const { login, handleUser } = useContext(ChatContext)

    const navigate = useNavigate()

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        const response = login({ email, password })

        if (!response) {
            setError(true)
            return
        }

        handleUser({ email, password })
        navigate("/")
    }

    const handleRegister = () => {
        navigate("/register")
    }

    return (
        <section className="cont-login">
            <form onSubmit={handleSubmit} >
                <h1>Bienvenido 💬</h1>
                <h2>Inicia sesión</h2>
                <input type="email" placeholder="Correo electrónico" required autoComplete="off" onChange={handleChangeEmail}/>
                <input type="password" placeholder="Contraseña" required onChange={handleChangePassword}/>
                <button>Ingresar</button>
                {
                    error && <p className="error-form">Error al ingresar</p>
                }

            </form>
            <p>Sí es tu primera vez, necesitás crear una cuenta</p>
            <button onClick={handleRegister}>Crear cuenta</button>
            <button className="btn-about">Acerca del proyecto</button>
        </section>
    )
}

export { Login }