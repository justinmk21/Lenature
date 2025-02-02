import { useContext } from 'react';
import './css/PreviewProductSection.css';
import ProductCard from './ProductCard';
import { ProductContext } from '../App';
import { useNavigate } from 'react-router-dom';

function PreviewProducts() {

    const Products = useContext(ProductContext);
    const navToDetailProduct = useNavigate();
    const handleNavToDetail = (id) => {
        navToDetailProduct(`/Detail/${id}`);
    }

    return (
        <section className="prev-product-section">
            <h1>Our Products</h1>
            <div className="tab-buttons">
                <button type="button" >
                    Best Seller
                </button>
                <button type="button" >
                    New Products
                </button>
            </div>
            <div
                className='products-section'
                >
                {Products.map((product) => (
                        <ProductCard
                            key={product.id}
                            onClick={() => handleNavToDetail(product.id)}
                            productName={product.name}
                            price={product.price}
                            status={product.status}
                            cartAdd={product}
                            />
                    ))}
            </div>
        </section>
    )
}

export default PreviewProducts