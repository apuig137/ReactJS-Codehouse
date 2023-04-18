import "./Carousel.css"

const Carousel = () => {
    return (
        <div className="carousel">
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://www.todofondos.net/wp-content/uploads/lenovo-pro-gaming-pc-resolucion-hd-4k-scaled.jpg" className="d-block w-100 carousel-img" alt="pc gamer"/>
                </div>
                <div className="carousel-item">
                    <img src="https://img1.goodfon.com/original/1920x1080/9/60/nvidia-geforce-gtx-980.jpg" className="d-block w-100 carousel-img" alt="placa de video"/>
                </div>
                <div className="carousel-item">
                    <img src="https://static.techspot.com/articles-info/2638/images/2023-03-03-image.jpg" className="d-block w-100 carousel-img" alt="monitor"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
        
    )
}

export default Carousel