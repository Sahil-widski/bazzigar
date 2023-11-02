import React from 'react';
import Link from 'next/link';

const AboutUs6 = () => {
  return (
    <section id="about" className="about-ar section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="img">
              <div className="bg-img bg-fixed hero-bg" style={{ backgroundImage: "url(/img/arch/hero.jpg)" }}></div>
              <div className="exp valign text-center">
                <div className="full-width">
                  <h2 className="bg-img bg-fixed" style={{ backgroundImage: "url(/img/arch/hero.jpg)" }}>
                    007
                  </h2>
                  <p>Be Bond</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 valign">
            <div className="content">
              <h6 className="sub-title main-color ls10 text-u">About Us</h6>
              <h3>Best Games for You.</h3>
              <p>
              Welcome to Bazzigar Exchange, your premier destination for thrilling online casino entertainment. At Bazzigar Exchange, we believe in taking the excitement of gaming to new heights while ensuring a safe and responsible gaming environment.
              </p>
              <Link className="butn bord mt-30" href={`https://api.whatsapp.com/send?phone=918983583948&text=I want to create ID`}>
                <span>Create ID</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs6