import React from 'react'
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import { Carousel } from 'react-responsive-carousel'
const teste = 'images/platina-the-wolf-cave.png'

const CarouselComponent = () => {
  const settings = {
    lazyload: true,
    nav: false,
    mouseDrag: true
  }

  return (
    <Carousel
      autoPlay
      infiniteLoop
    >
        <div>
            <img src='images/platina-the-wolf-fight-light-7.png' />
            <p className="legend">Platina VS Light</p>
        </div>
        <div>
            <img src='images/platina-the-wolf-fight-light-8.png' />
            <p className="legend">Platina VS Light</p>
        </div>
        <div>
            <img src='images/platina-the-wolf-fight-light-7.png' />
            <p className="legend">Platina VS Light</p>
        </div>
    </Carousel>
  )
}

export default CarouselComponent
