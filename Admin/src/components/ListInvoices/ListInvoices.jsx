import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataInvoices, getDataInvoicesSuccess, deleteInvoices } from '../../state/actions';
import './ListInvoices.scss';

const ListInvoices = ({handleEdit}) => {
  const items = useSelector(state => state.dataInvoices.updatedData);
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataInvoices());
  }, []);

  
  const  handerDelete = (id)=>{
    const newList = items.filter((x) =>{
      return x.id !== id;
    });
    dispatch(getDataInvoicesSuccess(newList));
    dispatch(deleteInvoices(id));

    console.log(id,'delete');
  }
  return (
    <Fragment>
      {items?.map((item, index) => (
        <Fragment>
          <tr>
            <td className="name">
              <span>{item.Customer}</span>
              <div className="mail">
                <span>{item.gmail}</span>
              </div>
            </td>
            <td className="status">
              <span className="box">{item.Status}</span>
            </td>

            <td className="cotton">
              <span>{item.Amount}</span>
            </td>
            <td className="cotton">
              <span>{item.ID}</span>
            </td>
            <td className="cotton">
              <span>{item.Date}</span>   
            </td>
            <td>
              <span className="icon btn-icon" onClick={()=>handleEdit(item.id)}>
                <i class="fas fa-edit"></i>
              </span>
              <span className ="icon btn-icon" onClick={()=>handerDelete(item.id)}>
                <i class="fas fa-trash-alt" ></i>
              </span>
            </td>
          </tr>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default ListInvoices;
