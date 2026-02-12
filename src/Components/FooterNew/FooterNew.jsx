import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { asset } from "../../utils/asset";

import "../FooterNew/FooterNew.css";

function FooterNew() {
  useEffect(() => {
    const footerWidgetAccordion = () => {
      const footerWidgetContainers =
        document.querySelectorAll(".footer__widget");

      footerWidgetContainers.forEach((footerWidgetContainer) => {
        footerWidgetContainer.addEventListener("click", toggleAccordion);
      });
    };

    const toggleAccordion = (evt) => {
      const button = evt.target.closest(".footer__widget--button");
      if (!button) return;

      const footerWidget = button.closest(".footer__widget");
      const footerWidgetInner = footerWidget.querySelector(
        ".footer__widget--inner",
      );

      if (footerWidget.classList.contains("active")) {
        footerWidget.classList.remove("active");
        slideUp(footerWidgetInner);
      } else {
        footerWidget.classList.add("active");
        slideDown(footerWidgetInner);

        const siblings = getSiblings(footerWidget);
        siblings.forEach((item) => {
          item.classList.remove("active");
          slideUp(item.querySelector(".footer__widget--inner"));
        });
      }
    };

    const slideDown = (element) => {
      //   element.style.maxHeight = element.scrollHeight + 'px';
      element.style.visibility = "visible";
      element.style.display = "block";
      element.style.opacity = 1;
    };

    const slideUp = (element) => {
      //   element.style.maxHeight = null;
      element.style.visibility = "hidden";
      element.style.display = "none";
      element.style.opacity = 0;
    };

    const getSiblings = (elem) => {
      const siblings = [];
      let sibling = elem.parentNode.firstChild;
      while (sibling) {
        if (sibling.nodeType === 1 && sibling !== elem) {
          siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
      }
      return siblings;
    };

    window.addEventListener("load", footerWidgetAccordion);

    return () => {
      window.removeEventListener("load", footerWidgetAccordion);
    };
  }, []);

  return (
    <>
      <footer className="footer__section footer__bg gonagrr">
        <div className="container">
          <div className="main__footer section--padding">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer__widget">
                  <h2 className="footer__widget--title d-none d-md-block">
                    About Us{" "}
                    <button
                      type="button"
                      className="footer__widget--button"
                      aria-label="footer widget button"
                    />
                    <svg
                      className="footer__widget--title__arrowdown--icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.355"
                      height="8.394"
                      viewBox="0 0 10.355 6.394"
                    >
                      <path
                        d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                        transform="translate(-6 -8.59)"
                        fill="currentColor"
                      />
                    </svg>
                  </h2>
                  <div className="footer__widget--inner">
                    <a className="footer__logo" href="index.aspx">
                      <img
                        className="footer__logo--img display-block"
                        src={asset("logo/m.png")}
                        alt="footer-logo"
                      />
                    </a>
                    <p className="footer__widget--desc">
                      We Mahesh &amp; Co. is headed under proprietorship of Mr.
                      Rakesh M. Mehta having our main office in Mumbai.
                    </p>
                    <div className="footer__social">
                      <ul className="social__shear d-flex">
                        <li className="social__shear--list">
                          <a className="social__shear--list__icon" href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="8.239"
                              height="15.984"
                              viewBox="0 0 11.239 20.984"
                            >
                              <path
                                id="Icon_awesome-facebook-f"
                                data-name="Icon awesome-facebook-f"
                                d="M11.575,11.8l.583-3.8H8.514V5.542A1.9,1.9,0,0,1,10.655,3.49h1.657V.257A20.2,20.2,0,0,0,9.371,0c-3,0-4.962,1.819-4.962,5.112V8.006H1.073v3.8H4.409v9.181H8.514V11.8Z"
                                transform="translate(-1.073)"
                                fill="currentColor"
                              />
                            </svg>
                            <span className="visually-hidden">Facebook</span>
                          </a>
                        </li>
                        <li className="social__shear--list">
                          <a className="social__shear--list__icon" href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14.497"
                              height="14.492"
                              viewBox="0 0 19.497 19.492"
                            >
                              <path
                                id="Icon_awesome-instagram"
                                data-name="Icon awesome-instagram"
                                d="M9.747,6.24a5,5,0,1,0,5,5A4.99,4.99,0,0,0,9.747,6.24Zm0,8.247A3.249,3.249,0,1,1,13,11.238a3.255,3.255,0,0,1-3.249,3.249Zm6.368-8.451A1.166,1.166,0,1,1,14.949,4.87,1.163,1.163,0,0,1,16.115,6.036Zm3.31,1.183A5.769,5.769,0,0,0,17.85,3.135,5.807,5.807,0,0,0,13.766,1.56c-1.609-.091-6.433-.091-8.042,0A5.8,5.8,0,0,0,1.64,3.13,5.788,5.788,0,0,0,.065,7.215c-.091,1.609-.091,6.433,0,8.042A5.769,5.769,0,0,0,1.64,19.341a5.814,5.814,0,0,0,4.084,1.575c1.609.091,6.433.091,8.042,0a5.769,5.769,0,0,0,4.084-1.575,5.807,5.807,0,0,0,1.575-4.084c.091-1.609.091-6.429,0-8.038Zm-2.079,9.765a3.289,3.289,0,0,1-1.853,1.853c-1.283.509-4.328.391-5.746.391S5.28,19.341,4,18.837a3.289,3.289,0,0,1-1.853-1.853c-.509-1.283-.391-4.328-.391-5.746s-.113-4.467.391-5.746A3.289,3.289,0,0,1,4,3.639c1.283-.509,4.328-.391,5.746-.391s4.467-.113,5.746.391a3.289,3.289,0,0,1,1.853,1.853c.509,1.283.391,4.328.391,5.746S17.855,15.705,17.346,16.984Z"
                                transform="translate(0.004 -1.492)"
                                fill="currentColor"
                              />
                            </svg>
                            <span className="visually-hidden">Instagram</span>
                          </a>
                        </li>
                        <li className="social__shear--list">
                          <a className="social__shear--list__icon" href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14.419"
                              height="14.419"
                              viewBox="0 0 19.419 19.419"
                            >
                              <path
                                id="Icon_awesome-linkedin-in"
                                data-name="Icon awesome-linkedin-in"
                                d="M4.347,19.419H.321V6.454H4.347ZM2.332,4.686A2.343,2.343,0,1,1,4.663,2.332,2.351,2.351,0,0,1,2.332,4.686ZM19.415,19.419H15.4V13.108c0-1.5-.03-3.433-2.093-3.433-2.093,0-2.414,1.634-2.414,3.325v6.42H6.869V6.454H10.73V8.223h.056A4.23,4.23,0,0,1,14.6,6.129c4.075,0,4.824,2.683,4.824,6.168v7.122Z"
                                fill="currentColor"
                              />
                            </svg>
                            <span className="visually-hidden">Linkedin</span>
                          </a>
                        </li>
                        <li className="social__shear--list">
                          <a className="social__shear--list__icon" href="#">
                            <i className="fa fa-twitter" />
                            <span className="visually-hidden">Twitter</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="footer__widget">
                  <h2 className="footer__widget--title ">
                    Quick Links
                    <button
                      type="button"
                      className="footer__widget--button"
                      aria-label="footer widget button"
                    />
                    <svg
                      className="footer__widget--title__arrowdown--icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.355"
                      height="8.394"
                      viewBox="0 0 10.355 6.394"
                    >
                      <path
                        d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                        transform="translate(-6 -8.59)"
                        fill="currentColor"
                      />
                    </svg>
                  </h2>
                  <ul className="footer__widget--menu footer__widget--inner">
                    <li className="footer__widget--menu__list">
                      <Link className="footer__widget--menu__text" to={"/"}>
                        Home
                      </Link>
                    </li>
                    <li className="footer__widget--menu__list">
                      <Link
                        className="footer__widget--menu__text"
                        to={"/about"}
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="footer__widget--menu__list">
                      <Link
                        className="footer__widget--menu__text"
                        to={"/newarrival"}
                      >
                        New Arrivals
                      </Link>
                    </li>
                    <li className="footer__widget--menu__list">
                      <Link
                        className="footer__widget--menu__text"
                        to={"/contact"}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="footer__widget mobview">
                  <h2 className="footer__widget--title">
                    Product Categories
                    <button
                      type="button"
                      className="footer__widget--button"
                      aria-label="footer widget button"
                    />
                    <svg
                      className="footer__widget--title__arrowdown--icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.355"
                      height="8.394"
                      viewBox="0 0 10.355 6.394"
                    >
                      <path
                        d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                        transform="translate(-6 -8.59)"
                        fill="currentColor"
                      />
                    </svg>
                  </h2>
                  <div className="row">
                    <div className="col-lg-4 col-md-4">
                      <ul className="footer__widget--menu footer__widget--inner">
                        <li className="footer__widget--menu__list">
                          <Link
                            className="footer__widget--menu__text"
                            to={"/acrylic"}
                          >
                            Acrylic And Plastics
                          </Link>
                        </li>
                        <li className="footer__widget--menu__list">
                          <Link
                            className="footer__widget--menu__text"
                            to={"/anatomy"}
                          >
                            Anatomy Models
                          </Link>
                        </li>
                        <li className="footer__widget--menu__list">
                          <Link
                            className="footer__widget--menu__text"
                            to={"/bags"}
                          >
                            Bags
                          </Link>
                        </li>
                        <li className="footer__widget--menu__list">
                          <Link
                            className="footer__widget--menu__text"
                            to={"/crystal"}
                          >
                            Crystal
                          </Link>
                        </li>
                        <li className="footer__widget--menu__list">
                          <Link
                            className="footer__widget--menu__text"
                            to={"/fiber"}
                          >
                            Fiber
                          </Link>
                        </li>
                        <li className="footer__widget--menu__list">
                          <Link
                            className="footer__widget--menu__text"
                            to={"/shirtandtShirt"}
                          >
                            Shirt & T-Shirt
                          </Link>
                        </li>
                        <li className="footer__widget--menu__list">
                          <Link
                            className="footer__widget--menu__text"
                            to={"/leatherite"}
                          >
                            Leautuerite
                          </Link>
                        </li>
                        <li className="footer__widget--menu__list">
                          <Link
                            className="footer__widget--menu__text"
                            to={"/metal"}
                          >
                            Metal
                          </Link>
                        </li>
                        <li className="footer__widget--menu__list">
                          <Link
                            className="footer__widget--menu__text"
                            to={"/sandtimers"}
                          >
                            Sand Timers
                          </Link>
                        </li>
                        <li className="footer__widget--menu__list">
                          <Link
                            className="footer__widget--menu__text"
                            to={"/umbrella"}
                          >
                            Umbrella
                          </Link>
                        </li>
                        <li className="footer__widget--menu__list">
                          <Link
                            className="footer__widget--menu__text"
                            to={"/spacepens"}
                          >
                            Space Pens
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer__widget deskview">
                  <h2 className="footer__widget--title">
                    Product Categories
                    <button
                      className="footer__widget--button"
                      aria-label="footer widget button"
                    />
                    <svg
                      className="footer__widget--title__arrowdown--icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.355"
                      height="8.394"
                      viewBox="0 0 10.355 6.394"
                    >
                      <path
                        d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                        transform="translate(-6 -8.59)"
                        fill="currentColor"
                      />
                    </svg>
                  </h2>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <ul className="footer__widget--menu footer__widget--inner">
                        <li className="footer__widget--menu__list">
                          <Link
                            className="footer__widget--menu__text"
                            to={"/acrylic"}
                          >
                            Acrylic And Plastics
                          </Link>
                        </li>
                        <li className="footer__widget--menu__list">
                          <Link
                            className="footer__widget--menu__text"
                            to={"/anatomy"}
                          >
                            Anatomy Models
                          </Link>
                        </li>
                        <li className="footer__widget--menu__list">
                          <Link
                            className="footer__widget--menu__text"
                            to={"/bags"}
                          >
                            Bags
                          </Link>
                        </li>
                        <li className="footer__widget--menu__list">
                          <Link
                            className="footer__widget--menu__text"
                            to={"/crystal"}
                          >
                            Crystal
                          </Link>
                        </li>
                        <li className="footer__widget--menu__list">
                          <Link
                            className="footer__widget--menu__text"
                            to={"/fiber"}
                          >
                            Fiber
                          </Link>
                        </li>
                        <li className="footer__widget--menu__list">
                          <Link
                            className="footer__widget--menu__text"
                            to={"/shirtandtShirt"}
                          >
                            Shirt & T-Shirt
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <ul className="footer__widget--menu footer__widget--inner">
                        <li className="footer__widget--menu__list">
                          <Link
                            className="footer__widget--menu__text"
                            to={"/leatherite"}
                          >
                            Leautuerite
                          </Link>
                        </li>
                        <li className="footer__widget--menu__list">
                          <Link
                            className="footer__widget--menu__text"
                            to={"/metal"}
                          >
                            Metal
                          </Link>
                        </li>
                        <li className="footer__widget--menu__list">
                          <Link
                            className="footer__widget--menu__text"
                            to={"/sandtimers"}
                          >
                            Sand Timers
                          </Link>
                        </li>
                        <li className="footer__widget--menu__list">
                          <Link
                            className="footer__widget--menu__text"
                            to={"/umbrella"}
                          >
                            Umbrella
                          </Link>
                        </li>
                        <li className="footer__widget--menu__list">
                          <Link
                            className="footer__widget--menu__text"
                            to={"/spacepens"}
                          >
                            Space Pens
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer__widget">
                  <h2 className="footer__widget--title ">
                    Our Location Map{" "}
                    <button
                      type="button"
                      className="footer__widget--button"
                      aria-label="footer widget button"
                    />
                    <svg
                      className="footer__widget--title__arrowdown--icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.355"
                      height="8.394"
                      viewBox="0 0 10.355 6.394"
                    >
                      <path
                        d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                        transform="translate(-6 -8.59)"
                        fill="currentColor"
                      />
                    </svg>
                  </h2>
                  <div className="footer__newsletter footer__widget--inner">
                    <iframe
                      className="footer__contact--map__frame"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.1356595758903!2d72.84299307596719!3d19.189276248405154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7c6ff755669%3A0xe838676f71dc30c6!2sMahesh%20%26%20Co!5e0!3m2!1sen!2sin!4v1698758723318!5m2!1sen!2sin"
                      style={{ border: "0" }}
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom d-flex justify-content-between align-items-center">
            <p className="copyright__content  m-0">
              Copyright © 2023{" "}
              <a className="copyright__content--link" href="#">
                Mahesh &amp; Co
              </a>
              . All Rights Reserved.
            </p>
            <p className="footer__bottom--desc">
              Designed By <a href="https://technofra.com/">Technofra</a>.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterNew;
