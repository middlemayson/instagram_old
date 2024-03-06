import './photo.css';

const PhotoNews = ({photo}) => {
    return (
    <>
        <div className="news__photo"><img src={photo} alt="" /></div>
    </>
    );
}
 
export default PhotoNews;