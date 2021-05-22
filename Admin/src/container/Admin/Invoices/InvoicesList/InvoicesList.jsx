import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './InvoicesList.scss';
import ListInvoices from '../../../../components/ListInvoices/ListInvoices';
import HeaderCustomer from '../../../../components/HeaderCustomer/HeaderCustomer';
import SearchCustomer from '../../../../components/SearchCustomer/SearchCustomer';
import { getDataInvoicesSuccess, editInvoices, addDataInvoices, getInvoicesPaginate, getDataInvoices } from '../../../../state/actions';
import { Modal, Button } from 'antd';

function InvoicesList() {
  const items = useSelector(state => state.dataInvoices.updatedData);
  const orderPage = useSelector(state => state.dataInvoices.orderPage);
  // const items = useSelector(state => state.dataInvoices.updatedData);
  const dispatch = useDispatch();
  const [activeBtn, setActiveBtn] = useState({
    left: false,
    right: true
  })
  const [item, setItem] = useState({
    id: '',
    Status: '',
    Amount: '',
    ID: '',
    Date: '',
    gmail: '',
  });
  const [item2, setItem2] = useState({

    Status: '',
    Amount: '',
    ID: '',
    Date: '',
    gmail: '',
  });

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);

  const handlerPage = (num) => {
    if (num < 1) {
      setActiveBtn({ ...activeBtn, left: false, right: true })
      return;
    }
    else if (((num * 4) - items?.length > 4)) {
      setActiveBtn({ ...activeBtn, left: true, right: false })
      return;
    };
    setActiveBtn({ ...activeBtn, left: true, right: true })
    // setDataUpdate(handlerPagination(num, data))
    dispatch(getInvoicesPaginate(num))
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [edit, setEdit] = useState(false);
  const handleEdit = key => {
    // setEdit(true);
    setIsModalVisible(true);
    const newList = [...items];
    const number = newList.findIndex(item => item.id == key);
    const newItem = newList[number];
    setItem({
      id: newItem.id,
      Status: newItem.Status,
      Amount: newItem.Amount,
      ID: newItem.ID,
      Date: newItem.Date,
      gmail: newItem.gmail
    });
  };
  const SaveHanldeEdit = () => {
    // setEdit(false);
    const List = [...items];
    const newList = List.map((itemm) => {
      if (itemm.id === item.id) {
        return { ...item };
      }
      return itemm;
    });
    dispatch(getDataInvoicesSuccess(newList));
    dispatch(editInvoices(item));
    setItem({
      id: "",
      name: "",
      age: ""
    });
    setIsModalVisible(false)
  }
  const saveHandlerAdd = () => {
    dispatch(addDataInvoices(item2))
    setItem2({
      Status: '',
      Amount: '',
      ID: '',
      Date: '',
      gmail: '',
    })
    setIsModalVisible2(false)
  }
  const showAdd = () => {
    setIsModalVisible2(true)
  }
  useEffect(() => {
    dispatch(getDataInvoices());
  
  }, [ ])
  return (
    <div className="invoices__list">
      <div className="custom__List">
        <Modal title="Add new invoice" visible={isModalVisible2} onOk={saveHandlerAdd} onCancel={() => setIsModalVisible2(false)} >
          <div className="list-add">
            <input
              type="text"
              placeholder="Status"
              value={item2.Status}
              onChange={(e) =>
                setItem2({
                  ...item2,
                  Status: e.target.value,

                })
              }
            />
            <input
              type="text"
              placeholder="Amount"
              value={item2.Amount}
              onChange={(e) =>
                setItem2({
                  ...item2,
                  Amount: e.target.value,
                })
              }
            />
            <input
              type="text"
              placeholder="StationCode"
              value={item2.ID}
              onChange={(e) =>
                setItem2({
                  ...item2,
                  ID: e.target.value,

                })
              }
            />
            <input
              type="text"
              placeholder="Date"
              value={item2.Date}
              onChange={(e) =>
                setItem2({
                  ...item2,
                  Date: e.target.value,
                })
              }
            />
            <input
              type="text"
              placeholder="Gmail"
              value={item2.gmail}
              onChange={(e) =>
                setItem2({
                  ...item2,
                  gmail: e.target.value
                })
              }
            />
            {/* <span className ="button_edit" onClick={SaveHanldeEdit}>
                Save Edit
              </span> */}
          </div>

        </Modal>
        <Modal title="Edit invoice" visible={isModalVisible} onOk={SaveHanldeEdit} onCancel={handleCancel}>
          <div className="list-add">
            <input
              type="text"
              value={item.Status}
              onChange={(e) =>
                setItem({
                  id: item.id,
                  Status: e.target.value,
                  Amount: item.Amount,
                  ID: item.ID,
                  Date: item.Date,
                  gmail: item.gmail
                })
              }
            />
            <input
              type="text"
              value={item.Amount}
              onChange={(e) =>
                setItem({
                  id: item.id,
                  Status: item.Status,
                  Amount: e.target.value,
                  ID: item.ID,
                  Date: item.Date,
                  gmail: item.gmail
                })
              }
            />
            <input
              type="text"
              value={item.ID}
              onChange={(e) =>
                setItem({
                  id: item.id,
                  Status: item.Status,
                  Amount: item.Amount,
                  ID: e.target.value,
                  Date: item.Date,
                  gmail: item.gmail
                })
              }
            />
            <input
              type="text"
              value={item.Date}
              onChange={(e) =>
                setItem({
                  id: item.id,
                  Status: item.Status,
                  Amount: item.Amount,
                  ID: item.ID,
                  Date: e.target.value,
                  gmail: item.gmail
                })
              }
            />
            <input
              type="text"
              value={item.gmail}
              onChange={(e) =>
                setItem({
                  id: item.id,
                  Status: item.Status,
                  Amount: item.Amount,
                  ID: item.ID,
                  Date: item.Date,
                  gmail: e.target.value
                })
              }
            />
            {/* <span className ="button_edit" onClick={SaveHanldeEdit}>
                Save Edit
              </span> */}
          </div>
        </Modal>
        <HeaderCustomer
          title="Invoice List"
          icon={'fas fa-plus'}
          text="New Invoice"
          clickShow={showAdd}
        />
        <div className="import">
          <div className="im">
            <span>
              <i className="fas fa-upload"></i>
            </span>
            <p>Import</p>
          </div>
          <div className="ex">
            <span>
              <i className="fas fa-download"></i>
            </span>
            <p>Export</p>
          </div>
        </div>
        <div className="list__item">
          <SearchCustomer />
          {/* {edit ? (
         
          ) : null} */}
          <table>
            <tr>
              <th className="name">
                <span>Customer</span>
              </th>
              <th className="location">
                <span>Status</span>
              </th>
              <th className="Details">
                <span>Amount</span>
              </th>
              <th className="Attributes">
                <span>StationCode</span>
              </th>
              <th className="Attributes">
                <span>Date</span>
              </th>
              <th className="Price">
                <span>Actions</span>
              </th>
            </tr>
            <ListInvoices handleEdit={handleEdit} />
            <tr className="pagination-btn">
              <span className={activeBtn.left ? 'arr-l' : 'arr-l no-active'} onClick={() => handlerPage(orderPage - 1)} ><i class="fas fa-chevron-left"></i></span>
              <span className={activeBtn.right ? 'arr-r' : 'arr-r no-active'} onClick={() => handlerPage(orderPage + 1)}><i class="fas fa-chevron-right"></i></span>
            
              {/* <span className={'arr-l'}  ><i class="fas fa-chevron-left"></i></span>
              <span className={'arr-r'}  ><i class="fas fa-chevron-right"></i></span> */}



            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default InvoicesList;
