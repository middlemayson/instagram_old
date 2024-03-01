import { NavLink } from 'react-router-dom';

import feed_icon from '../../img/elements/tab_bar_glyph_feed.png';
import explore_icon from '../../img/elements/tab_bar_glyph_explore.png';
import camera_icon from '../../img/elements/tab_bar_glyph_camera.png';
import news_icon from '../../img/elements/tab_bar_glyph_news.png';
import profile_icon from '../../img/elements/tab_bar_glyph_profile.png';

import './navbar.css';

const Navbar = () => {
    return (
    <section className="navbar">
        <NavLink to='/' className="btn-nav"><img src={feed_icon} alt="" /></NavLink>
        <NavLink to='/explore' className="btn-nav"><img src={explore_icon} alt="" /></NavLink>
        <div className="btn-nav blue"><img src={camera_icon} alt="" /></div>
        <div className="btn-nav"><img src={news_icon} alt="" /></div>
        <div className="btn-nav"><img src={profile_icon} alt="" /></div>
    </section>
    );
}
 
export default Navbar;