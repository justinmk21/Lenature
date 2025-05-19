import './css/Shop.css';
import { MdSearch, MdChevronLeft, MdChevronRight } from 'react-icons/md'
import filterIcon from './images/FilterIcon.svg';
import { Flex, Portal } from '@chakra-ui/react';
import ProductCard from './ProductCard';
import { useCallback, useContext, useEffect, useState } from 'react';
import { ProductContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { Skeleton, Text, Menu } from '@chakra-ui/react';
import axios from 'axios';

function Shop() {

    const Products = useContext(ProductContext);

    const [search, setSearch] = useState();
    const [products, setProducts] = useState('');
    const navToDetailProduct = useNavigate();
    const handleClickNav = (id) => {
        navToDetailProduct(`/Detail/${id}`);
    }

    const fetchItems = async (pageNum) => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/products/?page=${pageNum}`);
            setProducts(response.data.results);
        } catch (error) {
            console.log('Error fetching data', error);
        }
    };

    useEffect((pageNum=1) => {
        axios.get(`http://127.0.0.1:8000/products/?page=${pageNum}`)
        .then(response => {
          setProducts(response.data.results);
          console.log('fetch page data',response.data.results);
        })
        .catch(error => {
          console.log("There was an error fetching the data", error);
        });
      }, []);

    const searchItems = async (query) => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/products/?search=${query}`);
            setSearch(response.data.results);
            setProducts(response.data.results);
        } catch (error) {
            console.log('Error fetching search results', error);
        }
    };

    function debounce(func, delay) {
        let timeout;
        return(...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        }
    }

    const debounceFetchResults = useCallback(debounce((value) => {
        searchItems()
    }))

    const handleSearch = (event) => {
        const query = event.target.value;
        searchItems(query);
    }

    useEffect(() => {
        console.log('search results: ', search);
    }, [search])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const Filter = () => {
        return (
            <Menu.Root>
                <Menu.Trigger asChild>
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
                </Menu.Trigger>
                <Portal>
                    <Menu.Positioner>
                        <Menu.Content>
                            <Menu.Item value='new-txt-a'>
                                Ascending Order <Menu.ItemCommand>E</Menu.ItemCommand>
                            </Menu.Item>
                            <Menu.Item value='new-file-a'>
                                New File... <Menu.ItemCommand>N</Menu.ItemCommand>
                            </Menu.Item>
                            <Menu.Item value='new-win-a'>
                                Descending Order <Menu.ItemCommand>W</Menu.ItemCommand>
                            </Menu.Item>
                        </Menu.Content>
                    </Menu.Positioner>
                </Portal>
            </Menu.Root>
        )
    }

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
                                onChange={handleSearch}
                                />
                        </div>
                        <div
                            className='sort-btn'
                            >
                            <Filter/>
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
                    {products.length === 0 ?
                        <>
                            <Skeleton height={'464px'} width={'267px'}>
                                <Text>pulse</Text>
                            </Skeleton>
                            <Skeleton height={'464px'} width={'267px'}>
                                <Text>pulse</Text>
                            </Skeleton>
                            <Skeleton height={'464px'} width={'267px'}>
                                <Text>pulse</Text>
                            </Skeleton>
                            <Skeleton height={'464px'} width={'267px'}>
                                <Text>pulse</Text>
                            </Skeleton>
                        </>
                        :
                        products.map((product) => (
                            <ProductCard
                                key={product['id']}
                                onClick={() => {handleClickNav(product['id'])}}
                                productName={product.name}
                                price={product.price}
                                discountPrice={product['discounted_price']}
                                status={product.status}
                                cartAdd={product}
                                />
                            ))
                    }
                </div>
            </article>
            <aside>
                <div className='bottom-nav-section'>
                    <button><MdChevronLeft size={'24'}/></button>
                    <button onClick={()=>fetchItems(1)}>1</button>
                    <button onClick={()=>fetchItems(2)}>2</button>
                    <button onClick={()=>fetchItems(3)}>3</button>
                    <button>4</button>
                    <button><MdChevronRight size={'24'}/></button>
                </div>
            </aside>
        </section>
    )
}

export default Shop