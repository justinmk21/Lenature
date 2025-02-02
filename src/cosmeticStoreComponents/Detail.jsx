/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Flex } from '@chakra-ui/react';
import { MdStar, MdCheck, MdAddShoppingCart } from 'react-icons/md';
import oil from './images/CBDOIL.png';
import './css/Detail.css';
import { useContext, useEffect, useState } from 'react';
import img1 from './images/Img1.jpg';
import img2 from './images/Img2.jpg';
import img3 from './images/Img3.jpg';
import img4 from './images/Img4.jpg';
import RelatedProducts from './RelatedProducts';
import Benefits from './Benefits';
import Ingredients from './Ingredients';
import HowTo from './HowToUse';
import Reviews from './Reviews';
import FAQs from './FAQs';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, decreaseItemQuantity, increaseItemQuantity, removeItemFromCart } from './CartSlice';
import { ProductContext } from '../App';
import { useParams } from 'react-router-dom';

function Detail() {

    const [count, setCount] = useState(1);

    const { cartItems, totalPrice, totalItems } = useSelector(state => state.cart);

    const Products = useContext(ProductContext);

    const { id } = useParams();

    const item = Products.find((product) => product['id'] === parseInt(id));

    const dispatch = useDispatch();

    const decreaseCount = () => {
        if (count > 1) {
            setCount(c => c - 1 );
        }
    }
    const increaseCount = () => setCount(c => c + 1);

    const handleAddItemToCart = product => {
        dispatch(addItemToCart(product));
    }
    const handleIncreaseItemQuantity = product => {
        dispatch(increaseItemQuantity(product));
    }

    const [content, setContent] = useState('Benefits');

    const checkout = useNavigate(null);
    const handleNavClick = () => {
        checkout('/Checkout');
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return (
        <>
        <section className="detail-section">
            <article className='product-image'>
                <div
                    className='side-imgs'
                    >
                    <img src={img1} alt="product images" />
                    <img src={img2} alt="product images" />
                    <img src={img3} alt="product images" />
                    <img src={img4} alt="product images" />
                </div>
                <img
                    className='display-img'
                    src={oil}
                    alt="product image"
                    />
            </article>
            <article className="product-detail">
                <h1>{item.name}</h1>
                <p>Aliquip fugiat ipsum nostrud ex et eu incididunt</p>
                <Flex
                    className='product-detail-prices'
                    alignItems={'center'}
                    >
                    <p>${item.price}</p><p>$42</p>
                </Flex>
                <p>
                    In ullamco labore mollit et exercitation fugiat exercitation
                     minim ex sint ullamco exercitation amet officia mollit. Qui
                      cillum pariatur in con
                </p>
                <Flex
                    className='detail-reviews'
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    >
                    <Flex>
                        <p>368</p>
                        <p>reviews</p>
                    </Flex>
                    <Flex>
                        <p>823</p>
                        <p>sold</p>
                    </Flex>
                    <Flex
                        alignItems={'center'}
                        >
                        <MdStar color='#FFC970FF'/>
                        <MdStar color='#FFC970FF'/>
                        <MdStar color='#FFC970FF'/>
                        <MdStar color='#FFC970FF'/>
                        <MdStar color='gray'/>
                        <p
                            style={{ fontWeight: 'bold', marginLeft: '6px' }}
                            >
                            4.0
                        </p>
                    </Flex>
                </Flex>
                <Flex
                    margin={'20px 0'}
                    >
                    <div
                        style={{
                            borderRadius: '50%',
                            border: '1px solid #117B34FF',
                            padding: '3px', marginRight: '8px',
                        }}
                        >
                        <MdCheck color='#117B34FF'/>
                    </div>
                    <p>Free shipping on orders over $49USD</p>
                </Flex>
                <Flex
                    margin={'20px 0'}
                    >
                    <div
                        style={{
                            borderRadius: '50%',
                            border: '1px solid #117B34FF',
                            padding: '3px', marginRight: '8px',
                        }}
                        >
                        <MdCheck color='#117B34FF'/>
                    </div>
                    <p>Free + easy returns</p>
                </Flex>
                <div
                    className='select-size'
                    style={{ margin: '20px 0' }}
                    >
                    <p
                        style={{
                            color: '#424955FF',
                            fontSize: '16px',
                            lineHeight: '26px',
                            fontWeight: '700',
                            marginBottom: '4px',
                        }}
                        >
                        Choose size
                    </p>
                    <select className='size-options'>
                        <option>50.00 ML</option>
                        <option>70.00 ML</option>
                        <option>100.00 ML</option>
                    </select>
                </div>
                <div
                    style={{ marginBottom: '20px'}}
                    >
                    <p
                        style={{
                            color: '#424955FF',
                            fontSize: '16px',
                            lineHeight: '26px',
                            fontWeight: '700',
                            marginBottom: '4px',
                        }}
                        >
                        Quantity
                    </p>
                    <Flex
                        className='quantity'
                        >
                        <button onClick={decreaseCount}>-</button>
                        <button>{count}</button>
                        <button onClick={increaseCount}>+</button>
                    </Flex>
                </div>
                <Flex
                    className='cart-checkout'
                    >
                    <button
                        onClick={() => handleAddItemToCart(Products[item['id']])}
                        >
                        <Flex
                            alignItems={'center'}
                            >
                            <MdAddShoppingCart size={'24'}/>Add to bag
                        </Flex>
                    </button>
                    <button onClick={handleNavClick}>Checkout</button>
                </Flex>
            </article>
        </section>
        <RelatedProducts/>
        <section className="tab-section">
            <button
                onClick={() => setContent('Benefits')}
                style={{
                    backgroundColor : content === 'Benefits' ? '#C5E6D9FF' : ''
                }}
                >
                Benefits
            </button>
            <button
                onClick={() => setContent('Ingredients')}
                style={{
                    backgroundColor : content === 'Ingredients' ? '#C5E6D9FF' : ''
                }}
                >
                Ingredients
            </button>
            <button
                onClick={() => setContent('HowTo')}
                style={{
                    backgroundColor : content === 'HowTo' ? '#C5E6D9FF' : ''
                }}
                >
                How to use
            </button>
            <button
                onClick={() => setContent('Reviews')}
                style={{
                    backgroundColor : content === 'Reviews' ? '#C5E6D9FF' : ''
                }}
                >
                Reviews
            </button>
            <button
                onClick={() => setContent('FAQs')}
                style={{
                    backgroundColor : content === 'FAQs' ? '#C5E6D9FF' : ''
                }}
                >
                FAQs
            </button>
        </section>
        <section className="product-details-extra">
            {content === 'Benefits' && <Benefits/>}
            {content === 'Ingredients' && <Ingredients/>}
            {content === 'HowTo' && <HowTo/>}
            {content === 'Reviews' && <Reviews/>}
            {content === 'FAQs' && <FAQs/>}
        </section>
        </>
    )
}

export default Detail;