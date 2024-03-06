// import { NavLink } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import { profile } from '../array/profile';
import '../array/profile';
import '../photo/photo.css';

const ProfileGrid = ({photo, index}) => {
    
    return (
    <>
        {/* <NavLink to={`/profile/${index}`} > */}
            <div className="photo"><img src={photo} alt="" /></div>
        {/* </NavLink> */}
    </>
    );
}
 
export default ProfileGrid;