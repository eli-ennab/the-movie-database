import hero_image from '../images/samuel-regan-asante-wMkaMXTJjlQ-unsplash.jpg'
import Image from 'react-bootstrap/Image'

const Hero = () => {
    return (
        <>
            <div className="hero-image">
            <h2 className="hero-text">
                Your movie database. 
                    <a href="#top-rated">
                        Top Rated
                    </a>
                    <a href="#trending">
                        Trending
                    </a>
                    <a href="#now-playing">
                        Now Playing
                    </a>
            </h2>
            <div className="image-container">
                <Image src={hero_image} fluid />
            </div>
        </div>
        </>
    )
}

export default Hero
