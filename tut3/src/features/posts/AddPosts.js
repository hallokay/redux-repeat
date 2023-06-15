import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './postsSlice';
import { selectAllUsers } from '../users/userSlice';
const AddPosts = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('')

    const users = useSelector(selectAllUsers);

    const onSubmitHandle = (e) => {
        e.preventDefault();

        if (title && content) {
            dispatch(postAdded(title, content, userId));
            setTitle('');
            setContent('');
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
    const usersOptios = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))


    return (
        <section>
            <h2>
                게시물 추가
            </h2>
            <form onSubmit={onSubmitHandle}>
                <label htmlFor='postTitle'>제목</label>
                <input type='text' id='postTitle' name='postTitle' value={title} onChange={e => setTitle(e.target.value)} />

                <label htmlFor='author' >글쓴이</label>
                <select id='author' value={userId} onChange={(e) => setUserId(e.target.value)}>
                    <option value=""></option>
                    {usersOptios}
                </select>

                <label htmlFor='postContent'>내용</label>
                <textarea type='text' id='postContent' name='postContent' value={content} onChange={e => setContent(e.target.value)} />

                <button type='submit' disabled={!canSave}>저장</button>
            </form>
        </section>
    )
}

export default AddPosts