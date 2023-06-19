import AboutUs from "./AboutUs/Aboutus";
import { Banner } from "./Banner/Banner";
import Categories from "./Categories/Categories";
import PlantSellBanner from "./PlantSellBanner/PlantSellBanner";


const Home = () => {
    return(
        <>
        <Banner />
        <PlantSellBanner />
        <AboutUs />
        <Categories />
        </>
    )
}

export default Home;