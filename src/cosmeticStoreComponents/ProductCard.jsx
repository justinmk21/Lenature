/* eslint-disable react/prop-types */
import './css/ProductCard.css';
import { MdShoppingCart } from 'react-icons/md';
import product from './images/CBDOIL.png';
import { useNavigate } from 'react-router';
function ProductCard() {

    function ProductState({ items }) {

        return (
            items === 'New' ? (
                <span className='status' >
                    New
                </span>
            ) : (
                <span className='status'>Best Seller</span>
            )
        )
    }

    const navToDetailProduct = useNavigate();

    const handleClickNav = () => {
        navToDetailProduct('/Detail');
    }

    return (
        <article
            className="product-card"
            onClick={handleClickNav}
            >
            <div className="product-img">
                <ProductState
                    items={'Best Seller'}
                    />
                <img src={product} alt="product image"/>
            </div>
            <div className="product-details">
                <h3>Product Title</h3>
                <p>Deserunt non fugiat aute cons</p>
                <div className="product-prices" >
                    <div>
                        <p>$32</p>
                        <p>$42</p>
                    </div>
                    <div className="product-cart">
                        <button>
                            <MdShoppingCart color='#459D7AFF' size={'20'}/>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProductCard