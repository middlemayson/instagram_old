import {feedList} from '../../components/array/FeedList';
import Post from '../../components/post/Post';
import './feed.css';
import load_icon from '../../img/elements/action_bar_glyph_refresh_spinner_dark.png';
import AdsPhotoMap from '../../components/ads/Ads__photo-map';

const Feed = () => {
    return (
        <section className='feed'>
            <AdsPhotoMap />
            <div className="feed__post">
                {feedList.map((post) => {
                    return <Post key={post.id} author={post.author} location={post.location} photo={post.photo} avatar={post.avatar} desc={post.desc} likes={post.likes} comments={post.comments} timePublish={post.timePublish} />
                })}
            </div>
            <div className="unloaded">
                <img src={load_icon} alt="" />
            </div>
        </section>
    );
}
 
export default Feed;