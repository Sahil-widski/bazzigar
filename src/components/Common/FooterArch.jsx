import React from 'react';

function FooterArch() {
  return (
    <footer className="sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Officeal Address</h6>
                    <p>504 White St . Dawsonville, GA 30534 , New York</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>info@bazzigar.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+91 8983583948</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Recent News</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <img src="/img/blog/1.jpg" alt="" />
                  </div>
                  <div className="sm-post">
                    <p>
                      The Start-Up Ultimate Guide to Make Your WordPress Journal.
                    </p>
                    <span className="date main-color">14 sep 2023</span>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <img src="/img/blog/2.jpg" alt="" />
                  </div>
                  <div className="sm-post">
                    <p>
                      The Start-Up Ultimate Guide to Make Your WordPress Journal.
                    </p>
                    <span className="date main-color">14 sep 2023</span>
                  </div>
                </li>
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Type Your Email" />
                    <span className="subs pe-7s-paper-plane back-color"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src="/img/logo-dark.jpg" alt="" />
              </div>
              {/* <div className="social">
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a>
              </div> */}
              <div className="copy-right">
                <p>
                  © 2023, Bazzigar Exchange. Made with passion by
                  <a href="#0" className="main-color"> Casino Gamers </a>
                  .
                </p>
                <p className="main-color" style={{width: "200%"}}>
                Participants must be 18 years or older to engage in real money activities on Bazzigar Exchange. The mentioned amount is indicative and encompasses promotional tournaments and bonuses. The actual earnings may vary and are contingent on the total number of cash tournaments conducted on the platform, coupled with the bonuses claimed by players in a given calendar month. Individual winnings are determined by the player's skill level and the number of cash tournaments participated in during a calendar month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterArch