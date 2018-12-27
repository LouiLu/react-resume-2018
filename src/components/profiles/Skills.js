import React, { Component } from 'react';
import Page from '../layout/Page';

export default class Skills extends Component {
  render() {
    return (
      <Page>
        <section className="resume-section p-3 p-lg-5 text-left" id="skills">
          <h2>Skills</h2>
          <div>
            <div class=" subheading mb-3">
              Programming Languages &amp; Tools
            </div>
            <ul class="list-inline dev-icons">
              <li class="list-inline-item">
                <i class="fab fa-html5" />
              </li>
              <li class="list-inline-item">
                <i class="fab fa-css3-alt" />
              </li>
              <li class="list-inline-item">
                <i class="fab fa-python" />
              </li>
              <li class="list-inline-item">
                <i class="fab fa-react" />
              </li>
              <li class="list-inline-item">
                <i class="fab fa-node-js" />
              </li>
              <li class="list-inline-item">
                <i class="fab fa-wordpress" />
              </li>
              <li class="list-inline-item">
                <i class="fab fa-magento" />
              </li>
              <li class="list-inline-item">
                <i class="fab fa-github" />
              </li>
              <li class="list-inline-item">
                <i class="fab fa-npm" />
              </li>
            </ul>
            <div className="text-left">
              <div class="subheading mb-3">Workflow</div>
              <ul class="fa-ul mb-0 ">
                <li>
                  <i class="fa-li fa fa-check" />
                  Web-First, Responsive Design
                </li>
                <li>
                  <i class="fa-li fa fa-check" />
                  Cross Browser Testing &amp; Debugging
                </li>
                <li>
                  <i class="fa-li fa fa-check" />
                  Requirements Collection
                </li>
                <li>
                  <i class="fa-li fa fa-check" />
                  Developments &amp; Scrum
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Page>
    );
  }
}
