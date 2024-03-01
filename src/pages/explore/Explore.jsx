import { photoList } from "../../components/array/photoList";
import Photo from '../../components/photo/Photo';
import search_icon from '../../img/elements/magnifying_glass.png';
import './explore.css';

const Explore = () => {
    return (
        <section className="explore">
            <div className="search">
                <div className="search__input">
                    <img src={search_icon} alt="" />
                    <input name="search-input" defaultValue='Search users and hashtags' />
                </div>
            </div>
            <div className="explore__img-grid">
                {photoList.map((photo) => {
                    return <Photo key={photo.id} photo={photo.photo} />
                })}
            </div>
        </section>
    );
}
 
export default Explore;