import { combineReducers } from 'redux';
import loginReducer from './login';
import JobReducer from './jobs';
import userReducer from './user';
import dataUsersReducer from './dataUser';
import dataRecruitment from './recruitment';
import dataUserRec from './dataUserRec';
import dataInvoices from './invoices';
// Combine reducer 

const rootReducer = combineReducers({
  loginUser : loginReducer,
  jobs : JobReducer,
  infoUser:userReducer,
  listUser:dataUsersReducer,
  listRecruitment:dataRecruitment,
  listUserSeedRec:dataUserRec,
  dataInvoices:dataInvoices
});
 
export default rootReducer;