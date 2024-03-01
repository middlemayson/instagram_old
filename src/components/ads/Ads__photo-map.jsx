import arrow_icon from '../../img/elements/list_chevron.png';
import map_photo from '../../img/elements/map_photo.png';
import './style.css';

const AdsPhotoMap = () => {
    return (
        <div className="container">
            <div className="after-img"><img className='photo-map' src={map_photo} /></div>
            <div className="ads__text">
                <h3 className='bold'>Introduction Photo Maps!</h3>
                <p>Review & explore yours now</p>
            </div>
            <img className='map-arrow' src={arrow_icon} />
        </div>
    );
}
 
export default AdsPhotoMap;