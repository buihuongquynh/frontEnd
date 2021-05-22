import React from 'react';
import './OrderDetails.scss';
import HeaderCustomer from '../../../../components/HeaderCustomer/HeaderCustomer';
function OrderDetails() {
  return (
    <div className="order-tab">
      <HeaderCustomer title="Order Details" icon={'fas fa-edit'} text="Edit" />
      <div className="order__center">
        <div className="center__item">
          <div className="order__info">
            <div className="contact contacta">
              <div className="Contact__title">Order info</div>
              <div className="item__chil">
                <div className="chil__flex">
                  <span>Customer</span>
                  <span className="text">
                    Miron Vitold Street John Wick, no. 7 San Diego USA
                  </span>
                </div>
              </div>
              <div className="item__chil">
                <div className="chil__flex">
                  <span>ID</span>
                  <p className="text">#5ecb8a6879877087d4aa2690</p>
                </div>
              </div>
              <div className="item__chil">
                <div className="chil__flex">
                  <span>Number</span>
                  <span className="text">DEV-103</span>
                </div>
              </div>
              <div className="item__chil">
                <div className="chil__flex">
                  <span>Date</span>
                  <span className="text">04/05/2021 20:01</span>
                </div>
              </div>
              <div className="item__chil">
                <div className="chil__flex">
                  <span>Promotion Code</span>
                  <span className="text">N/A</span>
                </div>
              </div>
              <div className="item__chil">
                <div className="chil__flex">
                  <span>Total Amount</span>
                  <span className="text">$500.00</span>
                </div>
              </div>
              <div className="item__chil">
                <div className="chil__flex">
                  <span>Status</span>
                  <span className="text">
                    <div className="combobox">
                      <form>
                        <select className="se" name="cars" id="cars">
                          <option value="updatedAt|asc">Canceled</option>
                          <option value="orders|desc">Completed</option>
                          <option value="orders|asc">Rejected</option>
                        </select>
                      </form>
                    </div>
                  </span>
                </div>
              </div>
              <div className="setting"></div>
            </div>
            <div className="contact contactb">
              <div className="Contact__title">Order items</div>
              <div className="item__chil">
                <div className="chil__flex">
                  <span>Description</span>
                  <span className="text">
                  Billing Cycle
                  </span>
                  <span className="amount">Amount</span>
                </div>
              </div>
              <div className="item__chil">
                <div className="chil__flex">
                  <span>25 x Project Points</span>
                  <span className="text">monthly</span>
                  <span className="amount">$50.25</span>
                </div>
              </div>
              <div className="item__chil">
                <div className="chil__flex">
                  <span>1 x Freelancer Subscription</span>
                  <span className="text">monthly3</span>
                  <span className="amount">$5.00</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
