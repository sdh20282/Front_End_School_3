import { Link } from "react-router-dom"
import Category from "../category/Category"
import Author from "../author/Author"
import "./posts.css"

export default function Posts({ posts }) {
  console.log(posts)

  return (
    <>
      {posts.map(post =>
        <li key={post.id}>
        <Link to={`/blog/${post.id}`} className="post">
          <article>
            <img src={`https://github.com/weniv/react-blog/blob/react/public/assets/post-img${post.id}.jpg?raw=true`} alt="" />
            <div className="contents-wrap">
              <Category
                category={post.category} 
              />
              <h3>{post.title}</h3>
              <Author
                userName={post.userName}
                profileImg={post.profileImg}
                created={post.created}
              />
              <p className="post-description">
                {post.summary}
              </p>
            </div>
          </article>
        </Link>
      </li>
      )}
    </>
  )
}
