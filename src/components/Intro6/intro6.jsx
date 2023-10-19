import React from "react";

const Intro6 = () => {
  return (
    <header   className="backgroundBlack mobile-app valign">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="caption">
              <h1 className="mb-20">
              Bazzigar Exchange: Your Winning Ticket
              </h1>
              <p>
              - Your Winning Wonderland: Where Bazzigars Meets Exchange
              </p>
              <div className="butons mt-40">
                <a href="https://api.whatsapp.com/send?phone=918976471841&text=I want to create ID" className="butn-gr rounded buton">
                  <span>Create Id</span>
                 
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 offset-lg-1">
            <div className="img">
              {/* <imgsrc="/img/mobile-app/header-img.jpeg" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Intro6;
