import { NavLink } from 'react-router-dom'
import './Sidebar.css'

export const Sidebar = (props) => {

    const FriendItem = (obj) =>{
        return <li  className='friends__list-item'>
                     <div className="friends__list-circle"></div>
                     <div className="friends__list-name">{obj.name}</div>
                </li>
    }
    
    const convertedFriendsArray = props.store.getState().navPage.friendsArray.map(el => <FriendItem key={el.id} id={el.id} name={el.name} />)
    
    const SidebarFriends = () =>{
        return (
            <div className="friends">
                <p className='friends__title'>Friends</p>
                <ul className="friends__list">
                    {convertedFriendsArray}
                </ul>
            </div>
        )
    }

    



    return (
        <div className="sidebar">
            <SidebarNavList />
            <SidebarFriends />
        </div>
    )
}

const SidebarNavList = () =>{
    return (
        <div className="navList">
            <ul className='sidebar__list'>
                <li className='sidebar__list-item'>
                    <NavLink to='/Profile' className="sidebar__list-link">Profile</NavLink>
                </li>
                <li className='sidebar__list-item'>
                    <NavLink to='/Dialogs' className="sidebar__list-link">Message</NavLink>
                </li>
                <li className='sidebar__list-item'>
                    <NavLink to='/News' className="sidebar__list-link">News</NavLink>
                </li>
                <li className='sidebar__list-item'>
                    <NavLink to='/Music' className="sidebar__list-link">Music</NavLink>
                </li>
            </ul>
        </div>
    )
}
