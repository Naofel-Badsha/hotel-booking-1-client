import SearchCard from "../../Components/SearchCard/SearchCard";
import Slider from "../../Components/Slider/Slider";
import About from "../HomePage/About/About";
import Gallery from "../HomePage/Gallery/Gallery";
import Welcome from "../HomePage/Welcome/Welcome";
import Price from "../HomePage/Price/Price";
import Services from "../HomePage/Services/Services";
import SpeacialOffer from "../HomePage/SpeacialOffer/SpeacialOffer";
import ElegantAccommodation from "../HomePage/ElegantAccommodation/ElegantAccommodation";
import Testimonial from "../HomePage/Testimonial/Testimonial";
import Events from "../HomePage/Events/Events";
import Questuin from "../HomePage/Question/Questuin";




const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <SearchCard></SearchCard>
            <About></About>
            <Gallery></Gallery>
            <Welcome></Welcome>
            <Services></Services>
            <SpeacialOffer></SpeacialOffer>
            <ElegantAccommodation></ElegantAccommodation>
            <Price></Price>
            <Testimonial></Testimonial>
            <Events></Events>
            <Questuin></Questuin>
        </div>
    );
};
export default Home;