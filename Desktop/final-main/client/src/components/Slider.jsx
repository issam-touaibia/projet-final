import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { renderMatches } from "react-router-dom";
import image5 from "../video/image5.jpeg";
import im33 from "../video/im33.png";
import image6 from "../video/image6.jpeg";
import image2 from "../video/image2.jpeg";
import im05 from "../video/im05.jpeg";
import im28 from "../video/im28.png";
import image3 from "../video/image3.jpeg";
import pic from '../video/pic.jpg';
import image004 from "../video/image004.png";
import photo from "../video/photo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import pic1 from "../video/pic1.jpg"

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className=""
          width={1000}
           height={800}
          src={im28}
          alt="First slide"
          style={{ marginTop: "20px",
            marginLeft: "15%"
        
        }}
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img
          className="d-block"
          style={{
            
            marginTop: "10px",
            width: "1000px",
            height: "800px",
            marginLeft:"17%"
            
            
            
           
          }}
          src={im33}
         
         
        alt=""
          
        

        /> 

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block"
         height="800px"
         width={1000}
         style={{marginTop: "20px", 
          marginLeft: "15%"}}
        
          
        
          src={image004} alt="Third slide" />
        
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
          
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item><img className="" src={pic} alt=""width={1000} height='800' style={{marginTop: "20px",
         marginLeft:"15%"}} /></Carousel.Item>
      <Carousel.Item> <img src={pic1} alt="" width={1000} height='800'style={{marginTop: "20px",
         marginLeft:"15%"}}/>    </Carousel.Item>
    </Carousel>
  );
}
export default Slider;
