import React from 'react';
import { Card } from 'antd';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css'; // Custom CSS for styling
import yashvi1 from './Components/1.png';
import yashvi2 from './Components/2.png';
import yashvi3 from './Components/3.png';
import yashvi4 from './Components/4.png';
import CardComponent from './Components/CardComponent';
import SlideContent from './Components/SliderContent';
import DescriptionCard from './Components/DescriptionCard';
import Header from './Components/Header';
import WorkCard from './Components/WorkCard';

const ImageSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    prevArrow: <SamplePrevArrow />, // Custom previous arrow component
    nextArrow: <SampleNextArrow />, // Custom next arrow component
  };

  const imageUrls = [
    yashvi1,
    yashvi2,
    yashvi3,
    yashvi4
  ];

  return (
    <>
      <Header />
      <Card style={{ backgroundColor: '#052157' }}>
        <Slider {...sliderSettings}>
          {imageUrls.map((imageUrl, index) => (
            <div key={index}>
              <img className="slider-image" src={imageUrl} alt={`Image ${index + 1}`} />
              {/* <SlideContent/> */}
            </div>
          ))}
        </Slider>
        <CardComponent />
        <DescriptionCard />
        <SlideContent />
        <WorkCard />
        <iframe width="560" height="315" src="https://www.youtube.com/embed/HcOc7P5BMi4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/xVpaF8527Qg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </Card>


    </>
  );
};

// Custom previous arrow component
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    />
  );
};

// Custom next arrow component
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: 'block', background: 'blue' }}
      onClick={onClick}
    />
  );
};

export default ImageSlider;
