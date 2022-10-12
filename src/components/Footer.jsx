import React from "react";
// import slider1 from "../assets/slider1.jpg";
// import slider2 from "../assets/slider2.jpg";
// import slider3 from "../assets/slider3.jpg";
import insta from "../assets/insta.png";
//import logoBlanco from "../assets/logoBlanco.png";
import footer from "../css/footer.css";

const Footer = () => {
  return (
    <div className="foo">
      <div className="footer">
        <div className="container cont1">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div>
                <h3 className="text1">Sigueme en Instagram</h3>
                <img src={insta} alt="" className="instaL" />
              </div>
            </div>
            <div className=" col-md-6 col-lg-3">
              <div>
                <iframe
                  className="instaP"
                  src="https://www.instagram.com/p/Ci8qvXIuBkf/embed"
                  frameborder="0"
                ></iframe>
              </div>
            </div>
            <div className=" col-md-6 col-lg-3">
              <div>
                <iframe
                  className="instaP"
                  src="https://www.instagram.com/p/CeZuZ29OiRH/embed"
                  frameborder="0"
                ></iframe>
              </div>
            </div>
            <div className=" col-md-6 col-lg-3">
              <div>
                <iframe
                  className="instaP"
                  src="https://www.instagram.com/p/Ce-FF5-uGdx/embed"
                  frameborder="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="footer-about">
                <h3>About Us</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Quisque eu lectus a leo
                  dictum nec non quam. Tortor eu placerat rhoncus, lorem quam
                  iaculis felis, sed lacus neque id eros
                </p>
                <div className="footer-social">
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="footer-contact">
                <h3>Get In Touch</h3>
                <p>
                  <i class="fa fa-map-marker-alt"></i>123 Street, New York, USA
                </p>
                <p>
                  <i class="fa fa-phone-alt"></i>+012 345 67890
                </p>
                <p>
                  <i class="fa fa-envelope"></i>info@example.com
                </p>
                <p>
                  <i class="far fa-clock"></i>Mon - Fri, 9AM - 10PM
                </p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="footer-links">
                <h3>Useful Links</h3>
                <a href="">Lorem ipsum</a>
                <a href="">tempus posuere </a>
                <a href="">velit id accumsan</a>
                <a href="">ut porttitor</a>
                <a href="">Nam pretium</a>
                <a href="">accumsan</a>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="footer-project">
                <h3>Latest Projects</h3>
                <a href="">
                  <iframe
                    className="insta"
                    src="https://www.instagram.com/p/Ce-FF5-uGdx/embed"
                    frameborder="0"
                  ></iframe>
                </a>
                <a href="">
                  <iframe
                    className="insta"
                    src="https://www.instagram.com/p/Ci8qvXIuBkf/embed"
                    frameborder="0"
                  ></iframe>
                </a>
                <a href="">
                  <iframe
                    className="insta"
                    src="https://www.instagram.com/p/Ci8qvXIuBkf/embed"
                    frameborder="0"
                  ></iframe>
                </a>
                <a href="">
                  <iframe
                    className="insta"
                    src="https://www.instagram.com/p/Ci8qvXIuBkf/embed"
                    frameborder="0"
                  ></iframe>
                </a>
                <a href="">
                  <iframe
                    className="insta"
                    src="https://www.instagram.com/p/Ci8qvXIuBkf/embed"
                    frameborder="0"
                  ></iframe>
                </a>
                <a href="">
                  <iframe
                    className="insta"
                    src="https://www.instagram.com/p/Ci8qvXIuBkf/embed"
                    frameborder="0"
                  ></iframe>
                </a>
              </div>
            </div>
          </div>
                </div> */}

        <div class="container footer-newsletter">
          <p>
            Lorem ipsum dolor sit amet elit. Quisque eu lectus a leo dictum nec
            non quam. Tortor eu placerat rhoncus, lorem quam iaculis felis, sed
            lacus neque id eros
          </p>
        </div>

        <div className="copyright">
          <div className="container">
            <div className="row align-items-center">
              <div class="col-md-6">
                <div class="copy-text">
                  <p>
                    &copy; <a href="#">HOKEE - Fotografía de mascotas</a>. All
                    Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
