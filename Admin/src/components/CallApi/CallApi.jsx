import React from 'react'
import './CallApi.scss';
function CallApi({method,number,link,status,id}) {
    return (
        <div className="call">
           <div className="call__center">
               <div className="item__call1">{method}</div>
               <div className="item__call2"><span>{number}</span></div>
               <div className="item__call3">{link}</div>
               <div className="item__call4">{status}</div>
               <div className="item__call5">{id}</div>
           </div>
        </div>
    )
}

export default CallApi
