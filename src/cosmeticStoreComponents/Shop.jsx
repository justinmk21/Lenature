import './css/Shop.css';
import { MdSearch, MdChevronLeft, MdChevronRight } from 'react-icons/md'
import filterIcon from './images/FilterIcon.svg';
import { Flex } from '@chakra-ui/react';
import ProductCard from './ProductCard';
import { useEffect } from 'react';

function Shop() {

    useEffect(() => {
        window.scrollTo(0, 0);
    })

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
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
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