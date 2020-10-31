import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Get In Touch</h2>
                  <p>
                    Sign up to our mailing list for sales and information
                  </p>
                </div>
                <iframe title="form" name="hidden_iframe" id="hidden_iframe" style={{display: "none"}} onload="if(submitted)  {window.location='http://localhost:3000/';}"></iframe>
                <form name="sentMessage" id="contactForm" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSe14eYB9CjufEKvP8hMU80JjUF_hSAj1Gm2Fqnn8luhEU398Q/formResponse" method="post" target="hidden_iframe" onsubmit="submitted=true;">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          required="required"
                          name="entry.1369695307"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                          name="entry.931557638"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div> */}
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Send Message
                  </button>
                </form>
                {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdGbWYq7WldMnrNWq_Lk5WJLBXPHwkREYlv4T7UChXbNQVAZw/viewform?embedded=true" width="640" height="538" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Contact Info</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Address
                  </span>
                  {this.props.data ? this.props.data.address : "loading"}
                </p>
              </div>
              {/* <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone
                  </span>{" "}
                  {this.props.data ? this.props.data.phone : "loading"}
                </p>
              </div> */}
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {this.props.data ? this.props.data.email : "loading"}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        href={this.props.data ? this.props.data.facebook : "/"}
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.instagram : "/"}>
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.emailLink : "/"}>
                      <i class="fa fa-envelope"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; 2020 minimaru. Design by{" "}
              {/* <a href="http://www.myfoodmart.com.au" rel="nofollow"> */}
                Johnny Chan
              {/* </a> */}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

// export default Contact;
