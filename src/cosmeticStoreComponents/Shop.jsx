import './css/Shop.css';
import { MdSearch, MdChevronLeft, MdChevronRight } from 'react-icons/md'
import filterIcon from './images/FilterIcon.svg';
import { Flex } from '@chakra-ui/react';
import ProductCard from './ProductCard';
import { useContext, useEffect } from 'react';
import { ProductContext } from '../App';
import { useNavigate } from 'react-router-dom';

function Shop() {

    const navToDetailProduct = useNavigate();
    const handleClickNav = (id) => {
        navToDetailProduct(`/Detail/${id}`);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const Products = useContext(ProductContext);

    return (
        <section className='shop'>
            <article className='shop-img'>
                <h1>Gift for your skin</h1>
                <p>
                    Aliquip fugiat ipsum nostrud ex et eu incididunt quis minim
                    dolore excepteur voluptate
                </p>
            </article>
            <article className='shopping'>
                <Flex
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    margin={'0 240px'}
                    marginTop={'64px'}
                    marginBottom={'56px'}
                    >
                    <div className='shop-nav-section'>
                        <button>All Products</button>
                        <button>Face</button>
                        <button>Body</button>
                    </div>
                    <Flex
                        alignItems={'center'}
                        >
                        <div
                            className="search-bar-shop"
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
                            className='sort-btn'
                            >
                            <Flex
                                alignItems={'center'}
                                >
                                <p>Sort by</p>
                                <img
                                    className='sort-icon'
                                    src={filterIcon}
                                    alt='sorting icon'
                                    />
                            </Flex>
                        </div>
                    </Flex>
                </Flex>
            </article>
            <article
                style={{ margin: '0 240px' }}
                >
                <div
                    className='products-section'
                    >
                    {Products.map((product) => (
                        <ProductCard
                            key={product['id']}
                            onClick={() => {handleClickNav(product['id'])}}
                            productName={product.name}
                            price={product.price}
                            status={product.status}
                            cartAdd={product}
                            />
                    ))}
                </div>
            </article>
            <aside>
                <div className='bottom-nav-section'>
                    <button><MdChevronLeft size={'24'}/></button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button><MdChevronRight size={'24'}/></button>
                </div>
            </aside>
        </section>
    )
}

export default Shop