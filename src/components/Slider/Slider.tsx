import React, { useState, useEffect, useRef } from 'react'
import './Slider.scss'

interface SliderProps {
  images: string[]
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const totalSlides = images.length

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide === totalSlides ? 0 : prevSlide + 1))
    }, 2000)

    return () => clearInterval(interval)
  }, [totalSlides])

  useEffect(() => {
    const slider = sliderRef.current
    if (slider) {
      slider.style.transition = currentSlide === totalSlides ? 'none' : 'transform 0.5s ease-in-out'
      slider.style.transform = `translateX(-${(currentSlide % totalSlides) * 100}%)`

      if (currentSlide === totalSlides) {
        setTimeout(() => {
          setCurrentSlide(0)
          slider.style.transition = 'none'
          slider.style.transform = 'translateX(0)'
        }, 2000)
      }
    }
  }, [currentSlide, totalSlides])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="slider">
      <div className="slider__slides" ref={sliderRef}>
        {images.map((image, index) => (
          <div key={index} className="slider__slide">
            <img src={image} alt={`Slide ${index}`} className="slider__image" />
          </div>
        ))}
        {/* Clone the first slide to create an infinite loop effect */}
        <div className="slider__slide">
          <img src={images[0]} alt={`Slide 0`} className="slider__image" />
        </div>
      </div>

      <div className="slider__dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`slider__dot ${
              index === currentSlide % totalSlides ? 'slider__dot--active' : ''
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Slider
