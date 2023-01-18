import './../Profile.css'
import author from '../../../images/about.jfif'
import React from 'react'



export const Posts = (props) =>{

    const Post = (props) =>{
        return (
            <div key={props.id} className="posts__item">
                <img className='posts__item-img' src={author} alt="" />
                <div className="posts__item-about">
                    <p className='posts__item-name'>{props.name}</p>
                    <p className='posts__item-commentary'>{props.coment}</p>
                </div>
            </div>
        )
    }
    
    const convertedPostsData = props.postsData.map((el, index) => <Post key={index} name={el.name} coment={el.coment} />)
    
    const newPost = React.createRef()
    
    const onChangeHandler = () =>{
        const newText = newPost.current.value
        props.onChangePostAC(newText)
    }
    const onClickHandler = (e) =>{
        e.preventDefault()
        props.onClickSendAC()
    }

    return (
        <div className="posts">
            <p className='posts__title'>My posts</p>
            <div className="posts__form">
                <textarea onChange={onChangeHandler} ref={newPost} value={props.newPostText} className='posts__form-area' placeholder="your news..."/>
                <button onClick={onClickHandler} className="posts__form-btn">Send</button>
            </div>
            <div className="posts__inner">
                {convertedPostsData}
            </div>
        </div>
    )
}

