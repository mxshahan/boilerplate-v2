import React from "react";
import { Link } from 'react-router-dom'

const FooterComponent = () => {
  return (
    <React.Fragment>
      <div className="home-section-info pt-5 pb-5">
        <div className="container d-flex">
          <div className="row align justify-content-around w-100">
            <div className="col-2 hide-on-mobile" />
            <div className="col-8">
              <h2>Nav Footer</h2>
            </div>
            <div className="col-2 hide-on-mobile" />
          </div>
        </div>
      </div>

      <div className="home-section-footer align pt-4 pb-2">
        <p>Copyright © 2019 DealStryker, Inc. All Rights Reserved.</p>
      </div>
    </React.Fragment>
  );
};

export const Footer = FooterComponent;
