import { connect } from "react-redux";
import { addSongToFavourite,removeSongFromFavourite } from "../../Redux/MusicReducer";
import { Music } from "./Music";

const mapStateToProps = (state) =>{
    return {
        musicData: state.musicPage.musicData
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        addSongToFavourite: (userId) =>{
            dispatch(addSongToFavourite(userId))
        },
        removeSongFromFavourite: (userId) =>{
            dispatch(removeSongFromFavourite(userId))
        },
    }
} 

export const MusicContainer = connect(mapStateToProps, mapDispatchToProps)(Music)