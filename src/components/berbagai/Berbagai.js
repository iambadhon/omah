import React from "react";
import "./berbagai.css";

const Berbagai = () => {
  return (
    <section id="berbagai">
      <div className="container">
        <div className="berbagai_title">
          <h4>Pilihan Auditor</h4>
          <h2>Residen Berbagai Kota</h2>
          <div className="berbagai_arrow">
            <i className="fa-solid fa-angle-left"></i>
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>
        <div className="berbagai_flex">
          <div className="berbagai_item">
            <img src="images/berbagai1.png" alt="Berbagai" />
            <h3>Magnolia Surabaya</h3>
            <p>
              Jl. Gatot Subroto No.KM.6,8, RT.001/RW.008, Jatake, Kec.
              Jatiuwung, Kota Tangerang, Banten 15136
            </p>
          </div>
          <div className="berbagai_item">
            <img src="images/berbagai2.png" alt="Berbagai" />
            <h3>Pinang Residences</h3>
            <p>
              Jl. Deplu Raya No.16 RT.5, RW.003 Bintaro, Pesanggrahan, Jakarta
              Selatan 12330
            </p>
          </div>
          <div className="berbagai_item">
            <img src="images/berbagai3.png" alt="Berbagai" />
            <h3>South Grove</h3>
            <p>
              1 No.1, RT.1/RW.1, Lb. Bulus, Kec. Cilandak, Kota Jakarta Selatan,
              Daerah Khusus Ibukota Jakarta 12440
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Berbagai;
