import PhotoNews from "../../components/photo/PhotoNews";

import TimerComponent from "../../components/hooks/timer";
import { profile } from "../../components/array/profile";
import '../news/news.css';
const Following = () => {
    return (
        <section className="following">
            <div className="news__block">
                <p><span className='blue_text bold'>twheat</span> liked 4 photo.</p>
                <div className="news__photo-block">
                    {profile.map((profile) => {
                        const firstTwoPhotos = profile.photo.slice(0, 4);
                        return firstTwoPhotos.map((photo) => (
                            <PhotoNews key={photo.id} photo={photo.photo} />
                        ));
                    })}
                </div>
                <p className='gray_text'><TimerComponent /></p>
            </div>
            <div className="news__block">
                <p><span className='blue_text bold'>arrakis</span> liked 2 photo.</p>
                <div className="news__photo-block">
                    {profile.map((profile) => {
                        const firstTwoPhotos = profile.photo.slice(4, 6);
                        return firstTwoPhotos.map((photo) => (
                            <PhotoNews key={photo.id} photo={photo.photo} />
                        ));
                    })}
                </div>
                <p className='gray_text'><TimerComponent /></p>
            </div>
            <div className="news__block">
                <p><span className='blue_text bold'>amogus</span> liked 1 photo.</p>
                <div className="news__photo-block">
                    {profile.map((profile) => {
                        if (profile.photo.length > 0) {
                            return <PhotoNews key={profile.photo[1].id} photo={profile.photo[1].photo} />;
                        }
                        return null;
                    })}
                </div>
                <p className='gray_text'>1 hour ago</p>
            </div>
            <div className="news__block news__block__flexed">
                <div className="news__photo-block">
                {profile.map((profile) => {
                        const firstTwoPhotos = profile.photo.slice(5, 6);
                        return firstTwoPhotos.map((photo) => (
                            <PhotoNews key={photo.id} photo={photo.photo} />
                        ));
                    })}
                </div>
                <div>
                    <p><span className='blue_text bold'>amogus</span> liked <span className='blue_text bold'>zigmund</span>'s photo.</p>
                    <p className='gray_text'>2 hour ago</p>
                </div>
            </div>
            <div className="news__block news__block__flexed">
                <div className="news__photo-block">
                {profile.map((profile) => {
                        const firstTwoPhotos = profile.photo.slice(6, 7);
                        return firstTwoPhotos.map((photo) => (
                            <PhotoNews key={photo.id} photo={photo.photo} />
                        ));
                    })}
                </div>
                <div>
                    <p><span className='blue_text bold'>amogus</span> and <span className='blue_text bold'>spidermandc</span> liked <span className='blue_text bold'>wonderwoman</span>'s photo.</p>
                    <p className='gray_text'>3 hour ago</p>
                </div>
            </div>
        </section>
    );
}
 
export default Following;