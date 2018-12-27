import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer id="footer" className="bg-dark text-white p-2 text-center">
        <div className="social-icons">
          <a href="">
            <i className="fab fa-linkedin-in fa-sm" />
          </a>
          <a href="">
            <i className="fab fa-github" />
          </a>
          <a href="">
            <i className="fab fa-twitter" />
          </a>
          <a href="">
            <i className="fab fa-facebook-f" />
          </a>
        </div>
        <small>
          Coypright &copy; {new Date().getFullYear()} Smallulu Resume
        </small>
      </footer>
    </div>
  );
}
