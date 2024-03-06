import './news.css';
import PhotoNews from "../../components/photo/PhotoNews";

import { profile } from "../../components/array/profile";
import TimerComponent from '../../components/hooks/timer';

const News = () => {
    

    return (
        <section className="news">
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
                    <p className='gray_text'><TimerComponent /></p>
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
                    <p className='gray_text'><TimerComponent /></p>
                </div>
            </div>
            <div className="news__block news__block__flexed">
                <div className="news__photo-block">
                {profile.map((profile) => {
                        const firstTwoPhotos = profile.photo.slice(3, 4);
                        return firstTwoPhotos.map((photo) => (
                            <PhotoNews key={photo.id} photo={photo.photo} />
                        ));
                    })}
                </div>
                <div>
                    <p><span className='blue_text bold'>amogus</span> and <span className='blue_text bold'>projectalice</span> liked <span className='blue_text bold'>wonderwoman</span>'s photo.</p>
                    <p className='gray_text'>1 hour ago</p>
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
                    <p><span className='blue_text bold'>duneman</span> and <span className='blue_text bold'>harkonnen</span> liked <span className='blue_text bold'>wonderwoman</span>'s photo.</p>
                    <p className='gray_text'><TimerComponent /></p>
                </div>
            </div>
            <div className="news__block news__block__flexed">
                <div>
                    <p><span className='blue_text bold'>fremen</span> staring following <span className='blue_text bold'>harkonnen</span>.</p>
                    <p className='gray_text'>1 hours ago</p>
                </div>
            </div>
            <div className="news__block news__block__flexed">
                <div>
                    <p><span className='blue_text bold'>fremen</span> staring following <span className='blue_text bold'>harkonnen</span>.</p>
                    <p className='gray_text'>7 hours ago</p>
                </div>
            </div>
            <div className="news__block news__block__flexed">
                <div>
                    <p><span className='blue_text bold'>fremen</span> staring following <span className='blue_text bold'>harkonnen</span>.</p>
                    <p className='gray_text'>1 day ago</p>
                </div>
            </div>
            <div className="news__block news__block__flexed">
                <div>
                    <p><span className='blue_text bold'>fremen</span> staring following <span className='blue_text bold'>harkonnen</span>.</p>
                    <p className='gray_text'>1 day ago</p>
                </div>
            </div>
        </section>
    );
}
 
export default News;
