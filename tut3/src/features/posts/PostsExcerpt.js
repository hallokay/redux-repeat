import React from 'react'
import { TimeAgo, PostAuthor, ReactionButton } from './index'

const PostsExcerpt = ({ post }) => {
    // console.log('excerpt', post);
    return (
        <article>
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}</p>
            <p>
                <PostAuthor userId={post.userId} />
                <TimeAgo timeStamp={post.date} />
            </p>
            <ReactionButton post={post} />
        </article>
    )
}

export default PostsExcerpt