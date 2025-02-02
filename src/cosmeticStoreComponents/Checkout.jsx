/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Flex } from '@chakra-ui/react';
import './css/Checkout.css';
import { MdDeliveryDining, MdShoppingCartCheckout,
    MdDelete, MdEdit, MdCheck, MdPerson2, MdError, MdWarning }
from 'react-icons/md';
import { BanknotesIcon } from '@heroicons/react/24/outline';
import { CreditCardIcon } from '@heroicons/react/24/outline';
import { MdNotes } from 'react-icons/md';
import oil from './images/CBDOIL.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { increaseItemQuantity, removeItemFromCart } from './CartSlice';
import { useState } from 'react';


function Checkout() {

    const dispatch = useDispatch();

    const { cartItems, totalPrice, totalItems } = useSelector(state => state.cart);

    const handleRemoveItem = product => {
        dispatch(removeItemFromCart(product));
    }

    const handleIncreaseItem = product => {
        dispatch(increaseItemQuantity(product));
    }

    const [discount, setDiscount] = useState(null);
    const [voucher, setVoucher] = useState(null);
    const [operator, setOperator] = useState('UPS');
    const [delivery, setDelivery] = useState('instant');
    const deliveryFee = delivery === 'instant' ? 22 : 12;

    const ProductCard = ({ order }) => (
        <Flex>
            <img
                className='product-prev-img'
                src={oil}
                alt='Product Image'
                />
            <div>
                <p className='product-name'>{order}</p>
                <select>
                    <option>50.00 Ml</option>
                    <option>75.00 Ml</option>
                    <option>100.00 Ml</option>
                </select>
            </div>
        </Flex>
    )

    function OrderTable({ Orders, handleRemoveItem }) {
        return (
            <table style={{  marginTop: '24px', width: '100%' }}>
                <thead>
                    <tr className='checkout-table-headers'>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody className='checkout-table-data'>
                    {Orders.map((product) => (
                        <tr key={product['id']} className='table-data-items'>
                            <td><ProductCard order={product.name}/></td>
                            <td>${product.price}</td>
                            <td>{product.quantity}</td>
                            <td>${(parseFloat(product.quantity) * parseFloat(product.price)).toFixed(2)}</td>
                            <td>
                                <MdDelete
                                    className='delete-icon'
                                    size={'24'}
                                    onClick={() => handleRemoveItem(product['id'])}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    function DeliveryContainer({ type, isSelected, onClick }) {

        return (
            <article
                className='delivery-options'
                style={{
                    backgroundColor: isSelected ? '#F4FAF8FF': '#FFFFFF',
                    borderColor: isSelected ? '#459D7AFF' : '#BCC1CAFF',
                }}
                onClick={onClick}
                >
                <Flex>
                    <div
                        style={{
                            borderRadius: '50%',
                            border: '2px solid',
                            borderColor: isSelected ? '#459D7AFF':'#9095A0FF',
                            padding: '3px',
                            marginRight: '8px',
                            height:'50%'

                        }}
                        >
                        <MdCheck color={ isSelected ? '#459D7AFF' : '#9095A0FF'}/>
                    </div>
                    <div>
                        <p className='delivery-price'
                            style={{
                                color: isSelected ? '#459D7AFF' : '#171A1FFF',
                            }}
                            >
                            { type === 'instant' ? '$22' : '$12' }
                        </p>
                        <p>
                            { type === 'instant' ? 'Instant delivery'
                            : 'Standard Delivery' }
                        </p>
                        <p>Est arrival:
                            { type === 'instant' ?
                            'Today' : `${ new Date().getDay() }/${ new Date().getMonth() }`
                            }
                        </p>
                    </div>
                </Flex>
            </article>
        )
    }

    const purchase = useNavigate(null);

    const navToPurchase = () => {
        purchase('/Purchase');
    }

    return (
        <section className="Checkout">
            <h1>My Shopping  ({cartItems.length} items)</h1>
            <Flex justifyContent={'space-between'}>
                <div>
                    <article
                        style={{ marginBottom: '16px' }}
                        className='checkout-container'
                        >
                        <Flex>
                            <MdShoppingCartCheckout size={'30'}/>
                            <p className='order-header'>Order Summary</p>
                        </Flex>
                        <div>
                            {cartItems.length > 0 ?
                                <OrderTable
                                    Orders={cartItems}
                                    handleRemoveItem={handleRemoveItem}
                                    />
                                : ''
                            }
                        </div>
                    </article>
                    <article
                        className='delivery-checkout'
                        >
                        <Flex
                            className='delivery-header'
                            >
                            <MdDeliveryDining size={'30px'}/>
                            <p style={{ marginLeft: '8px' }}>Delivery Options</p>
                        </Flex>
                        <div
                            style={{ margin: '20px 0' }}
                            >
                            <p className='delivery-operator'>Operator</p>
                            <Flex
                                width={'263px'}
                                justifyContent={'space-between'}
                                >
                                <Flex>
                                    <input
                                        type='radio'
                                        value={'UPS'}
                                        checked={operator === 'UPS'}
                                        onChange={(e) => setOperator(e.target.value)}
                                        required
                                        />
                                    <p style={{ marginLeft: '8px',fontWeight: '450' }}>UPS</p>
                                </Flex>
                                <Flex>
                                    <input
                                        type='radio'
                                        value={'FEDEX'}
                                        checked={operator === 'FEDEX'}
                                        onChange={(e) => setOperator(e.target.value)}
                                        required
                                        />
                                    <p style={{ marginLeft: '8px',fontWeight: '450' }}>FEDEX</p>
                                </Flex>
                                <Flex>
                                    <input
                                        type='radio'
                                        value={'DHL'}
                                        checked={operator === 'DHL'}
                                        onChange={(e) => setOperator(e.target.value)}
                                        required
                                        />
                                    <p style={{ marginLeft: '8px',fontWeight: '450' }}>DHL</p>
                                </Flex>
                            </Flex>
                            <Flex
                                justifyContent={'space-between'}
                                >
                                <DeliveryContainer
                                    type='standard'
                                    isSelected={delivery === 'standard'}
                                    onClick={() => setDelivery('standard')}
                                    />
                                <DeliveryContainer
                                    type='instant'
                                    isSelected={delivery === 'instant'}
                                    onClick={() => setDelivery('instant')}
                                    />
                            </Flex>
                        </div>
                    </article>
                    <article
                        className='customer-info'
                        >
                        <Flex
                            className='delivery-header'
                            >
                            <MdPerson2 size={'30px'}/>
                            <p style={{ marginLeft: '8px' }}>Customer Information</p>
                        </Flex>
                        <Flex
                            justifyContent={'space-between'}
                            >
                            <Flex
                                className='full-name-input'
                                flexDirection={'column'}
                                margin={'20px 0'}
                                >
                                <label>Full Name</label>
                                <input
                                    type='text'
                                    required
                                    />
                            </Flex>
                            <Flex
                                className='phone-input'
                                flexDirection={'column'}
                                margin={'20px 0'}
                                >
                                <label htmlFor='phoneNumber' >Phone Number</label>
                                <input
                                    id='phoneNumber'
                                    type='number'
                                    required
                                    />
                            </Flex>
                        </Flex>
                        <Flex
                            className='address-input'
                            flexDirection={'column'}
                            >
                            <label htmlFor='address'>Address</label>
                            <input
                                id='address'
                                type='text'
                                required
                                />
                        </Flex>
                        <Flex
                            className='save-checkbox'
                            >
                            <input
                                type='checkbox'
                                />
                            <p>Save as default</p>
                        </Flex>
                        <div
                            className='delivery-note'
                            >
                            <Flex
                                justifyContent={'center'}
                                alignItems={'center'}
                                >
                                <div className='warning-icon'>
                                    <MdWarning size={'16'}/>
                                </div>
                                <Flex
                                    flexDirection={'column'}
                                    >
                                    <p>Delivery note</p>
                                    <p>
                                        Eiusmod et nisi non sunt dolor proident
                                        consequat irure ut exercitation
                                        consectetur fugiat
                                    </p>
                                </Flex>
                            </Flex>
                        </div>
                    </article>
                </div>
                <article className='card-payment'>
                    <p className='card-payment-header'>Payment Method</p>
                    <p className='change-card-payment'>Change payment method</p>
                    <div
                        className='bank-card'
                        >
                        <Flex alignItems={'center'}>
                            <BanknotesIcon width={'34px'}/>
                        <p style={{ marginLeft: '8px' }}>Cash</p>
                        </Flex>
                        <p>***4489</p>
                    </div>
                    <p className='voucher-redeem'>Voucher</p>
                    <Flex
                        className='voucher-input'
                        alignItems={'center'}
                        >
                        <input
                            type='number'
                            placeholder='Enter an amount'
                            value={voucher}
                            onChange={(event) => setVoucher(event.target.value)}
                            required
                            />
                        <button
                            onClick={() => setDiscount(voucher)}
                            >
                            Apply
                        </button>
                    </Flex>
                    {discount == null ? '' : <span className='span-off'>${voucher} off</span>}
                    <Flex
                        className='delivery-header'
                        margin={'18px 0'}
                        >
                        <MdNotes size={'30px'}/>
                        <p style={{ marginLeft: '8px' }}>Summary</p>
                    </Flex>
                    <Flex
                        justifyContent={'space-between'}
                        >
                        <p
                            style={{
                                fontSize: '14px',
                                lineHeight: '22px',
                                fontWeight: 400,
                                color: '#171A1FFF',
                            }}
                            >Subtotal</p>
                        <p
                            style={{
                                fontSize: '14px',
                                lineHeight: '22px',
                                fontWeight: 700,
                                color: '#171A1FFF',
                            }}
                            >${totalPrice}</p>
                    </Flex>
                    <Flex
                        justifyContent={'space-between'}
                        margin={'6px 0'}
                        >
                        <p
                            style={{
                                fontSize: '14px',
                                lineHeight: '22px',
                                fontWeight: 400,
                                color: '#171A1FFF',
                            }}
                            >
                            Discount
                        </p>
                        <p
                            style={{
                                fontSize: '14px',
                                lineHeight: '22px',
                                fontWeight: 700,
                                color: '#171A1FFF',
                            }}
                            >{discount == null ? '$0' : `-$${discount}`}</p>
                    </Flex>
                    <Flex
                        justifyContent={'space-between'}
                        >
                        <p
                            style={{
                                fontSize: '14px',
                                lineHeight: '22px',
                                fontWeight: 400,
                                color: '#171A1FFF',
                            }}
                            >Delivery fee</p>
                        <p
                            style={{
                                fontSize: '14px',
                                lineHeight: '22px',
                                fontWeight: 700,
                                color: '#171A1FFF',
                            }}
                            >${ delivery === 'instant' ? 22 : 12 }</p>
                    </Flex>
                    <hr style={{ margin: '12px 0' }}></hr>
                    <Flex
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        marginBottom={'20px'}
                        >
                        <p
                            style={{
                                fontSize: '14px',
                                lineHeight: '22px',
                                fontWeight: 400,
                                color: '#171A1FFF',
                            }}
                            >Total</p>
                        <p
                        style={{
                            fontSize: '22px',
                            fontWight: 700,
                            color: '#FFA91EFF',
                        }}>
                            ${ totalPrice == 0 ? '0' : totalPrice + deliveryFee - discount }
                        </p>
                    </Flex>
                    <button
                        className='payment-btn'
                        onClick={navToPurchase}
                        >
                        Proceed to payment
                    </button>
                </article>
            </Flex>
        </section>
    )
}

export default Checkout;