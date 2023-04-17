import React from 'react';
import s from './Post.module.css';// импортируем объект s
import post from '../../../../img/post.jpg'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={post} alt="" />
            {props.message}
            <span>likes</span> {props.likesCount}
        </div>
    )
}

export default Post;