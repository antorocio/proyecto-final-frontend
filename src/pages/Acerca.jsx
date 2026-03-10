import { useNavigate } from "react-router-dom"

const Acerca = () => {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate("/login")
    }

    return (
        <div className="acerca-page">
        <section className="acerca">
            <h1>Proyecto - TP final</h1>
            <h3>UTN - Desarrollo Web Frontend</h3>
            <p>
                Este proyecto es un aplicación de mensajería basada en Whatsapp.<br/>
                El objetivo es aplicar los conocimientos adquiridos durante las clases mediante la creación de una aplicación web utilizando React.<br/>
                Como base se utilizó el proyecto trabajado en clase y se agregó una nueva funcionalidad: el registro de usuarios.
                Ahora la aplicación permite registrar un usuario a través de un formulario con validaciones básicas y mantener la sesión activa utilizando React Context, incluso cuando la página se recarga.
            </p>
            <h5> Tecnologías utilizadas para el proyecto: </h5>
            <ul>
                <li>React</li>
                <li>React Router</li>
                <li>Context API</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
            <h5> Páginas de la aplicación: </h5>
            <ul>
                <li>Ruta protegida: Home (Aside y Chat)</li>
                <li>Login</li>
                <li>Register</li>
                <li>Acerca</li>
                <li>Not found</li>
            </ul>
            <h5>Observaciones</h5>
            <p>
                Como estudiante este proyecto me permitió practicar conceptos importantes de React como el manejo de estado, la creación de rutas, la organización de componentes y el despliegue de una aplicación web.
            </p>
            <button className="btn-back" onClick={handleBack}>Volver</button>   
        </section>
        </div>
    )
}

export { Acerca }