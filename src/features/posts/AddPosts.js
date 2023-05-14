import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postAdded } from './postsSlice';
const AddPosts = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onSubmitHandle = (e) => {
        e.preventDefault();

        if (title && content) {
            dispatch(postAdded(title, content))
            setTitle('');
            setContent('');
        }
    }

    return (
        <section>
            <h2>
                게시물 추가
            </h2>
            <form onSubmit={onSubmitHandle}>
                <label htmlFor='postTitle'>제목</label>
                <input type='text' id='postTitle' name='postTitle' value={title} onChange={e => setTitle(e.target.value)} />

                <label htmlFor='postContent'>내용</label>
                <textarea type='text' id='postContent' name='postContent' value={content} onChange={e => setContent(e.target.value)} />

                <button type='submit'>저장</button>
            </form>
        </section>
    )
}

export default AddPosts