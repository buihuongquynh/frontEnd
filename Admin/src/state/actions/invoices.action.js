import actions from './action.type';
export const getDataInvoices = () => {
    return {
      type: actions.GET_INVOICES,
    };
  };
  
export const addDataInvoices = (payload) => {
    return {
      type: actions.ADD_INVOICES,
      payload
    };
  };
  
export const getDataInvoicesSuccess = (payload) => {
    return {
      type: actions.GET_INVOICES_SUCCESS,
      payload,
    };
  };

  export const deleteInvoices = (payload) => {
    return {
      type: actions.DELETE_INVOICES,
      payload,
    };
  };
  export const editInvoices = (payload) => {
    return {
      type: actions.EDIT_INVOICES,
      payload,
    };
  };
  
  export const getInvoicesPaginate = (payload) => {
    return {
      type: actions.GET_ORDER_PAGINATION,
      payload,
    };
  };
  