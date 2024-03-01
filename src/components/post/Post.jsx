import '../array/FeedList';

const Post = ({author, location, photo, avatar, desc, likes, comments, timePublish}) => {
    return (
    <section className="post">
        
        <div className="post__head">
            <div className="post__avatar"><img src={avatar} alt={author} /></div>
            <div className="post__author">
                <h3>{author}</h3>
                <p className="lightBlue_text">{location}</p>
            </div>
            <div className="post__time"><p className="gray_text">{timePublish}h</p></div>
        </div>
        <div className="post__img"><img src={photo} alt="" /></div>
        <div className="post__actions">
            <div className="post__like"><p className="blue_text">{likes} likes</p></div>
            <div className="post__desc">
                <p><span className='blue_text'>{author}</span>{desc}</p>
            </div>
            <div className="post__comments">
                <p className='gray_text'>view all {comments} comments</p>
                <p><span className='blue_text'>ibrahim</span>Nice photo bro!</p>
                <p><span className='blue_text'>middle.mayson</span>like share follow</p>
                <p><span className='blue_text'>spam.user</span>please follow me</p>
            </div>
        </div>
    </section>
);
}
 
export default Post;