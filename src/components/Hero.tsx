import hero_image from '../images/samuel-regan-asante-wMkaMXTJjlQ-unsplash.jpg'
import Image from 'react-bootstrap/Image'

const Hero = () => {
    return (
        <>
            <div className="hero-image">
            <div className="hero-text">
                <h2>
                    Your movie database. 
                </h2>
                <a href="#top-rated">
                    Top Rated
                </a>
                <a href="#trending">
                    Trending
                </a>
                <a href="#now-playing">
                    Now Playing
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
