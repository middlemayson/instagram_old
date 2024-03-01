import arrow_icon from '../../img/elements/list_chevron.png';
import map_photo from '../../img/elements/map_photo.png';
import './style.css';

const Ads__photoMap = () => {
    return (
        <div className="container">
            <img className='photo-map' src={map_photo} />
            <div className="ads__text">
                <h3 className='bold'>Introduction Photo Maps!</h3>
                <p>Review & explore yours now</p>
            </div>
            <img className='map-arrow' src={arrow_icon} />
        </div>
    );
}
 
export default Ads__photoMap;