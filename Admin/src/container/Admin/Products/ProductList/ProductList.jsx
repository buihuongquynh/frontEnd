import React from 'react'
import './ProductList.scss';
import HeaderCustomer from '../../../../components/HeaderCustomer/HeaderCustomer';
function ProductList() {
    return (
        <div className = "ProductList">
            <div className="list__center">
                <HeaderCustomer title = "Miron Vitold" icon ={'fas fa-plus'} text ="New Product"/>
                <div className="import">
                    <div className="im">
                        <span><i className="fas fa-upload"></i></span>
                        <p>Import</p>
                    </div>
                    <div className="ex">
                        <span><i className="fas fa-download"></i></span>
                        <p>Export</p>
                    </div>
                </div>
                <div className="list__table">
                    <div className="table__center">
                        <div className="table__input">
                            <div className="input__top">
                                <div className="SearchCustomer">
                                    <div className="search__center">
                                    <div className="search__top">
                                    <div className="input">
                                    <span><i class="fas fa-search"></i></span>
                                    <input className="in" placeholder="Search customers" type="text"/>
                                </div>
                                <div className="combobox">
                                    <form>
                                        <select className="se" name="cars" id="cars">
                                            <option value="updatedAt|desc">Last update (newest first)</option>
                                            <option value="updatedAt|asc">Last update (oldest first)</option>
                                            <option value="createdAt|desc">Creation date (newest first)</option>
                                            <option value="createdAt|asc">Creation date (oldest first)</option>
                                        </select>
                                    </form>
                                </div>
                                </div>
                                </div>
                                </div>
                            </div>
                            <div className="input__bot">
                                <div className="bot__chil">
                                <div className="combobox">
                                    <form>
                                        <select className="se" name="cars" id="cars">
                                            <option value="All">All</option>
                                            <option value="Dress">Dress</option>
                                            <option value="Jewelry">Jewelry</option>
                                            <option value="Blouse">Blouse</option>
                                            <option value="Beauty">Beauty</option>
                                        </select>
                                    </form>
                                </div>
                                <div className="combobox">
                                    <form>
                                        <select className="se" name="cars" id="cars">
                                            <option value="All">All</option>
                                            <option value="Available">Available</option>
                                            <option value="Unavailable">Unavailable</option>
                                        </select>
                                    </form>
                                </div>
                                </div>
                                <div className="bot__chil text">
                                    <div className="check_left">
                                        <input className="check" type="checkbox"/>
                                        <span>In Stock</span>
                                    </div>
                                    <div className="check__right">
                                        <input className="check" type="checkbox"/>
                                        <span>Shippable</span>
                                    </div>
                                
                                </div>

                               
                            </div>
                        </div>
                        <div className="table">
                            <table>
                                <tr>
                                    <th className="check"><input  type="checkbox"/></th>
                                    <th className = "name"><span >Name</span></th>
                                    <th className = "name"><span >Inventory</span></th>
                                    <th className = "Details"><span >Details</span></th>
                                    <th className = "Attributes"><span >Attributes</span></th>
                                    <th className = "Price"><span >Price</span></th>
                                    <th className = "Actions"><span >Actions</span></th>
                                </tr>
                                <tr>
                                    <td className="check"><input className="check" type="checkbox"/></td>
                                    <td className= "name"><span className="img"><img src="https://material-kit-pro-react.devias.io/static/mock-images/products/product_4.jpeg" alt="a"/></span>
                                        <span>Charlie Tulip Dress</span>
                                    </td>
                                    <td className="status"><span className="box">IN STOCK</span></td>
                                    <td className ="stock"><span>85 in stock in 2 variants</span></td>
                                    <td className="cotton"><span>Cotton</span></td>
                                    <td className="dola"><span>$23.99</span></td>
                                    <td>
                                    <span className="icon"><i class="fas fa-edit"></i></span>
                                    <span><i class="fas fa-arrow-right"></i></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="check"><input className="check" type="checkbox"/></td>
                                    <td className= "name"><span className="img"><img src="https://material-kit-pro-react.devias.io/static/mock-images/products/product_4.jpeg" alt="a"/></span>
                                        <span>Charlie Tulip Dress</span>
                                    </td>
                                    <td className="status"><span className="box">IN STOCK</span></td>
                                    <td className ="stock"><span>85 in stock in 2 variants</span></td>
                                    <td className="cotton"><span>Cotton</span></td>
                                    <td className="dola"><span>$23.99</span></td>
                                    <td>
                                    <span className="icon"><i class="fas fa-edit"></i></span>
                                    <span><i class="fas fa-arrow-right"></i></span>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList
