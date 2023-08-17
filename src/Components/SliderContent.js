import yashvi7 from '../Components/6.png';
import './SliderContent.css';
const SlideContent = () => {
    return (
      <div className="image-card-slider">
        <img
          className="card-image-slider"
          src={yashvi7}
          alt="Card Background-slider"
        />
        <div className="card-content-slider">
          <h3>Title</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          {/* Add more content here */}
        </div>
      </div>
    );
  };
  
  export default SlideContent;
  