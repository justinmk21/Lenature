import { useContext } from "react";
import ProductCard from "./ProductCard"
import './css/RelatedProducts.css';
import { ProductContext } from "../App";
import { useNavigate } from "react-router-dom";

function RelatedProducts() {

    const Products = useContext(ProductContext);

    const navToDetailProduct = useNavigate();
    const handleNavToDetail = (id) => {
        navToDetailProduct(`/Detail/${id}`);
    }

    return (
        <section className="related-products-section">
            <h1>Related Products</h1>
            <article className="related-products">
                {Products.map((product) => (
                            <ProductCard
                                key={product.id}
                                productName={product.name}
                                onClick={() => handleNavToDetail(product.id)}
                                price={product.price}
                                discountPrice={product.discounted_price}
                                status={product.status}
                                cartAdd={product}
                                />
                        ))}
            </article>
        </section>
    )
}

export default RelatedProducts