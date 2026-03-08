import { useContext, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"

const Aside = () => {
    
    const [search, setSearch] = useState("")

    const { logout, users, handleSelectedUserId} = useContext(ChatContext)

    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate("/login")
    }

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const filteredUsers = users.filter((user) => {
        const fullName = `${user.firstName} ${user.lastName}`
        return fullName.toLowerCase().includes(search.toLowerCase())
    })

    const handleClick = (id) => {
        handleSelectedUserId(id)
    }

    return (
        <aside>
            <h1>Chat UTN</h1>
            <button onClick={handleLogout}>Cerrar sesión</button>
            <input className="search" type="search" placeholder="Buscar contacto" onChange={handleChange} />
            {
                filteredUsers.length === 0 && <p className="not-found">No se encontraron contactos</p>
            }
            <ul>
                {
                    filteredUsers.map((user) => (
                        <li key={user.id} onClick={() => handleClick(user.id) }>
                            <img src={user.image} alt="" />
                            <div>
                                {user.firstName} {user.lastName}
                                <small>{user.address.country}</small>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </aside>
    )
}

export { Aside }
