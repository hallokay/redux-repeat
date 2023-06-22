import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectPostById, updatePost } from './postsSlice';
import { useParams, useNavigate } from 'react-router-dom';

import { selectAllUsers } from '../users/userSlice';

const EditPost = () => {
    const { postId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();



    const post = useSelector((state) => selectPostById(state, Number(postId)))
    const users = useSelector(selectAllUsers);
    console.log(post);
    const [title, setTitle] = useState(post?.title);
    const [content, setContent] = useState(post?.body);
    const [userId, setUserId] = useState(post?.userId);
    const [addReqStatus, setAddReqStatus] = useState('idle');

    if (!post) {
        return (
            <section>
                <h2>게시물을 찾지 못했습니다.</h2>
            </section>
        )
    }


    const canSave = [title, content, userId].every(Boolean) && addReqStatus === 'idle';

    const onSubmitHandle = (e) => {
        e.preventDefault();


        if (canSave) {
            try {
                setAddReqStatus('pending');
                dispatch(updatePost({ id: post.id, title, body: content, userId, reactions: post.reactions })).unwrap()

                setTitle('');
                setContent('');
                setUserId('');
                navigate(`/post/${[postId]}`)
            } catch (err) {
                console.error('게시물을 등록하는데 실패했습니다.', err);
            } finally {
                setAddReqStatus('idle');

            }
        }
    }

    const usersOptios = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))


    return (
        <section>
            <h2>
                게시물 수정
            </h2>
            <form onSubmit={onSubmitHandle}>
                <label htmlFor='postTitle'>제목</label>
                <input type='text' id='postTitle' name='postTitle' value={title} onChange={e => setTitle(e.target.value)} />

                <label htmlFor='author' >글쓴이</label>
                <select id='author' defaultValue={userId} onChange={(e) => setUserId(e.target.value)}>
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
export default EditPost