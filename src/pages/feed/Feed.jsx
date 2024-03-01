import {feedList} from '../../components/array/FeedList';
import Post from '../../components/post/Post';

const Feed = () => {
    return (
        <section className='feed'>
            <div className="feed__ads__photo-maps"></div>
            <div className="feed__post">
                {feedList.map((post) => {
                    return <Post key={post.id} author={post.author} location={post.location} photo={post.photo} avatar={post.avatar} desc={post.desc} likes={post.likes} comments={post.comments} timePublish={post.timePublish} />
                }
                )}
            </div>
        </section>
    );
}
 
export default Feed;