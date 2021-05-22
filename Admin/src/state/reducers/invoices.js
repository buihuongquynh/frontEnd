import { Actions } from "../actions";

const initialState = {
  data: null,
  updatedData:null,
  orderPage:1
};

const getDataInvoicesSuccess = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_INVOICES_SUCCESS: {
      console.log(action.payload,'action pload');
      const data = action.payload;
      const begin = 0;
      const end =  4;
      const newDataUpdate = data.slice(begin, end);
      return {
        ...state,
        data: data,
        updatedData:newDataUpdate
      };
    }
    case Actions.GET_ORDER_PAGINATION:{
      const  orderPage  = action.payload;
      console.log(orderPage,'orderPage');
      const od = orderPage || 1;
      const newData = [...state.data];
      const begin = (od - 1) * 4;
      const end = od * 4;
      const newDataUpdate = newData.slice(begin, end);
      return {
        ...state,
        updatedData:newDataUpdate,
        orderPage:od
      };

    }
    default:
      return state;
  }
};

export default getDataInvoicesSuccess;
