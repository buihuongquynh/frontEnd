import React, { useEffect, useState } from 'react'
import './CustomersList.scss'
import { Tab, Content } from "../../../../components/Tab/Tab";
import HeaderCustomer from '../../../../components/HeaderCustomer/HeaderCustomer';
import SearchCustomer from '../../../../components/SearchCustomer/SearchCustomer';
import ItemUser from '../../../../components/ItemUser/ItemUser';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
function CustomersList() {
  const [active, setActive] = useState(0);
  const [orderPage, setOrderPage] = useState(1);
  const [dataUpdate, setDataUpdate] = useState(null);
  const [data, setData] = useState(null);
  const [activeBtn, setActiveBtn] = useState({
    left: false,
    right: true
  })
  const [listImg, setListImg] = useState([
    'https://material-kit-pro-react.devias.io/static/mock-images/avatars/avatar-carson_darrin.png',
    'https://material-kit-pro-react.devias.io/static/mock-images/avatars/avatar-fran_perez.png',
    'https://material-kit-pro-react.devias.io/static/mock-images/avatars/avatar-jie_yan_song.png',
    'https://material-kit-pro-react.devias.io/static/mock-images/avatars/avatar-jane_rotanson.png',
    'https://material-kit-pro-react.devias.io/static/mock-images/avatars/avatar-miron_vitold.png',
    'https://material-kit-pro-react.devias.io/static/mock-images/avatars/avatar-penjani_inyene.png',
    'https://material-kit-pro-react.devias.io/static/mock-images/avatars/avatar-omar_darobe.png',
    'https://material-kit-pro-react.devias.io/static/mock-images/avatars/avatar-siegbert_gottfried.png',
    'https://material-kit-pro-react.devias.io/static/mock-images/avatars/avatar-iulia_albu.png',
    'https://material-kit-pro-react.devias.io/static/mock-images/avatars/avatar-nasimiyu_danai.png',
    'https://material-kit-pro-react.devias.io/static/mock-images/avatars/avatar-miron_vitold.png',
    'https://material-kit-pro-react.devias.io/static/mock-images/avatars/avatar-penjani_inyene.png',
    'https://material-kit-pro-react.devias.io/static/mock-images/avatars/avatar-omar_darobe.png',
    'https://material-kit-pro-react.devias.io/static/mock-images/avatars/avatar-siegbert_gottfried.png',
    'https://material-kit-pro-react.devias.io/static/mock-images/avatars/avatar-iulia_albu.png',
    'https://material-kit-pro-react.devias.io/static/mock-images/avatars/avatar-nasimiyu_danai.png'])

  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
  const handlerPagination = (od, data) => {

    setOrderPage(od);
    const orderPage = od || 1;
    const newData = [...data];
    const begin = (orderPage - 1) * 5;
    const end = orderPage * 5;
    const newDataUpdate = newData.slice(begin, end);
    return newDataUpdate;
  }
  const handlerPage = (num) => {
    if (num < 1) {
      setActiveBtn({ ...activeBtn, left: false, right: true })
      return;
    }
    else if (((num * 5) - data?.length > 5)) {
      setActiveBtn({ ...activeBtn, left: true, right: false })
      return;
    };
    setActiveBtn({ ...activeBtn, left: true, right: true })
    setDataUpdate(handlerPagination(num, data))
  }
  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      const res = await axios.get('https://5ee88e35ffee0c0016a12f4d.mockapi.io/api/v1/employees/users');
      setData(res.data);
      setDataUpdate(res.data);
      setDataUpdate(handlerPagination(orderPage, res.data));
    }
    if (mounted) {
      fetchData();
    }

    return () => mounted = false;
  }, [])

  return (
    <div className="custom__List">
      <div>
        <HeaderCustomer title="Customer List" icon={'fas fa-plus'} text="Add Customer" />
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
        <div className="tab__Content">
          <div className="tabs">
            <Tab onClick={handleClick} active={active === 0} id={0}>All</Tab>
            <Tab onClick={handleClick} active={active === 1} id={1}>Accepts Marketing</Tab>
            <Tab onClick={handleClick} active={active === 2} id={2}>Prospect</Tab>
            <Tab onClick={handleClick} active={active === 3} id={3}>Returning</Tab>
          </div>
          <>
            <Content active={active === 0}>
              <SearchCustomer />
              <table>
                <tr>
                  <th className="check" style={{ opacity: 0 }}><input type="checkbox" /></th>
                  <th className="name"><span >Name</span></th>
                  <th className="location"><span >Location</span></th>
                  <th className="Details"><span >Orders</span></th>
                  <th className="Attributes"><span >Spent</span></th>
                  <th className="Price"><span >Actions</span></th>
                </tr>

                {dataUpdate?.map((item, index) => <tr key={item.id}>
                  <td className="check"><input type="checkbox" /></td>
                  <td className="name">
                    <span className="img"><img src={listImg[index] || listImg[0]} alt="a" /></span>
                    <div className="text__img">
                      <span>{item.name}</span>
                      <p>{item.email}</p>
                    </div>

                  </td>
                  <td className="status"><span className="box">IN STOCK</span></td>
                  <td className="stock"><span>85 in stock in 2 variants</span></td>
                  <td className="cotton"><span>Cotton</span></td>
                  <td>
                    <span className="icon"><i class="fas fa-edit"></i></span>
                    <span><i class="fas fa-arrow-right"></i></span>
                  </td>
                </tr>)}


                <tr className="pagination-btn">
                  <span className={activeBtn.left?'arr-l':'arr-l no-active'} onClick={() => handlerPage(orderPage - 1)} ><i class="fas fa-chevron-left"></i></span>
                  <span  className={activeBtn.right?'arr-r':'arr-r no-active'} onClick={() => handlerPage(orderPage + 1)}><i class="fas fa-chevron-right"></i></span>

                  {/* <div className={orderPage===1&&'active'} onClick={()=>handlerPage(1)}>1</div>
                  <div className={orderPage===2&&'active'} onClick={()=>handlerPage(2)}>2</div>
                  <div className={orderPage===3&&'active'} onClick={()=>handlerPage(3)}>3</div>
                  <div className={orderPage===4&&'active'} onClick={()=>handlerPage(4)}>4</div>
                  <div className={orderPage===5&&'active'} onClick={()=>handlerPage(5)}>5</div>
  */}

                </tr>

              </table>

            </Content>
            <Content active={active === 1}>
              <SearchCustomer />
              <table>
                <tr>
                  <th className="check"><input type="checkbox" /></th>
                  <th className="name"><span >Name</span></th>
                  <th className="location"><span >Location</span></th>
                  <th className="Details"><span >Orders</span></th>
                  <th className="Attributes"><span >Spent</span></th>
                  <th className="Price"><span >Actions</span></th>
                </tr>
                <tr>
                  <td className="check"><input type="checkbox" /></td>
                  <td className="name">
                    <span className="img"><img src="https://material-kit-pro-react.devias.io/static/mock-images/products/product_4.jpeg" alt="a" /></span>
                    <div className="text__img">
                      <span>Fran Perez</span>
                      <p>fran.perez@devias.io</p>
                    </div>

                  </td>
                  <td className="status"><span className="box">IN STOCK</span></td>
                  <td className="stock"><span>85 in stock in 2 variants</span></td>
                  <td className="cotton"><span>Cotton</span></td>
                  <td>
                    <span className="icon"><i class="fas fa-edit"></i></span>
                    <span><i class="fas fa-arrow-right"></i></span>
                  </td>
                </tr>
              </table>
            </Content>
            <Content active={active === 2}>
              <SearchCustomer />
              <table>
                <tr>
                  <th className="check"><input type="checkbox" /></th>
                  <th className="name"><span >Name</span></th>
                  <th className="location"><span >Location</span></th>
                  <th className="Details"><span >Orders</span></th>
                  <th className="Attributes"><span >Spent</span></th>
                  <th className="Price"><span >Actions</span></th>
                </tr>
                <tr>
                  <td className="check"><input type="checkbox" /></td>
                  <td className="name">
                    <span className="img"><img src="https://material-kit-pro-react.devias.io/static/mock-images/products/product_4.jpeg" alt="a" /></span>
                    <div className="text__img">
                      <span>Fran Perezx</span>
                      <p>fran.perez@devias.io</p>
                    </div>

                  </td>
                  <td className="status"><span className="box">IN STOCK</span></td>
                  <td className="stock"><span>85 in stock in 2 variants</span></td>
                  <td className="cotton"><span>Cotton</span></td>
                  <td>
                    <span className="icon"><i class="fas fa-edit"></i></span>
                    <span><i class="fas fa-arrow-right"></i></span>
                  </td>
                </tr>
              </table>
            </Content>
            <Content active={active === 3}>
              <SearchCustomer />
              <table>
                <tr>
                  <th className="check"><input type="checkbox" /></th>
                  <th className="name"><span >Name</span></th>
                  <th className="location"><span >Location</span></th>
                  <th className="Details"><span >Orders</span></th>
                  <th className="Attributes"><span >Spent</span></th>
                  <th className="Price"><span >Actions</span></th>
                </tr>
                <tr>
                  <td className="check"><input type="checkbox" /></td>
                  <td className="name">
                    <span className="img"><img src="https://material-kit-pro-react.devias.io/static/mock-images/products/product_4.jpeg" alt="a" /></span>
                    <div className="text__img">
                      <span>Fran Perezx</span>
                      <p>fran.perez@devias.io</p>
                    </div>

                  </td>
                  <td className="status"><span className="box">IN STOCK</span></td>
                  <td className="stock"><span>85 in stock in 2 variants</span></td>
                  <td className="cotton"><span>Cotton</span></td>
                  <td>
                    <span className="icon"><i class="fas fa-edit"></i></span>
                    <span><i class="fas fa-arrow-right"></i></span>
                  </td>
                </tr>
              </table>
            </Content>
          </>
        </div>
      </div>
    </div>
  )
}

export default CustomersList
