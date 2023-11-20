import React from "react";
import "./footer.scss";
export default function Footer() {
  return (
    <div className="container">
      <div className="effect thurio">
        <h2>Social Media</h2>
        <div className="buttons">
          <a
            href="https://www.facebook.com/noussaier.bibani.940/"
            className="fb"
            title="Join us on Facebook">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://twitter.com/BibaniNoussaier"
            className="tw"
            title="Join us on Twitter">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/noussaier.bi/"
            className="insta"
            title="Join us on Instagram">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/noussaier-bibani/"
            className="in"
            title="Join us on Linked In">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
