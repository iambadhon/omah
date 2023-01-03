import React from "react";
import "./favorit.css";
const Favorit = () => {
  return (
    <section id="favorit">
      <div className="container">
        <div className="favorit_title">
          <h4>Pilihan konsumen</h4>
          <h2>Residen Favorit</h2>
        </div>
        <div className="favorit_flex">
          <div className="favorit_img">
            <img src="images/favorit1.png" alt="Favorit" />
            <img className="posin" src="images/favorit2.png" alt="Favorit" />
          </div>
          <div className="favorit_text">
            <h2>Bangunan yang dirancang oleh Aristektur Handal</h2>
            <p>
              Tanpa diragukan, properti yang disediakan dalam webiste kami
              merupakan hasil kerjasama secara profesional dengan para
              Arsitektur ternama dan Developer yang terpercaya.
            </p>
            <div className="favorit_btm cmn_btn">
              <a href="#">Hubungi Kami</a>
              <a href="#">Explore lebih banyak</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favorit;
