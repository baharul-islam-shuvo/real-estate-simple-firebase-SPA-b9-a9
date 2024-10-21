import { Link } from "react-router-dom";
import newsImg from "../../../../resort-img/ren-ran-bBiuSdck8tU-unsplash.jpg"
const NewsLetter = () => {
    return (
        <div className="hero bg-base-100 shadow-xl rounded-xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={newsImg}
                    className="max-w-sm rounded-xl  shadow-2xl w-[250px]" />
                <div>
                    {/* <h1 className="text-4xl font-bold">NEWSLETTER</h1> */}
                    <p className="py-6">
                        <span className="font-bold text-lg">“Stay Connected with Nature’s Best”</span>
                        <br />
                        <br />
                        Subscribe to our newsletter and be the first to know about exclusive offers, seasonal getaways, eco-tourism tips, and sustainable living inspiration. <br />
                        Discover upcoming events, behind-the-scenes stories, and unique experiences that connect you with nature.
                        <br />Let us guide you on a journey to relaxation, adventure, and environmental harmony.
                        <br />
                        <br />
                        <span className="text-lg font-semibold">🌿 Join us in making travel meaningful – directly in your inbox.</span>
                    </p>
                    <Link to="/login"><button className="btn btn-neutral font-bold">Stay Connected</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;