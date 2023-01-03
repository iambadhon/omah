import React from "react";
import "./tahapan.css";

const Tahapan = () => {
  return (
    <section id="tahapan">
      <div className="container">
        <div className="tahapam_title">
          <h2>Tahapan Pembelian Properti yang Mudah dan Cepat</h2>
        </div>
        <div className="tahapan_item_main">
          <div className="tahapan_item">
            <h3>Pilih Properti</h3>
            <span>01</span>
            <p>
              Cari properti yang diinginkan sesuai dengan kriteria anda dan
              keluarga. Cara memilih properti yang bijak dapat anda baca lebih
              lanjut di sini
            </p>
            <div className="tahapan_btn">
              <a href="#">
                Baca lebih Lanjut
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
          <div className="tahapan_item">
            <h3>Proses Booking</h3>
            <span>02</span>
            <p>
              Pembayaran dalam bentuk sejumlah uang sebagai komitmen memesan
              unit properti tertentu.
            </p>
            <div className="tahapan_btn">
              <a href="#">
                Baca lebih Lanjut
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
          <div className="tahapan_item">
            <h3>KPR dan Sertifikasi</h3>
            <span>03</span>
            <p>
              Pembiayaan KPR untuk pembeli rumah dengan skema pembiayaan jika
              diperlukan dan dilanjutkan proses sertifkasi HGB.
            </p>
            <div className="tahapan_btn">
              <a href="#">
                Baca lebih Lanjut
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tahapan;
