export default function Post(props) {

  return (
    <article className="media content-section">
      <img className="rounded-circle article-img" src="/static/profile_pics/18f448c6f31c5a9d.jpg" />
      <div className="media-body">
        <div className="article-metadata">
          <a className="mr-2" href="/user/Altamash">{props.userName}</a>
          <small className="text-muted">{props.datePosted}</small>
        </div>
        <h2><a className="article-title" href="/post/28">{props.title}</a></h2>
        <p className="article-content">{props.content}</p>
      </div>
    </article>
  )
}