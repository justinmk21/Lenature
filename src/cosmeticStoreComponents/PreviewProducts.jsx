import './css/PreviewProductSection.css';
import ProductCard from './ProductCard';
function PreviewProducts() {

    return (
        <section className="prev-product-section">
            <h1>Our Products</h1>
            <div className="tab-buttons">
                <button type="button" >Best Seller</button>
                <button type="button" >New Products</button>
            </div>
            <div
                className='products-section'
                >
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </section>
    )
}

export default PreviewProducts