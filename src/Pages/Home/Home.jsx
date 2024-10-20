import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Resorts from "../../Components/Resorts/Resorts";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Resorts></Resorts>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;