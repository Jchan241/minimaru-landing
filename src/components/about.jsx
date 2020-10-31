import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/Simpleeco.jpeg" className="img-responsive aboutImage" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Us</h2>
                <p>
                  Minimaru, in Japanese, means ‘minimal’. We’ve adopted the philosophy of simple, yet purposeful living, and believe that the products we choose to bring into our homes should reflect this balance.
                  <br />
                  <br />
                  We’ve curated our product range from leading brands across the globe, including Japanese artisans, and local businesses in Australia, whose products align to our vision. Whether it’s clever kitchen utensils, innovative skincare & cosmetics, or organisation and storage options, our products have been carefully considered to offer you practical yet stylish solutions for elevated home living.
                  <br />
                  <br />
                  Browse our collection of contemporary homewares and products for the bedroom, kitchen, bathroom, office (and more,) online or at our flagship store in Clayton at 349 Clayton Road, Clayton.</p>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                {/* <h3>Why Choose Us?</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {this.props.data ? this.props.data.Why.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                    {this.props.data ? this.props.data.Why2.map((d, i) => <li  key={`${d}-${i}`}> {d}</li>) : 'loading'}

                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
