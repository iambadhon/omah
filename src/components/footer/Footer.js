import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="footer_flex">
            <div className="footer_left">
              <h2>Hubungi Kami</h2>
              <div className="footer_left_flex">
                <div className="footer_left_item">
                  <i className="fa-solid fa-phone"></i>
                  <p>Call</p>
                  <p>+6281232936733</p>
                  <div className="footer_btn cmn_btn">
                    <a href="#">Call Now</a>
                  </div>
                </div>
                <div className="footer_left_item">
                  <i className="fa-solid fa-envelope"></i>
                  <p>email</p>
                  <p>+omahindev@gmail.com</p>
                  <div className="footer_btn cmn_btn">
                    <a href="#">email Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_right">
              <h2>Penghargaan</h2>
              <div className="footer_right_flex">
                <div className="footer_right_item">
                  <img src="images/footer1.png" alt="Footer" />
                </div>
                <div className="footer_right_item">
                  <img src="images/footer2.png" alt="Footer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="social">
        <div className="container">
          <div className="social_flex">
            <div className="footer_logo">
              <a href="#">
                <img src="images/footer-logo.png" alt="Logo" />
              </a>
            </div>
            <div className="social_item">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-tumblr"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
