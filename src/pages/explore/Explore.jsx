import { photoList } from "../../components/array/photoList";
import Photo from '../../components/photo/Photo';
import './explore.css';

const Explore = () => {
    return (
        <section className="explore">
            <div className="search">

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