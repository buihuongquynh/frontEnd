import React from 'react'
import './Invoicer.scss';
function CallApi({date,Description,Payment ,Total,Status}) {
    return (
        <div className="invoi">
           <div className="call__center">
               <div className="item__call2"><span>{date}</span></div>
               <div className="item__call3">{Description}</div>
               <div className="item__call4">{Payment }</div>
               <div className="item__call5">{Total}</div>
               <div className="item__call6">{Status}</div>
               <div className="item__call7"><span><i class="fas fa-arrow-right"></i></span></div>
           </div>
        </div>
    )
}

export default CallApi
