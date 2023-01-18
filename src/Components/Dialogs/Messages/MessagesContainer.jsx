import { connect } from "react-redux";
import { changeMessageAC, sendMessageAC } from "../../../Redux/DialogsReducer";
import { Messages } from "./Messages";

const mapStateToProps = (state) =>{
    return {
        messagesData: state.dialogsPage.messagesData
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        sendMessageAC: () =>{
            dispatch(sendMessageAC())
        },
        changeMessageAC: (newText) =>{
            dispatch(changeMessageAC(newText))
        }
    }
}


export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)