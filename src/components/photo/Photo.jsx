import '../array/photoList';
import './photo.css';

const Photo = ({photo}) => {
    return (
    <>
        <div className="photo"><img src={photo} alt="" /></div>
    </>
    );
}
 
export default Photo;