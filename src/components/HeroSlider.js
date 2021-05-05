import React from 'react'

const HeroSlider = ({image, title, description}) => {
    return (
        <div className="slide">
            <div className="info">
                 <h2>{title}</h2>
                 <h5>Hotstar Specials</h5>
                 <p>{description}</p>
                 <button className="btn">Watch Now</button>
            </div>
            <img src={image} alt=""/>
        </div>
    )
}

export default HeroSlider
