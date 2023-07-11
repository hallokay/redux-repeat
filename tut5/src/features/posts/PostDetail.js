import React from 'react'
import { useSelector } from 'react-redux'
import { selectPostById } from './postsSlice'
import { TimeAgo, PostAuthor, ReactionButton } from './index'
import { useParams, Link } from 'react-router-dom'

const PostDetail = () => {
    const { postId } = useParams();

    // console.log('postId', postId);
    const post = useSelector((state) => selectPostById(state, Number(postId)))

    if (!post) {
        return (
            <section>
                <h2>게시물을 찾을 수 없습니다.</h2>
            </section>
        )
    }

    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.body}</p>

            <p className='postCredit'>
                <Link to={`/post/edit/${post.id}`}>수정</Link>

                <PostAuthor userId={post.userId} />
                <TimeAgo timeStamp={post.date} />
            </p>
            <ReactionButton post={post} />
        </article>
    )
}

export default PostDetail