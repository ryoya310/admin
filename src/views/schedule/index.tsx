import * as Modules from "../../common/modules";
import "./index.min.css";
import { useState, useEffect } from "react";
import axios from "axios";

import Weekly from "../../components/atoms/weekly";

const Schedule = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.post(`${Modules.constant.apiScheduleDateURL}`)
      .then(res => {
          console.log(res.data)
          setPosts(res.data)
      })
  }, []);

  return (
    <Modules.RequireAuth>
      <div
        className="Schedule views-wrapper"
      >
        <h2>Schedule</h2>
        <Weekly
          className="weekly"
          posts={posts}
        />
      </div>
    </Modules.RequireAuth>
  );
}
export default Schedule