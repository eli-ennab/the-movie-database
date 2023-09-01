import Image from 'react-bootstrap/Image'
import hero_image from '../images/samuel-regan-asante-wMkaMXTJjlQ-unsplash.jpg'

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
                    <a href="#users-recently-seen">
                        Recently Seen
                    </a>
                </div>
                <div className="image-container">
                    <Image src={hero_image} fluid />
                </div>
            </div>
        </>
    )
}

export default Hero
