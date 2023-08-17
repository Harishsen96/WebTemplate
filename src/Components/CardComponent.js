import React from 'react';
import {Row} from 'antd'
import '../App.css';
import yashvi2 from '../Components/yashvi2.jpg';
import yashvi3 from '../Components/yashvi3.jpg';
import yashvi4 from '../Components/yashvi4.jpg';
import yashvi5 from '../Components/yashvi5.jpg';

const CardComponent = () => {
  return (
    <Row className='main'>
    <div className="image-card">
      <div className="image-overlay">
        <h2>University Life</h2>
        <p>Overall in here</p>
      </div>
      <img src={yashvi2} alt="Your Image" />
    </div>
     <div className="image-card">
     <div className="image-overlay">
       <h2>Graduation</h2>
       <p>Getting Diploma</p>
     </div>
     <img src={yashvi3} alt="Your Image" />
   </div>
    <div className="image-card">
    <div className="image-overlay">
      <h2>Athletics</h2>
      <p>Sport Clubs</p>
    </div>
    <img src={yashvi4} alt="Your Image" />
  </div>
   <div className="image-card">
   <div className="image-overlay">
     <h2>Social</h2>
     <p>Overall in here</p>
   </div>
   <img src={yashvi5} alt="Your Image" />
 </div>
 </Row>
  );
};

export default CardComponent;
