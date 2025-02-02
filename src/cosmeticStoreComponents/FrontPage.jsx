import { useNavigate } from 'react-router-dom';
import './css/FrontPage.css';
function FrontPage() {

    const navToShop = useNavigate(null);
    const handleNavClick = () => {
        navToShop('/Shop');
    }

    return(
        <article className="front-page">
            <div
                className='front-page-container'
                >
                <h1 className="front-page-heading">Gift for your skin</h1>
                <p className="front-page-text">
                    Aliquot fugiat ipsum nostrud ex et eu incididunt quis minim
                    excepteur voluptate
                </p>
                <button
                    type="button"
                    className="front-page-button"
                    onClick={handleNavClick}
                    >
                    Shop Now
                </button>
            </div>
        </article>
    )
}

export default FrontPage