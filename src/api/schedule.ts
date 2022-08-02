import * as Modules from "../common/modules";
import axios from "axios";

const schedule_datelist = async (dt: string | null) => {

  return axios.post(`${Modules.constant.apiScheduleDateURL}`, dt);
}
export { schedule_datelist }