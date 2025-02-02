/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './css/ProductCard.css';
import { MdShoppingCart } from 'react-icons/md';
import product from './images/CBDOIL.png';
import { useDispatch } from 'react-redux';
import { addItemToCart } from './CartSlice';
import { useSelector } from 'react-redux';

function ProductCard({ productName, price, status, cartAdd, onClick }) {

    const cartItems = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch();
    const handleAddToCart = product => {
        dispatch(addItemToCart(product));
    }

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


    return (
        <article
            className="product-card"
            onClick={onClick}
            >
            <div className="product-img">
                <ProductState
                    items={status}
                    />
                <img src={product} alt="product image"/>
            </div>
            <div className="product-details">
                <h3>{productName}</h3>
                <p>Deserunt non fugiat aute cons</p>
                <div className="product-prices" >
                    <div>
                        <p>${price}</p>
                        <p>$42</p>
                    </div>
                    <div className="product-cart">
                        <button
                            onClick={(event) => {
                                event.stopPropagation();
                                handleAddToCart(cartAdd);
                            }}
                            disabled={false}
                            >
                            <MdShoppingCart color='#459D7AFF' size={'20'}/>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProductCard