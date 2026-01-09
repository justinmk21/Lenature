import { useContext, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "./css/RelatedProducts.css";
import { ProductContext } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Flex } from "@chakra-ui/react";

function RelatedProducts() {
  const Products = useContext(ProductContext);
  const [products, setProducts] = useState([]);

  const navToDetailProduct = useNavigate();
  const handleNavToDetail = (id) => {
    navToDetailProduct(`/Detail/${id}`);
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/products/")
      .then((response) => {
        setProducts(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log("There was an error fetching the data", error);
      });
  }, []);

  useEffect(() => {
    console.log("Products: ", products);
  }, [products]);

  return (
    <section className="related-products-section">
      <Flex width={"100%"} maxWidth={"1440px"} flexDirection={'column'}>
        <h1>Related Products</h1>
        <article className="related-products">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              productName={product.name}
              onClick={() => handleNavToDetail(product.id)}
              price={product.price}
              discountPrice={product.discounted_price}
              status={product.status}
              cartAdd={product}
              img={product.image}
            />
          ))}
        </article>
      </Flex>
    </section>
  );
}

export default RelatedProducts;
