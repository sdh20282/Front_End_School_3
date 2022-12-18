import "./author.css"

export default function Author({userName, profileImg, created}) {
  return (
    <dl class="author-wrap">
      <dt class="a11y-hidden">Author</dt>
      <dd class="author"><img src="https://github.com/weniv/react-blog/blob/react/public/assets/profile.jpg?raw=true" alt="" /> {userName}</dd>
      <dt class="a11y-hidden">Created</dt>
      <dd class="created">{created}</dd>
    </dl>
  )
}
