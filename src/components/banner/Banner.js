import React from "react";
import "./banner.css";
const Banner = () => {
  return (
    <section id="banner">
      <div className="container">
        <div className="banner_flex">
          <div className="banner_text">
            <h1>Temukan Hunian Keluarga Sesuai Keinginanmu</h1>
            <p>
              Menyediakan hunian bagi keluarga anda dengan varian pilihan dan
              lokasi yang strategis di kota anda dengan cara yang lebih mudah.
            </p>
            <div className="banner_input">
              <i className="fa-solid fa-location-dot"></i>
              <form>
                <input
                  type="text"
                  placeholder="Search location, properties, residental group"
                />
                <button>Search</button>
              </form>
            </div>
            <div className="banner_count">
              <div className="banner_count_item">
                <h2>
                  200<span>+</span>
                </h2>
                <p>Residental grup telah bergabung</p>
              </div>
              <div className="banner_count_item">
                <h2>
                  10<span>+</span>
                </h2>
                <p>Sudah berpengalaman </p>
              </div>
              <div className="banner_count_item">
                <h2>
                  999<span>+</span>
                </h2>
                <p>Properti tersedia di berbagai Kota</p>
              </div>
            </div>
          </div>
          <div className="banner_img">
            <img src="images/banner.png" alt="Logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
