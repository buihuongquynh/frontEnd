import React,{ useState } from 'react'
import { Tab, Content } from "../../../../components/Tab/Tab";
import './CustomersDetail.scss';
import CallApi from '../../../../components/CallApi/CallApi';
import Invoice from '../../../../components/Invoices/Invoicer';
import HeaderCustomer from '../../../../components/HeaderCustomer/HeaderCustomer';
function CustomersDetail() {
    const [active, setActive] = useState(0);
    const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
    return (
        <div>
            <div className="detail">
                <HeaderCustomer title = "Miron Vitold" icon ={'fas fa-edit'} text ="Edit"/>
                <div className="tab__Content">  
                    <div className = "tabs">
                        <Tab onClick={handleClick} active={active === 0} id={0}>Details</Tab>
                        <Tab onClick={handleClick} active={active === 1} id={1}>Invoices</Tab>
                        <Tab onClick={handleClick} active={active === 2} id={2}>Logs</Tab>
                    </div>
                    <>
                        <Content active={active === 0}>
                            <div className="information">
                                <div className="infor__center">
                                    <div className="contact">
                                        <div className="Contact__title">
                                             Contact Details
                                        </div>
                                        <div className="item__chil">
                                            <div className="chil__flex">
                                                <span>Email</span>
                                                <div className="gmail">
                                                    <span>miron.vitold@devias.io</span>
                                                    <a className="db">EMAIL VERIFIED</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item__chil">
                                            <div className="chil__flex">
                                                <span>Phone</span>
                                                <span className="text">+55 748 327 439</span>
                                            </div>
                                        </div>
                                        <div className="item__chil">
                                            <div className="chil__flex">
                                                <span>Country</span>
                                                <span className="text">USA</span>
                                            </div>
                                        </div>
                                        <div className="item__chil">
                                            <div className="chil__flex">
                                                <span>State/Region</span>
                                                <span className="text">New York</span>
                                            </div>
                                        </div>
                                        <div className="item__chil">
                                            <div className="chil__flex">
                                                <span>Address 1</span>
                                                <span className="text">Street John Wick, no. 7</span>
                                            </div>
                                        </div>
                                        <div className="item__chil">
                                            <div className="chil__flex">
                                                <span>Address 2</span>
                                                <span className="text">House #25</span>
                                            </div>
                                        </div>
                                        <div className="setting">
                                            <div className="reset">
                                                <span><i class="fas fa-lock"></i></span>
                                                <p>Reset & Send Password</p>
                                            </div>
                                            <div className="reset">
                                                <span><i class="fas fa-user"></i></span>
                                                <p>Login as Customer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contact">
                                        <div className="Contact__title">
                                            Invoices/CheckoutBilling
                                        </div>
                                        <div className="item__chil">
                                            <div className="chil__flex">
                                                <span>Credit Card</span>
                                                <span className="text">**** **** **** **** 4142</span>
                                            </div>
                                        </div>
                                        <div className="item__chil">
                                            <div className="chil__flex">
                                                <span>Paid</span>
                                                <span className="text">2 ($50.00)</span>
                                            </div>
                                        </div>
                                        <div className="item__chil">
                                            <div className="chil__flex">
                                                <span>Draft</span>
                                                <span className="text">1 ($5.00)</span>
                                            </div>
                                        </div>
                                        <div className="item__chil">
                                            <div className="chil__flex">
                                                <span>Unpaid/Due</span>
                                                <span className="text">1 ($12.00)</span>
                                            </div>
                                        </div>
                                        <div className="item__chil">
                                            <div className="chil__flex">
                                                <span>Refunded</span>
                                                <span className="text">0 ($0.00)</span>
                                            </div>
                                        </div>
                                        <div className="item__chil">
                                            <div className="chil__flex">
                                                <span>Gross Income</span>
                                                <span className="text">$1,200.00</span>
                                            </div>
                                        </div>
                                        <div className="setting">
                                            <div className="reset">
                                                <span><i class="fab fa-bitcoin"></i></span>
                                                <p>Create Invoice</p>
                                            </div>
                                            <div className="reset">
                                                <span><i class="fas fa-book"></i></span>
                                                <p>Resend Due Invoices</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="infor__center">
                                    <div className="contact">
                                        <div className="Contact__title">
                                        Emails
                                        </div>
                                        <div className="combobox">
                                            <form>
                                                <select className="se" name="cars" id="cars">
                                                    <option value="updatedAt|asc">Resend last invoice</option>
                                                    <option value="orders|desc">Send password reset</option>
                                                    <option value="orders|asc">Send verification</option>
                                                </select>
                                            </form>
                                        </div>
                                        <div className="a">
                                            <button className="button">
                                                <span><i class="fas fa-envelope"></i></span>
                                                <span>Send email</span>
                                            </button>
                                        </div>
                                        <div className="item__chil">
                                            <div className="chil__flex">
                                                <span>Order confirmation</span>
                                                <span className="text">28/04/2021 | 07:02</span>
                                            </div>
                                        </div>
                                        <div className="item__chil">
                                            <div className="chil__flex">
                                                <span>Order confirmation</span>
                                                <span className="text">27/04/2021 | 00:47</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contact">
                                        <div className="Contact__title">
                                        Data Management
                                        </div>
                                        <div className="setting">
                                            <div className="reset">
                                                <span><i class="fas fa-ban"></i></span>
                                                <p>Close Account</p>
                                            </div>
                                            <div className="reset">
                                                <span><i class="fas fa-download"></i></span>
                                                <p>Export Data</p>
                                            </div>
                                            <div className="ji">
                                                <span>Remove this customer’s chart if he requested that, if not please be aware that what has been deleted can never brought back</span>
                                            </div>
                                            <div className="a">
                                            <button className="button mn">
                                                <span><i class="fas fa-trash-alt"></i></span>
                                                <span>Delete Account</span>
                                            </button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Content>
                        <Content active={active === 1}>
                        <div className="invoices">
                            <div className="information">
                                <div className="infor__center">
                                    <div className="contact">
                                        <div className="Contact__title">
                                        Invoices
                                        </div>
                                        <Invoice date = "Date" Description ="Description" Payment ="Payment Method" Total = "Total" Status ="Status" Actions ="Actions" />
                                        <Invoice date = "02/05/2021 | 18:54" Description ="Freelancer Subscription (12/05/2019 - 11/06/2019)" Payment ="Credit Card" Total = "$5.25" Status ="PAID"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Content>
                        <Content active={active === 2}>
                        <div className="invoices">
                            <div className="information">
                                <div className="infor__center">
                                    <div className="contact">
                                        <div className="Contact__title">
                                                Logs
                                        </div>
                                        <CallApi method = "POST" number ="200" link ="/api/purchase" status = "Purchase" id ="84.234.243.42"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Content>
                    </>
                </div>
            </div>
        </div>
    )
}

export default CustomersDetail
