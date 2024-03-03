import { NavLink } from 'react-router-dom';

import feed_icon from '../../img/elements/tab_bar_glyph_feed.png';
import explore_icon from '../../img/elements/tab_bar_glyph_explore.png';
import camera_icon from '../../img/elements/tab_bar_glyph_camera.png';
import news_icon from '../../img/elements/tab_bar_glyph_news.png';
import profile_icon from '../../img/elements/tab_bar_glyph_profile.png';

import './navbar.css';

const Navbar = () => {

    const activeLink = 'btn-nav--active';
    const normalLink = 'btn-nav';

    return (
    <section className="navbar">
        <NavLink to='/' className={({isActive}) => isActive ? activeLink : normalLink}><img src={feed_icon} alt="" /></NavLink>
        <NavLink to='/explore' className={({isActive}) => isActive ? activeLink : normalLink}><img src={explore_icon} alt="" /></NavLink>
        <div className="btn-nav blue"><img src={camera_icon} alt="" /></div>
        <NavLink to='/news' className={({isActive}) => isActive ? activeLink : normalLink}><img src={news_icon} alt="" /></NavLink>
        <NavLink to='/profile' className={({isActive}) => isActive ? activeLink : normalLink}><img src={profile_icon} alt="" /></NavLink>
    </section>
    );
}
 
export default Navbar;