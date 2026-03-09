import { useContext, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const { register, handleUser } = useContext(ChatContext)

    const navigate = useNavigate()

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)

        const response = register ({ name, email, password })

        console.log(response)

        if(!response) {
            setError(true)
            return
        }

        handleUser({ name, email, password })
        navigate("/")
    }

    const handleBack = () => {
        navigate("/login")
    }

    return (
        <section className="cont-register">
            <form onSubmit={handleSubmit}>
                <h1>Crear cuenta</h1>
                <input type="text" placeholder="Nombre completo" required minLength={3} onChange={handleChangeName}/>
                {
                    name.length < 3 && <p className="error-register">Mínimo 3 caracteres.</p>
                }
                <input type="email" placeholder="Correo electrónico" required autoComplete="off" onChange={handleChangeEmail}/>
                <input type="password" placeholder="Contraseña" required minLength={6} onChange={handleChangePassword}/>
                {
                    password.length < 6 && <p className="error-register">Contraseña muy debil, mínimo 6 caracteres.</p>
                }
                <small>* Todos los campos son obligatorios</small>
                <button>Registrar cuenta</button>            
            </form>
            <button className="btn-back" onClick={handleBack}>Volver</button>
        </section>
    )
}

export { Register }