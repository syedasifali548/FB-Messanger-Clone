// import { Card} from '@material-ui/core'
import React, { forwardRef } from 'react'
import './Message.css';

const Message = forwardRef(({ message, username }, ref) => {
    const isUser = username === message.username;
    return (
        <div ref={ref} className={`message ${isUser && `message_user`}`} >

            <div className={isUser ? "message_userCard" : "message_guestCard"}>

             <strong className="username_strong"> {!isUser && `${message.username || 'Unknown User'}:`} </strong>{message.message}

            </div>
        </div>
    )
})

export default Message
