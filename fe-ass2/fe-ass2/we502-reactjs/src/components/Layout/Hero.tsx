import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        id="hero"
        className="hero route bg-image"
        style={{ backgroundImage: "url(src/assets/img/hero.jpg)" }}
      >
        <div className="overlay-itro"></div>
        <div className="hero-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="hero-title mb-4">chào mừng bạn đến với thành phố của tôi 😘</h1>
              <p className="hero-subtitle">
                <span
                  className="typed"
                  data-typed-items="Designer, Developer, Freelancer, Photographer"
                ></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
