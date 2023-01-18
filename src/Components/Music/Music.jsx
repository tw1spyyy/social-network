import './Music.css'
import heart from './../../images/heart.png'
import redHeart from './../../images/redHeart.png'



export const Music = (props) =>{

    const allMusicArray = props.musicData.map(el => {
        if(!el.addedToLikes){
            return (
                <div key={el.id} className="music__item">
                    <img className="music__item-img" src={el.img} alt="" />
                    <div className="music__item-desc">
                        <span className="music__item-author">{el.author} - </span>
                        <span className="music__item-name">{el.songName}</span>
                    </div>
                    <div className="music__item-btn">
                        <button onClick={() => props.addSongToFavourite(el.id)}  className='music__item-button'>
                        <img src={heart} alt="" />
                        </button>
                    </div>
                </div>
            )
        }
    })
    const myMusicArray = props.musicData.map(el => {
        if(el.addedToLikes){
            return (
                <div key={el.id} className="music__item">
                    <img className="music__item-img" src={el.img} alt="" />
                    <div className="music__item-desc">
                        <span className="music__item-author">{el.author} - </span>
                        <span className="music__item-name">{el.songName}</span>
                    </div>
                    <div className="music__item-btn">
                        <button onClick={() => props.removeSongFromFavourite(el.id)} className='music__item-button'>
                        <img src={redHeart} alt="" />
                        </button>
                    </div>
                </div>
            )
        }
    })

    return (
        <div className="music">
            <div className="music__all">
                {allMusicArray}
            </div>
            <div className="music__my">
                {myMusicArray}
            </div>
        </div>
    )
}