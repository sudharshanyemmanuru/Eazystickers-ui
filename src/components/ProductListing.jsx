import ProductCard from "./ProductCard";

export default function ProductListing({ products }){
    return(
        <div className="product-listings-container">
            <div className="product-listings-grid">
                {products.length>0 ?
                products.map(product=><ProductCard key={product.productId} product={product}/>):
                <p>No Products to show</p>}
            </div>
        </div>
    )
}