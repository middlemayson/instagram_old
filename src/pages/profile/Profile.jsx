import { useState } from 'react';

import { profile } from '../../components/array/profile';
import ProfileInfo from '../../components/profile/ProfileInfo';

import gridBlue_icon from '../../img/elements/grid_icon.png';
import gridGray_icon from '../../img/elements/grid_icon_gray.png';
import listBlue_icon from '../../img/elements/list_icon.png';
import listGray_icon from '../../img/elements/list_icon_gray.png';
import map_icon from '../../img/elements/map_icon.png';
import arrow_icon from '../../img/elements/list_chevron.png';

import './profile.css';

const Profile = () => {

    const [activeTab, setActiveTab] = useState('grid');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <section className="profile">
            {profile.map((profile) => {
                return <ProfileInfo key={profile.id} author={profile.author} name={profile.name} avatar={profile.avatar} desc={profile.desc} photosCount={profile.photosCount} followers={profile.followers} following={profile.following} />
            })}
            <div className="profile__btn">
                <div onClick={() => handleTabClick('grid')} className={`grid-btn-area ${activeTab === 'grid' ? 'active' : ''}`}>
                    <img src={activeTab === 'grid' ? gridBlue_icon : gridGray_icon} alt="" />
                </div>
                <div onClick={() => handleTabClick('list')} className={`list-btn-area ${activeTab === 'list' ? 'active' : ''}`}>
                    <img src={activeTab === 'list' ? listBlue_icon : listGray_icon} alt="" />
                </div>
                <div onClick={() => handleTabClick('map')} className={`map-btn-area ${activeTab === 'map' ? 'active && active-bg' : ''}`}>
                    <div className='bold'><img src={map_icon} alt="" />Photo Map<img className='map-arrow' src={arrow_icon} alt='' /></div>
                </div>
            </div>
            <div className={activeTab === 'grid' ? 'profile__photo-grid active' : 'profile__photo-grid'}>
                GRID
            </div>
            <div className={activeTab === 'list' ? 'profile__photo-list active' : 'profile__photo-list'}>
                LIST
            </div>
            <div className={activeTab === 'map' ? 'profile__photo-map active' : 'profile__photo-map'}>
                MAP
            </div>
        </section>
    );
}
 
export default Profile;