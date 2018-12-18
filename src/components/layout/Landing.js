import React, { Component } from 'react';
import Page from './Page';

class Landing extends Component {
  render() {
    return (
      <Page color="" background="">
        <div className="landing">
          <section
            className="resume-section p-3 p-lg-5 d-flex d-column text-left"
            id="about"
          >
            <div className="my-auto">
              <h1 className="mb-0 text-dark">
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
                frameworks to provide website solutions for high level
                overviews. Iterative approaches to corporate strategy foster
                collaborative thinking to further the overall value proposition.
              </p>
            </div>
          </section>
        </div>
      </Page>
    );
  }
}

export default Landing;
