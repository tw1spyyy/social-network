import { ContactsList } from './ContactsList/ContactsList'
import './Dialogs.css'
import { MessagesContainer } from './Messages/MessagesContainer'


export const Dialogs = (props) =>{
    return (
        <div className="dialogs">
            <ContactsList store={props.store}/>
            <MessagesContainer/>
        </div>
    )
}
