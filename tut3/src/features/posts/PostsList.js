import { useSelector } from "react-redux";
import { selectAllPosts } from './postsSlice'
import { TimeAgo, PostAuthor, ReactionButton } from './index'

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  // 순서를 뒤집어주는 것... 이거 좀더 찾아보기
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))


  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.date} />
      </p>
      <ReactionButton post={post} />
    </article>
  ))
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
