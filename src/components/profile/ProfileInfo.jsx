import arrow_icon from '../../img/elements/list_chevron.png';
import '../array/profile';
import './profileInfo.css';

const ProfileInfo = ({author, name, avatar, desc, photosCount, followers, following}) => {
    return (
        <div className="profile__info">
            <table className='profile__info-table'>
                <tbody>
                    <tr className='td--center'>
                        <td rowspan="2"><div className="profile__photo"><img src={avatar} alt="" /></div></td>
                        <td className='td--fixed'><h3 className='bold'>{photosCount}</h3> <span className='gray_text bold'>photos</span></td>
                        <td className='td--fixed'><h3 className='bold'>{followers}</h3> <span className='gray_text bold'>followers</span></td>
                        <td className='td--fixed'><h3 className='bold'>{following}</h3> <span className='gray_text bold'>following</span></td>
                    </tr>
                    <tr>
                        <td colspan="3" className='bold td--profile'><div className='td--flex'>Edit your profile<img className='map-arrow' src={arrow_icon} alt='' /></div></td>
                    </tr>
                    <tr>
                        <td className='td--bio' colspan="4">
                            <h2 className='bold'>{name}</h2>
                            <p>{desc}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
 
export default ProfileInfo;