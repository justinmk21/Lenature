import Logo from './images/LenatureLogo.svg';
import { MdSearch, MdShoppingCart, MdPerson } from 'react-icons/md';
import './css/HeaderSection.css'
import { Link, NavLink } from 'react-router';

function HeaderSection() {

    return (
        <section
            className="header-section"
            >
            <article className="header-article">
                <Link to="Lenature">
                    <img src={Logo} alt="Logo" />
                </Link>
                <nav
                    className="navbar"
                    >
                    <NavLink to={'/Shop'}>Shop</NavLink>
                    <NavLink to={'/Offers'}>Offers</NavLink>
                    <NavLink to={'/Stories'}>Our Story</NavLink>
                    <NavLink to={'/Blog'}>Blog</NavLink>
                </nav>
                <div
                    className="search-bar"
                    >
                    <div
                        className="search-box"
                        >
                        <div
                            style={{ marginLeft: '10px' }}
                            >
                            <MdSearch size={'20'}/>
                        </div>
                        <input
                            type="search"
                            placeholder="Search Product..."
                            />
                    </div>
                    <div
                        className='cart-button-container'
                        >
                        <button>
                            <div className="cart-icon">
                                <MdShoppingCart size={'20'}/>Cart (0)
                            </div>
                        </button>
                    </div>
                    <div className="profile-icon">
                        <MdPerson size={'20'}/>
                    </div>
                </div>
            </article>
    </section>
    )
}

export default HeaderSection