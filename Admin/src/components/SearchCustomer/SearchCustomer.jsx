import React from 'react';
import './SearchCustomer.scss';

function SearchCustomer() {
    return (
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
                                <option value="updatedAt|asc">Last update (oldest)</option>
                                <option value="orders|desc">Total orders (highest)</option>
                                <option value="orders|asc">Total orders (lowest)</option>
                            </select>
                        </form>
                    </div>
                </div>
                
                <div className="search__bot">
                    <div className="bot__center">
                        <input className="check" type="checkbox"/>
                        <span className = "name">Name</span>
                        <span className ="location">Location</span>
                        <span className ="order">Orders</span>
                        <span className="spent">Spent</span>
                        <span className="action">Actions</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchCustomer;