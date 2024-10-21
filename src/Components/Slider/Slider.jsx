const Slider = () => {
    return (
        <div className="carousel w-full rounded-lg mt-10">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co.com/R7jj83k/unsplash.jpg"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[591px]">
                <img
                    src="https://i.ibb.co.com/GVrM21d/pexels-quang-nguyen-vinh-222549-12389419.jpg"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[591px]">
                <img
                    src="https://i.ibb.co.com/P6N6hvc/pexels-suzukii-xingfu-67659-872831.jpg"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[591px]">
                <img
                    src="https://i.ibb.co.com/mtF0HHj/Untitled-design-1.jpg"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;