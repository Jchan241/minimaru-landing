import React, { Component } from "react";

export class Team extends Component {
  render() {
    return (
      <div id="team" className="text-center">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Find us</h2>
          </div>
          <div id="row">
            <iframe
              title="minimaru map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.197808461767!2d145.11707441581092!3d-37.92580907973231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66b216441bd8f%3A0xf93c8f23113040b4!2s349%20Clayton%20Rd%2C%20Clayton%20VIC%203168!5e0!3m2!1sen!2sau!4v1604020240141!5m2!1sen!2sau"
              width="100%"
              height="450"
              frameborder="0"
              // style="border:0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0">
            </iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
