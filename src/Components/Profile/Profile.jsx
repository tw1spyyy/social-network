import './Profile.css'
import author from '../../images/about.jfif'
import { PostsContainer } from './Posts/PostsContainer'

export const Profile = () => {
    return (
        <div className="profile">
            <ProfileInfo />
            <PostsContainer/>
        </div>
    )
}

const ProfileInfo = () =>{
    return (
        <div className="profile__info">
            <img className='profile__info-img' src="https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/master/pass/IMG%20Worlds%20of%20Adventure%20-%201.jpg" alt="" />
            <div className="profile__info-content">
                <img className='profile__info-content-img' src={author} alt="" />
                <div className="profile__info-about">
                    <p className="profile__info-name">Herasymchuk Roman</p>
                    <ul className='profile__info-about--list'>
                        <li className="profile__info-about--item">
                          Date of Birth: 21 april
                        </li>
                        <li className="profile__info-about--item">
                            City: Kyiv
                        </li>
                        <li className="profile__info-about--item">
                         University: NAU
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

