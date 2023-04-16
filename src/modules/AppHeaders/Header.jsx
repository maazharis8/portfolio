import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { RxTwitterLogo, RxInstagramLogo } from "react-icons/rx";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header class="header">
        <div class="container">
          <ul class="social-icons pt-3">
            <li class="social-item">
              <a class="social-link text-light" href="#">
                <RiFacebookFill />
              </a>
            </li>
            <li class="social-item">
              <a class="social-link text-light" href="#">
                <RxTwitterLogo />
              </a>
            </li>
            <li class="social-item">
              <a class="social-link text-light" href="#">
                <FaLinkedinIn />
              </a>
            </li>
            <li class="social-item">
              <a class="social-link text-light" href="#">
                <RxInstagramLogo />
              </a>
            </li>
            <li class="social-item">
              <a class="social-link text-light" href="#">
                <FaGithub />
              </a>
            </li>
          </ul>
          <div class="header-content">
            <h4 class="header-subtitle">Hello, I am</h4>
            <h1 class="header-title">M Maaz Haris</h1>
            <h6 class="header-mono">Frond-End Engineer</h6>
            <button class="btn btn-primary btn-rounded">
              <i class="ti-printer pr-2"></i>Print Resume
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
