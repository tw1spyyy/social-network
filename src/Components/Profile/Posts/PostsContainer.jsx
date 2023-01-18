import { connect } from "react-redux";
import { onClickSendAC, onChangePostAC } from "../../../Redux/ProfileReducer";
import { Posts } from "./Posts";

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData  ,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChangePostAC: (newText) =>{
            dispatch(onChangePostAC(newText))
        },
        onClickSendAC: () =>{
            dispatch(onClickSendAC())
        }
    }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)