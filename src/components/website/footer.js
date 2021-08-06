import React, { Component } from "react";

import "./trung.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="row">
              <div className="col-md-6">
                <div className="footer-contact">
                  <h2>Our Address</h2>
                  <p><i className="fa fa-map-marker-alt" />123 Street, New York, USA</p>
                  <p><i className="fa fa-phone-alt" />+012 345 67890</p>
                  <p><i className="fa fa-envelope" />info@example.com</p>
                  <div className="footer-social">
                    <a href><i className="fab fa-twitter" /></a>
                    <a href><i className="fab fa-facebook-f" /></a>
                    <a href><i className="fab fa-youtube" /></a>
                    <a href><i className="fab fa-instagram" /></a>
                    <a href><i className="fab fa-linkedin-in" /></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer-link">
                  <h2>Quick Links</h2>
                  <a href>Terms of use</a>
                  <a href>Privacy policy</a>
                  <a href>Cookies</a>
                  <a href>Help</a>
                  <a href>FQAs</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="footer-newsletter">
              <h2>Newsletter</h2>
              <p>
                Lorem ipsum dolor sit amet elit. Quisque eu lectus a leo dictum nec non quam. Tortor eu placerat rhoncus, lorem quam iaculis felis, sed lacus neque id eros.
              </p>
              <div className="form">
                <input className="form-control" placeholder="Email goes here" />
                <button className="btn custom-btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Footer;
