import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <section
          className="resume-section p-3 p-lg-5 d-flex d-column text-left"
          id="about"
        >
          <div className="my-auto">
            <h1 className="mb-0">
              Loui
              <span className="text-primary">Lu</span>
            </h1>
            <div className="subheading mb-5">
              9888 Cameron St, Burnaby, BC V3J 0A4 ·
              {/* <a href="mailto:name@email.com">name@email.com</a> */}
            </div>
            <p className="lead mb-5">
              I am experienced in{' '}
              <span className="text-primary">React/Django/ThinkPHP/</span>etc.
              frameworks to provide website solutions for high level overviews.
              Iterative approaches to corporate strategy foster collaborative
              thinking to further the overall value proposition.
            </p>
            {/* <div className="social-icons">
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="#">
                <i className="fab fa-github" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
            </div> */}
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;
