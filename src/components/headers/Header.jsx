import { NavLink, Routes, Route } from 'react-router-dom';

import {profile} from '../array/profile';
import instagram_logo from '../../img/elements/action_bar_branding.png';
import refresh_icon from '../../img/elements/action_bar_glyph_refresh.png';
import gear_icon from '../../img/elements/gear.png';

import './header.css';

const Header = () => {

    
        const { author } = profile[0];

    

    return (
        <>
        <Routes>
            <Route path="/" element={
                <section className="header">
                    <img className='ghost-element' src="" alt="" />
                    <img className='logo-header' src={instagram_logo} alt="" />
                    <img className='btn-shadow' src={refresh_icon} alt="" />
                </section>
                } />
            <Route path="/explore" element={
                <section className="header">
                    <img className='ghost-element' src="" alt="" />
                    <div className='header__title'>Explore</div>
                    <img className='btn-shadow' src={refresh_icon} alt="" />
                </section>
                } />
            
            <Route path="/news" element={
                <section className="header">
                    <img className='ghost-element' src="" alt="" />
                    <img className='logo-header' src={instagram_logo} alt="" />
                    <img className='btn-shadow' src={refresh_icon} alt="" />
                </section>
                } />

            <Route path="/profile" element={
                <section className="header">
                    <img className='ghost-element' src="" alt="" />
                    <div className='header__title'>{author}</div>
                    <img className='btn-shadow' src={gear_icon} alt="" />
                </section>
                } />
        </Routes>
    
        </>
    );
}
 
export default Header;