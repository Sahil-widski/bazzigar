import React from "react";

const Footer2 = () => {
  return (
    <footer className="app-footer" data-overlay-dark="0">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="item-clumn our md-mb50">
              <a href="#0" className="logo-brand mb-50">
                <imgsrc="/img/logo-gr.png" alt="" />
              </a>
              <p>
                  Paise Se Hi Paisa Banega
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item-clumn links">
              <h5 className="title mb-30">Contact</h5>
              <div className="info">
                <span>Mobile</span>
                <h6>
                  <a href="#0">+91 8976471841</a>
                </h6>
              </div>
        
            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <p>© 2022 . All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="circle-blur"></div>
      <div className="circle-blur two"></div>
    </footer>
  );
};

export default Footer2;
