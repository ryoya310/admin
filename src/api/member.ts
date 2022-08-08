import * as Modules from "../common/modules";
import axios from "axios";

const login = async (datas: any) => {
  return axios.post(`${Modules.constant.apiRoot}app/login.php`, datas);
}
export { login }