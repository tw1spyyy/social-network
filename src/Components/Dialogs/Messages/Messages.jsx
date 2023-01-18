import './../Dialogs.css'
import React from 'react'




export const Messages = (props) =>{

    const messagesDataConverted = props.messagesData.map((el, index) => <p key={index} className='messages__message'>{el.message}</p>)
    
    const input = React.createRef()

    const onChangeHandler = () =>{
        const text = input.current.value
        props.changeMessageAC(text)
    }

    const onClickHandler = () =>{
        props.sendMessageAC()
    }

    const MessagesForm = () =>{
        return (
            <div className="messages__form">
                <input onChange={onChangeHandler} ref={input} className='messages__form-area' placeholder='type your mes...' />
                <button onClick={onClickHandler} className='messages__form-btn'>send</button>
            </div>
        )
    }        


    return (
       <div className="messages__inner">
            <div className="messages">
                {messagesDataConverted}
            </div>
            <MessagesForm  />
       </div>
    )
}

