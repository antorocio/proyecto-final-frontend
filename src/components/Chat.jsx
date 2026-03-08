import { useState, useRef, useEffect, useContext } from "react"
import { ChatContext } from "../context/ChatContext"

const Chat = () => {

    const [text, setText] = useState("")
    const chatBodyRef = useRef(null)

    const { selectedUser, handleMessages } = useContext(ChatContext)

    const handleChangeText = (event) => {
        setText(event.target.value)
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            sendMessage()
        }
    }
    
    const sendMessage = () => {

        if (text.length === 0) {
            return
        }

        const currentTime = new Date().toLocaleTimeString("es-AR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
        })

        const newMessage = {
            author: "me",
            text: text,
            time: currentTime
        }

        handleMessages(newMessage)
        setText("")
    }

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight
        }
    }, [selectedUser])

    if (!selectedUser) {
        return (
            <section className="chat-cont-empty">
                <p className="chat-empty">Selecciona un contacto para conversar</p>
            </section>
        )
    }

    return (
        <section className="chat">
            <header>
                <h3>{selectedUser.firstName} {selectedUser.lastName}</h3>
                <small>{selectedUser.address.country}</small>
            </header>
            <div className="chat-body" ref={chatBodyRef}>
                {
                    selectedUser.messages.map((message) => <div key={message.id} className={`message ${message.author === "me" ? "me" : "received"}`}>
                        <p><b>{message.author}</b>: {message.text}</p>
                        <p className="timestamp">{message.time}</p>
                    </div>)
                }
            </div>
            <div className="chat-input">
                <input type="text" placeholder="Escribe un mensaje" onChange={handleChangeText} onKeyDown={handleKeyDown} value={text}/>
                <button onClick={sendMessage}>Enviar</button>
            </div>
        </section>
    )
}

export { Chat }

