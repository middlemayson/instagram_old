import './header.css';
import instagram_logo from '../../img/elements/action_bar_branding.png';
import refresh_icon from '../../img/elements/action_bar_glyph_refresh.png';

const Header = () => {
    return (
        <section className="header">
            <img className='ghost-element' src="" alt="" />
            <img className='logo-header' src={instagram_logo} alt="" />
            <img className='btn-shadow' src={refresh_icon} alt="" />
        </section>
    );
}
 
export default Header;