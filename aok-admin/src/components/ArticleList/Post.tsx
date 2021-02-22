
interface PostProps {
  title: string
}
const Post = (props: PostProps) => {
  return <div>
    <h1 className="post-title">
      {props.title}
    </h1>
    <div className="main">
      <img className="post-banner" src="" alt=""/>
      <div className="post-msg">
        <div className="intro"></div>
        <div className="time"></div>
      </div>
    </div>
  </div>
}

export default Post