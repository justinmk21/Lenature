import { useContext, useEffect, useState } from 'react';
import './css/PreviewProductSection.css';
import ProductCard from './ProductCard';
import { ProductContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { Skeleton, Text } from '@chakra-ui/react';


function PreviewProducts() {

    const Products = useContext(ProductContext);

    const [renderedProducts, setRenderedProducts] = useState();

    const navToDetailProduct = useNavigate();
    const handleNavToDetail = (id) => {
        navToDetailProduct(`/Detail/${id}`);
    }

    //useEffect(()=>console.log(Products.length))

    return (
        <section className="prev-product-section">
            <h1>Our Products</h1>
            <div className="tab-buttons">
                <button type="button" onClick={()=>{}}>
                    Best Seller
                </button>
                <button type="button" >
                    New Products
                </button>
            </div>
            <div
                className='products-section'
                >
                {Products.length === 0 ?
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
                    Products.map((product) => (
                        <ProductCard
                            key={product['id']}
                            onClick={() => {handleNavToDetail(product['id'])}}
                            productName={product.name}
                            price={product.price}
                            discountPrice={product.discounted_price}
                            status={product.status}
                            cartAdd={product}
                            />
                    ))
                }
            </div>
        </section>
    )
}

export default PreviewProducts