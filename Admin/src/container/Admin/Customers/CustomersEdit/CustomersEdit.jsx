import React from 'react'
import './CustomersEdit.scss'
import HeaderCustomer from '../../../../components/HeaderCustomer/HeaderCustomer';
function CustomersEdit() {
    return (
        <div>
          <div className="edit">
          <HeaderCustomer title = "Customer Edit" icon ={'fas fa-edit'} text ="Edit"/>
          <div className="input">
              <div className="input__top">
                    <div className="top__colum">
                        <div className="item__input">
                            <input type="text" placeholder ="Miron Vitold"/>
                        </div>
                    </div>
                    <div className="top__colum">
                        <div className="item__input">
                            <input type="text" placeholder ="miron.vitold@devias.io"/>
                        </div>
                    </div>
                    <div className="top__colum">
                        <div className="item__input">
                            <input type="text" placeholder ="USA"/>
                        </div>
                    </div>
                    <div className="top__colum">
                        <div className="item__input">
                            <input type="text" placeholder ="New York"/>
                        </div>
                    </div>
                    <div className="top__colum">
                        <div className="item__input">
                            <input type="text" placeholder ="Street John Wick, no. 7"/>
                        </div>
                    </div>
                    <div className="top__colum">
                        <div className="item__input">
                            <input type="text" placeholder ="House #25"/>
                        </div>
                    </div>
                    <div className="top__colum">
                        <div className="item__input">
                            <input type="text" placeholder ="+55 748 327 439"/>
                        </div>
                    </div>
              </div>
              <div className="input__bot">
                    <div className="bot__item">
                        <h6>Email Verified</h6>
                        <p>Disabling this will automatically send the user a verification email</p>
                        <input className="check" type="checkbox" name ="isVerified" value ="true" checked/>
                   </div>
                    <div className="bot__item">
                        <h6>Discounted Prices</h6>
                        <p>This will give the user discounted prices for all products</p>
                        <input className="check" type="checkbox" name ="isVerified" value ="false"/>
                    </div>
                    <div className="bot__input">
                        <a href="a">Update Customer</a>
                    </div>
              </div>
          </div>
         </div>
        </div>
    )
}

export default CustomersEdit
