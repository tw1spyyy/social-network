import headerImg from '../../images/Raster.png'
import './Header.css'

export const Header = () => {
    return (
        <div className="header">
            <img className='header__img' src={headerImg} alt="" />
        </div>
    )
}