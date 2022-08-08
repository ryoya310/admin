import * as Modules from "../common/modules";
import axios from "axios";

const schedule_datelist = async (dt: string | null) => {

  return axios.post(`${Modules.constant.apiRoot}app/datelist.php`, dt);
}
export { schedule_datelist }