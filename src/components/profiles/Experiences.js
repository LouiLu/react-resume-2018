import React, { Component } from 'react';
import Page from '../layout/Page';

export default class Experiences extends Component {
  render() {
    return (
      <Page>
        <section
          className="resume-section p-3 p-lg-5 d-flex flex-column"
          id="experience"
        >
          <div className="my-auto">
            <h2 className="mb-5">Experience</h2>

            <div className="resume-item d-flex flex-column flex-md-row mb-5 text-left">
              <div className="resume-content mr-auto">
                <h3 className="experience-title">Software Engineer</h3>
                <div className="subheading mb-3">
                  ComNet Telecom Ltd. (Canada)
                </div>
                <p>
                  PHP, Perl, Magento, Wordpress, Apache, PhotoShop, Web Design.
                </p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">January 2016 - Present</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row mb-5 text-left">
              <div className="resume-content mr-auto">
                <h3 className="experience-title">DevOps Engineer</h3>
                <div className="subheading mb-3">Ericcson Canada</div>
                <p>
                  Taking care of internal tools (developed by Perl mostly). Make
                  new tools based on requests.
                </p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">
                  January 2014 - September 2014
                </span>
              </div>
            </div>
          </div>
        </section>
      </Page>
    );
  }
}
