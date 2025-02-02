/* eslint-disable react/prop-types */
import { Flex } from '@chakra-ui/react';
import { MdCalendarMonth, MdPerson2, MdMoney, MdCurrencyPound } from 'react-icons/md';
import { BanknotesIcon } from '@heroicons/react/24/outline';
import { LuNotebookText } from 'react-icons/lu';
import './css/Purchase.css';
import oil from './images/CBDOIL.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Purchase() {

    const { cartItems, totalPrice, totalItems } = useSelector(state => state.cart);

    const navToShop = useNavigate();
    const handleNavToShop = () => {
        navToShop('/Shop');
    }

    function ProductSummary({ ProductName, size, img, NoItems, price }) {

        return (
            <article className="product-summary">
                <Flex
                    className='product-img-summary'width={'100%'}
                    >
                    <img
                        src={img}
                        alt='product image'
                        />
                    <Flex
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        maxWidth='723px'
                        width={'100%'}
                        height= '127px'
                        >
                        <div className='product-list-summary'>
                            <p>{ProductName}</p>
                            <p>{size}</p>
                            <p>{NoItems}</p>
                        </div>
                        <p className='summary-cost'>{parseFloat(price)*parseFloat(NoItems)}</p>
                    </Flex>
                </Flex>
            </article>
        )
    }

    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);

    return (
        <section
            className='purchase-page'
            >
            <h1>
                Thank you for our purchase!
            </h1>
            <p style={{ marginBottom: '36px' }}>
                You will receive a confirmation letter through your email
            </p>
            <article className="purchased">
                <Flex
                    justifyContent={'space-between'}
                    >
                    <Flex
                        alignItems={'flex-start'}
                        >
                        <MdCalendarMonth size={'24'} color='#459D7AFF'/>
                        <p style={{ marginLeft: '12px' }}>Date</p>
                    </Flex>
                    <p>07/04/12</p>
                </Flex>
                <Flex
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    >
                    <Flex
                        alignItems={'flex-start'}
                        margin={'20px 0'}
                        >
                        <MdPerson2 size={'24'} color='#459D7AFF'/>
                        <p style={{ marginLeft: '12px' }}>Customer</p>
                    </Flex>
                    <p>Kgomotso Mkhawane</p>
                </Flex>
                <Flex
                    justifyContent={'space-between'}
                    >
                    <Flex
                        alignItems={'flex-start'}
                        >
                        <MdMoney size={'28'} color='#459D7AFF'/>
                        <p style={{ marginLeft: '12px' }}>
                            Payment Method</p>
                    </Flex>
                    <p><BanknotesIcon width={'24px'} /></p>
                </Flex>

                <hr style={{ margin: '20px 0' }}></hr>

                <Flex
                    justifyContent={'space-between'}
                    >
                    <Flex
                        alignItems={'flex-start'}
                        >
                        <LuNotebookText size={'24'} color='#459D7AFF'/>
                        <p style={{ marginLeft: '12px' }}>Order number</p>
                    </Flex>
                    <p>732-123-4567</p>
                </Flex>
                <Flex
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    >
                    <Flex
                        alignItems={'flex-start'}
                        margin={'25px 0'}
                        >
                        <MdCurrencyPound size={'24'} color='#459D7AFF'/>
                        <p style={{ marginLeft: '12px' }}>Total</p>
                    </Flex>
                    <p
                        style={{
                            fontSize: '24px',
                            fontWeight: '700',
                        }}
                        >
                        ${totalPrice}
                    </p>
                </Flex>
                <h6 className='order-line'>Order line</h6>
                <hr style={{ marginBottom: '20px' }}></hr>
                {cartItems.map((product) => (
                    <>
                    <ProductSummary
                        key={product['id']}
                        ProductName={product['name']}
                        size={'50 ML'}
                        NoItems={`${product['quantity']} items`}
                        img={oil}
                        price={product['price']}
                        />
                    <hr style={{ margin: '20px 0' }}></hr>
                    </>
                ))}
                <button
                    className='continue-shopping'
                    onClick={handleNavToShop}
                    >
                    Continue shopping
                </button>
            </article>
        </section>
    )
}

export default Purchase