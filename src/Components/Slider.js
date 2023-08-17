import React from 'react'
import { Row, Col, Carousel } from 'antd'
import yashvi1 from '../Components/yashvi1.jpg';
import yashvi2 from '../Components/yashvi2.jpg';
import yashvi3 from '../Components/yashvi3.jpg';
import yashvi4 from '../Components/yashvi4.jpg';
// const contentStyle = {
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79'
// }

// from https://react-slick.neostack.com/docs/example/custom-arrows
const SampleNextArrow = props => {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'green' }}
            onClick={onClick}
        />
    )
}

const SamplePrevArrow = props => {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'green' }}
            onClick={onClick}
        />
    )
}

const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
}

const CarouselArrows = () => {
    return (
        <>
            <Row justify="center">
                <Col span={22}>
                    <Carousel arrows {...settings} autoplay>
                        <div>
                            <img src={yashvi1} style={{width:'1200px',height:'400px'}}></img>
                            {/* <h3 style={contentStyle}>1</h3> */}
                        </div>
                        <div>
                            <img src={yashvi2} style={{width:'1200px',height:'400px'}}></img>
                            {/* <h3 style={contentStyle}>2</h3> */}
                        </div>
                        <div>
                            <img src={yashvi3} style={{width:'1200px',height:'400px'}}></img>
                            {/* <h3 style={contentStyle}>3</h3> */}
                        </div>
                        <div>
                            <img src={yashvi4} style={{width:'1200px',height:'400px'}}></img>
                            {/* <h3 style={contentStyle}>4</h3> */}
                        </div>
                    </Carousel>
                </Col>
            </Row>
        </>
    )
}

export default CarouselArrows