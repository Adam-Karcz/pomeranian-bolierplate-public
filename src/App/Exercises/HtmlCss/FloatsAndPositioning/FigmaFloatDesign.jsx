import './styles.css';
import React from 'react';
import pic from './Frame 2755.png';
const FigmaFloatDesign = () => {
  return (
    <>
      <h1>
        <a src="">&lt; BLOG </a>
        <a>&lt; ĆWICZENIE</a>
      </h1>
      <div className="floatcontainer">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="adnotation1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
        {/* To be displayed as hover action?  */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          mauris cursus mattis molestiea iaculis at. Dictum varius duis at
          consectetur lorem donec.
        </p>
        <p>
          <img src={pic}></img>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        {
          <div className="adnotation2">
            zapisz na później
          </div> /*To be displayed as button action? */
        }
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          mauris cursus mattis molestiea iaculis at. Dictum varius duis at
          consectetur lorem donec.
        </p>
        <button>zapisz na później</button>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          mauris cursus mattis molestie a iaculis at. Dictum varius duis at
          consectetur lorem donec. Sit amet dictum sit amet justo. Fringilla
          phasellus faucibus scelerisque eleifend donec. Elementum pulvinar
          etiam non quam lacus suspendisse faucibus interdum posuere. Arcu
          dictum varius duis at consectetur lorem. Massa ultricies mi quis
          hendrerit.
        </p>
        <p>
          Leo vel orci porta non pulvinar neque laoreet. In egestas erat
          imperdiet sed euismod nisi porta lorem. Ut porttitor leo a diam
          sollicitudin tempor id. Tortor at auctor urna nunc id. Gravida quis
          blandit turpis cursus in. Ornare quam viverra orci sagittis eu. Metus
          dictum at tempor commodo ullamcorper a. Vestibulum mattis ullamcorper
          velit sed ullamcorper morbi. Amet massa vitae tortor condimentum
          lacinia quis. Quis enim lobortis scelerisque fermentum dui faucibus in
          ornare. Auctor elit sed vulputate mi.
        </p>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default FigmaFloatDesign;