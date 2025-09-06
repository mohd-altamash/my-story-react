export default function Post(props) {

  return (
    <article className="media content-section">
      <img className="rounded-circle article-img" src={props.profileImage} />
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