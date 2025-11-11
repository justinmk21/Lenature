import { useContext, useEffect, useState } from 'react';
import './css/PreviewProductSection.css';
import ProductCard from './ProductCard';
import { ProductContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { Skeleton, Text } from '@chakra-ui/react';
import axios from 'axios';


function PreviewProducts() {
    const  [products, setProducts] = useState('');

    const Products = useContext(ProductContext);

    const [renderedProducts, setRenderedProducts] = useState();

    const navToDetailProduct = useNavigate();
    const handleNavToDetail = (id) => {
        navToDetailProduct(`/Detail/${id}`);
    }

    //useEffect(()=>console.log(Products.length))

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/products/')
        .then(response => {
          setProducts(response.data.results);
          console.log(response.data.results);
        })
        .catch(error => {
          console.log("There was an error fetching the data", error);
        });
      }, []);

      useEffect(() => {
        console.log('Products: ', products);
      }, [products]);

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
                            onClick={() => {handleNavToDetail(product['id'])}}
                            productName={product.name}
                            price={product.price}
                            discountPrice={product.discounted_price}
                            status={product.status}
                            cartAdd={product}
                            img={product.image}
                            />
                    ))
                }
            </div>
        </section>
    )
}

export default PreviewProducts