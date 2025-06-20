import PageHeading from "./PageHeading";
import ProductListing from "./ProductListing";

export default function(){
    return(
        <div className="home-container">
            <PageHeading title={"Explore Eazy Stickers!"}>
                Welcome to EazyStickers!!. Buy Your Faviourite Stickers and Make your work Place more faviourite to you
            </PageHeading>
            <ProductListing/>
        </div>
    )
}