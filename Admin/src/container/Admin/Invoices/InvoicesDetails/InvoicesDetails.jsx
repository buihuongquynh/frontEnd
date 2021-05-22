import React from 'react';
import './InvoicesDetails.scss';
function InvoicesDetails() {
  return (
    <div>
      <div className="invoices__details">
        <div className="HederCustomer">
          <div className="header__center">
            <div className="customer__left">
              <h3>Invoice Details</h3>
              <div className="left__list">
                <a href="a">Dashboard</a>
                <span>
                  <i className="fas fa-angle-right"></i>
                </span>
                <a href="a">Management</a>
                <span>
                  <i className="fas fa-angle-right"></i>
                </span>
                <a className="a" href="s">
                  Customers
                </a>
              </div>
            </div>
            <div className="customer__right">
              <div className=" not_back ">
                <div className="add">Preview PDF</div>
              </div>
              <div className="button">
                <div className="add">Download PDF</div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="pai">
          <div className="pai__center">
            <div className="pai__top">
              <div className="row">
                <div className="col-lg-4">
                  <h4>www.devias.io</h4>
                  <br />
                  <br />
                  <p>
                    Street King William, 123 <br />
                    Level 2, C, 442456 <br />
                    San Francisco, CA, USA <br />
                  </p>
                  <br />
                  <p>
                    Due date <br />
                    14 May 202
                  </p>
                  <br />
                  <p>
                    Billed to <br />
                    Ana Henisky <br />
                    Countdown Grey Lynn <br />
                    6934656584231 <br />
                    271 Richmond Rd, Grey Lynn, Auckland 1022, New Zealand
                  </p>
                </div>
                <div className="col-lg-4">
                  <p>
                    Company No. 4675933 <br />
                    EU VAT No. 949 67545 45
                  </p>
                  <br />
                  <p>
                    Date of issue <br />
                    14 May 2021
                  </p>
                  <br />
                </div>
                <div className="col-lg-4">
                  <h3>paid</h3>
                  <p>Invoice # 3593865</p>
                  
                  <br />
                  <br />
                  <p>
                    accounts@devias.io <br />
                    (+40) 652 3456 23
                  </p>
                  <br />
                  <p>
                    Number <br />
                    DEV-9483
                  </p>
                </div>
              </div>
            </div>
            <div className="pai__bot">
                <div className="bot__item">
                <div className="row">
                    <div className="col-lg-3">
                        <p>Description</p>
                    </div>
                    <div className="col-lg-3">
                        <p></p>
                    </div>
                    <div className="col-lg-3">
                        <p></p>
                    </div>
                    <div className="col-lg-3">
                        <p>Unit Price</p>
                    </div>
                </div>
                </div>
                <div className="bot__item">
                <div className="row">
                    <div className="col-lg-3">
                        <p>Freelancer Subscription (12/05/2019 - 11/06/2019)</p>
                    </div>
                    <div className="col-lg-3">
                        <p></p>
                    </div>
                    <div className="col-lg-3">
                        <p></p>
                    </div>
                    <div className="col-lg-3">
                        <p>$55.50</p>
                    </div>
                </div>
                </div>
                <div className="bot__item">
                <div className="row">
                    <div className="col-lg-3">
                        <p></p>
                    </div>
                    <div className="col-lg-3">
                        <p></p>
                    </div>
                    <div className="col-lg-3">
                        <p>Subtotal</p>
                    </div>
                    <div className="col-lg-3">
                        <p>$50.00</p>
                    </div>
                </div>
                </div>
                <div className="bot__item">
                <div className="row">
                    <div className="col-lg-3">
                        <p></p>
                    </div>
                    <div className="col-lg-3">
                        <p></p>
                    </div>
                    <div className="col-lg-3">
                        <p>Taxes</p>
                    </div>
                    <div className="col-lg-3">
                        <p>$5.50</p>
                    </div>
                </div>
                </div>
                <div className="bot__item">
                <div className="row">
                    <div className="col-lg-3">
                        <p></p>
                    </div>
                    <div className="col-lg-3">
                        <p></p>
                    </div>
                    <div className="col-lg-3">
                        <p>Total</p>
                    </div>
                    <div className="col-lg-3">
                        <p>$55.50</p>
                    </div>
                </div>
                </div>
            </div>
            <h5>
            Notes
            </h5>
            <div className="p__bot">
            <p className="p_bot">Please make sure you have the right bank registration number as I had issues before and make sure you guys cover transfer expenses.</p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoicesDetails;
