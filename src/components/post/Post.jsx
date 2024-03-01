import '../array/FeedList';
import time_icon from '../../img/elements/stream_photo_timestamp.png';
import location_icon from '../../img/elements/stream_photo_location.png';
import like_icon from '../../img/elements/stream_photo_activity_glyph_likes.png';
import comment_icon from '../../img/elements/stream_photo_activity_glyph_comments.png';
import './post.css';

const Post = ({author, location, photo, avatar, desc, likes, comments, timePublish}) => {
    return (
    <section className="post">
        
        <div className="post__head">
            <div className="post__avatar"><img src={avatar} alt={author} /></div>
            <div className="post__author">
                <h3>{author}</h3>
                <p className="lightBlue_text flexed"><img src={location_icon} alt="" />{location}</p>
            </div>
            <div className="post__time"><img src={time_icon} alt="" /><p className="gray_text">{timePublish}h</p></div>
        </div>
        <div className="post__img"><img src={photo} alt="" /></div>
        <div className="post__actions">
            <div className="post__like flexed blue_text bold"><img src={like_icon} alt="" />{likes} likes</div>
            <div className="post__desc flexed">
                <img src={comment_icon} alt="" /><span className='blue_text bold'>{author}</span>{desc}
            </div>
            <div className="post__comments">
                <p className='gray_text'>view all {comments} comments</p>
                <p><span className='blue_text bold'>ibrahim</span>Nice photo bro!</p>
                <p><span className='blue_text bold'>middle.mayson</span>like share follow</p>
                <p><span className='blue_text bold'>spam.user</span>please follow me</p>
            </div>
            <div className="post__btn">
                <div className='flexed'>
                    <div className="post__btn-like"></div>
                    <div className="post__btn-comment"></div>
                </div>
                <div className="post__btn-more"></div>
            </div>
        </div>
    </section>
);
}
 
export default Post;