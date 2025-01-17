import ProductCard from "./ProductCard"
import './css/RelatedProducts.css';
function RelatedProducts() {

    return (
        <section className="related-products-section">
            <h1>Related Products</h1>
            <article className="related-products">
                <ProductCard items={'Best Seller'}/>
                <ProductCard items={'New'}/>
                <ProductCard items={'Best Seller'}/>
                <ProductCard items={'New'}/>
            </article>
        </section>
    )
}

export default RelatedProducts