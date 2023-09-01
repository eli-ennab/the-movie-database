import hero_image from '../images/samuel-regan-asante-wMkaMXTJjlQ-unsplash.jpg'
// import hero_image_2 from '../images/samuel-regan-asante-wMkaMXTJjlQ-unsplash_2.jpg'
import Image from 'react-bootstrap/Image'

const Hero = () => {
    return (
        <>
            <div className="hero-image">
                <div className="hero-text">
                    <h2 className="mb-4">
                        <span className="hero-header text-border">
                            Your movie database. 
                        </span>
                    </h2>
                    <a href="#trending">
                        Trending
                    </a>
                    <a href="#top-rated">
                        Top Rated
                    </a>
                    <a href="#now-playing">
                        Now Playing
                    </a>
                    <a href="#users-recent-movies">
                    Recent movies you watched
                    </a>
                </div>
                <div className="image-container">
                    <Image src={hero_image} fluid />
                    {/* <Image src={hero_image_2} fluid /> */}
                </div>
            </div>
        </>
    )
}

export default Hero
