import React, { Component } from 'react';
import Page from '../layout/Page';

export default class Educations extends Component {
  render() {
    return (
      <Page>
        <section
          className="resume-section p-3 p-lg-5 d-flex flex-column"
          id="education"
        >
          <div className="my-auto">
            <h2 className="mb-5">Educations</h2>

            <div className="resume-item d-flex flex-column flex-md-row mb-5 text-left">
              <div className="resume-content mr-auto">
                <h3 className="experience-title">Simon Fraser University</h3>
                <div className="subheading mb-3">Bachelor Of Science</div>
                <p>Computing Science</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">
                  January 2010 - September 2015
                </span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row mb-5 text-left">
              <div className="resume-content mr-auto">
                <h3 className="experience-title">Self Learning Developer</h3>
                <div className="subheading mb-3">React/Django</div>
                <p className="col-md-12">
                  Hands-on projects with React/Django for different customer
                  requirements.
                </p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">January 2015 - Present</span>
              </div>
            </div>
          </div>
        </section>
      </Page>
    );
  }
}
