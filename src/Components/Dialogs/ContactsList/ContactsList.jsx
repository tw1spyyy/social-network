import '../Dialogs.css'


const ContactsItem = (props) =>{
    return (
        <div className="contacts__item">
            <a href="#">{props.name}</a>
        </div>
    )
}


export const ContactsList = (props) =>{

    const contactsDataConverted = props.store.getState().dialogsPage.contactsData.map((el, index) => <ContactsItem key={index}name={el.name} />)

    return (
        <div className="contacts__list">
            {contactsDataConverted}
        </div>
    )
}

