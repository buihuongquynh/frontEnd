import React from 'react'
import './ProductCreate.scss'
import HeaderCustomer from '../../../../components/HeaderCustomer/HeaderCustomer';
function ProductCreate() {
  return (
    <div className="ProductCreate">
      <div className="Create__center">
        <HeaderCustomer title="Create a new product" icon={'fas fa-arrow-left'} text="Cancel" />
        <div className="create__input">
          <div className="create__left">
            <div className="input__top">
              <div className="input">
                <input className="in" placeholder="Product Name" type="text" />
              </div>
              <div className="messenger">
                <p className="decrip">Description</p>
                <div className="qill">
                  <div className="ql__toolbar">
                  </div>
                  <div className="container_snow">
                    <div className="edit ql__snow" data-gramm="false" contenteditable="true" data-placeholder="Write something">

                    </div>
                  </div>

                </div>

              </div>
            </div>
            <div className="input__center">
              <div className="import__file">
                <div className="import__item">
                  <div className="file__img">
                    <img src="https://material-kit-pro-react.devias.io/static/undraw_add_file2_gvbb.svg" alt="" />
                  </div>
                  <div className="file__text">
                    <h6>Select files</h6>
                    <div className="text__smaill">
                      <p>Drop filess <span>browse</span>thorough your machine</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="input__bot">
              <div className="input__center">
                <h6>Prices</h6>
                <div className="bot__row">
                  <div className="bot__chil">
                    <div className="number">
                      <input placeholder="Price" type="number" />
                    </div>
                    <div className="check">
                      <div className="check__chil">
                        <input className="checkbox" type="checkbox" />
                        <span>Product is taxable</span>
                      </div>
                      <div className="check__chil">
                        <input className="checkbox" type="checkbox" />
                        <span>Price includes taxes</span>
                      </div>
                    </div>
                  </div>
                  <div className="bot__chil">
                    <div className="number">
                      <input placeholder="Sale Price" type="number" />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="create__right">
            <div className="input__bot">
              <div className="input__center">
                <h6>Organize</h6>
                <div className="right">
                  <div className="combobox">
                    <form>
                      <select className="se" name="cars" id="cars">
                        <option value="updatedAt|asc">Shirts</option>
                        <option value="orders|desc">Phones</option>
                        <option value="orders|asc">Cars</option>
                      </select>
                    </form>
                  </div>
                  <div className="number">
                    <input placeholder="Product Code" type="text" />
                  </div>
                  <div className="number">
                    <input placeholder="Product Sku" type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCreate
