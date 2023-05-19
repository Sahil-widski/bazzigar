import React from "react";

const Services7 = ({ lightTheme }) => {
  return (
    <section className="serv-block section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="serv-img md-mb50">
              <img src={"/img/mobile-app/app-img/dice.jpeg"} alt="" />
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="content">
              <h6 className="stit mb-30">
                <span className="left"></span> Live Games
              </h6>
              <h2 className="mb-30">
                We have all live games with us (Teen Patti, Rummy, Snooker,
                Sports)
              </h2>
              <p>
                having a variety of live games such as Teen Patti, Rummy,
                Snooker, and Sports can be a great way to attract and retain
                poker players. Each of these games offers a unique experience
                and appeals to different types of players. Teen Patti, also
                known as Indian Poker, is a popular card game in India that is
                similar to 3-card poker. It is a fast-paced and exciting game
                that can be a great way to attract players who are looking for a
                new and exciting way to play poker.
              </p>

              <div className="butons mt-40">
                <a href="#0" className="butn-gr rounded buton">
                  <span>Create Id</span>
                </a>
              </div>

              <div className="list-feat mt-40">
                <ul>
                  <li className="mb-20">
                    <i className="icon">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                      </svg>
                    </i>{" "}
                    Instant Id
                  </li>
                  <li className="mb-20">
                    <i className="icon">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                      </svg>
                    </i>{" "}
                    100+ Games
                  </li>
                  <li>
                    <i className="icon">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                      </svg>
                    </i>{" "}
                    Fast Withdraw
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-80">
          <div className="col-lg-6 valign">
            <div className="content md-mb50">
              <h6 className="stit mb-30">
                <span className="left"></span> Sports Betting
              </h6>
              <h2 className="mb-30">
                Cricket, Football, Basketball and Lot's more
              </h2>
              <p>
              Welcome to Bazzigar Exchange, where sports fans can turn their passion for the game into profit. We offer a wide range of sports betting options for our customers, from football and basketball to tennis and baseball. Our platform is user-friendly, secure and fast. We have a team of experts who are always ready to assist you with any questions you may have. Whether you're a seasoned bettor or new to the game, we have something for everyone. Join Bazzigar Exchange today and experience the thrill of sports betting like never before!
              </p>

              <div className="butons mt-40">
                <a href="https://api.whatsapp.com/send?phone=918976471841&text=I want to create ID" className="butn-bord-red rounded buton">
                  <span>Create Id</span>
                
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="serv-img">
              <img
                src={"/img/mobile-app/app-img/satta.jpeg"}
                style={{ height: 500 }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="circle-blur"></div>
      <div className="circle-blur two"></div>
    </section>
  );
};

export default Services7;
