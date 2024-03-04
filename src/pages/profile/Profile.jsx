import { useState } from 'react';

import { profile } from '../../components/array/profile';
import ProfileInfo from '../../components/profile/ProfileInfo';
import Photo from '../../components/photo/Photo';
import { photoList } from '../../components/array/photoList';
import Post from '../../components/post/Post';
import { feedList } from '../../components/array/FeedList';

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
                {photoList.map((photo) => {
                    return <Photo key={photo.id} photo={photo.photo} />
                })}
            </div>
            <div className={activeTab === 'list' ? 'profile__photo-list active' : 'profile__photo-list'}>
            <div className="feed__post feed__post-profile">
                {feedList.map((post) => {
                        return <Post key={post.id} author={post.author} location={post.location} photo={post.photo} avatar={post.avatar} desc={post.desc} likes={post.likes} comments={post.comments} timePublish={post.timePublish} />
                    })}
            </div>
            </div>
            <div className={activeTab === 'map' ? 'profile__photo-map active' : 'profile__photo-map'}>
                MAP
            </div>
        </section>
    );
}
 
export default Profile;