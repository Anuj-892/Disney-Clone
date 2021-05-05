import React, { useState, useRef, useEffect } from 'react'
import HeroSlider from './HeroSlider'
import CarouselData from '../CarouselData'
import { useLocation } from 'react-router'

const Hero = () => {

    const btnRef = useRef();

    useEffect(() => {
       const interval = setInterval(() => {
           btnRef.current.click();
       }, 4000);
        return () => {
           clearInterval(interval)
        }
    })
    
    const sectionRef = useRef();
    const location = useLocation();

    useEffect(() => {
       if(location.pathname == '/movie-info') {
            sectionRef.current.className += ' no-show'
       } else {
        sectionRef.current.classList.remove( 'no-show');
       }
    }, [location])

    const [slide, setSlide] = useState(0)
    
    const previousClick = () => {
        if(slide == 0) {
               setSlide(4)
        } else {
            setSlide(slide => slide - 1);
        }
    }  

    const nextClick = () => {
        if(slide == 4) {
               setSlide(0)
        } else {
            setSlide(slide => slide + 1);
        }
    }  

    return (
        <section ref={sectionRef} className="hero">
           <div className="container">
               <HeroSlider title={CarouselData[slide].title} image={CarouselData[slide].image} description={CarouselData[slide].description}/>
               <button className="prev-btn" onClick={previousClick}>&lt;</button>
               <button className="next-btn" ref={btnRef} onClick={nextClick}>&gt;</button>
           </div>
        </section>
    )
}

export default Hero
