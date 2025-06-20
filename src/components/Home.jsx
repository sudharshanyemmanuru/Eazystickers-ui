import PageHeading from "./PageHeading";
import ProductListing from "./ProductListing";
import Products from '../data/products'
import products from "../data/products";
export default function Home(){
    return(
        <div className="home-container">
            <PageHeading title={"Explore Eazy Stickers!"}>
                Welcome to EazyStickers!!. Buy Your Faviourite Stickers and Make your work Place more faviourite to you
            </PageHeading>
            <ProductListing  products={products}/>
        </div>
    )
}