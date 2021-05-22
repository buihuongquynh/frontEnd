import React from 'react';
import './ItemUser.scss';

function ItemUser({img,Name,location,Orders,Spent,gmail}) {
    return (
        <div className ="itemUser">
            <div className="user__center">
                <input className="check" type="checkbox"/>
                <div className="name">
                    <div className="img">
                        <img src={img} alt="a"/>
                    </div>
                    <div className="com">
                        <span className = "ten">{Name}</span>
                        <span className="mail">{gmail}</span>
                    </div>
                </div>
                <span className ="location">{location}</span>
                <span className ="order">{Orders}</span>
                <span className="spent">{Spent}</span>
                <span className="action">
                    <span><i class="fas fa-edit"></i></span>
                    <span><i class="fas fa-arrow-right"></i></span>
                </span>
            </div>
        </div>
    );
}

export default ItemUser;