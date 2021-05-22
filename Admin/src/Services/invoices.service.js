import { axiosClient } from "./config.service";

class Invoices {
    static listUser() {
        let url = "/invoices";
        return axiosClient.get(url);
      }
    static addUser(obj) {
        let url = "/invoices";
        return axiosClient.post(url,obj);
      }
      static deleteInvoices(id) {
        let url = `/invoices/${id}`;
        return axiosClient.delete(url);
      }
      static editUser(obj) {
        let url = `/invoices/${obj.id}`;
        return axiosClient.put(url, { ...obj });
      }
}
export default Invoices;