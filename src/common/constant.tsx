import { useState, useEffect, createContext, useContext } from "react"
import axios from "axios";

const apiRoot = "http://192.168.10.41/";
// const apiRoot = "http://23.10.123.227/";
// const apiRoot = "http://ryoya.firstinc.jp/";

// フロント用Constants
const constant = {
    apiRoot,
}

// バック用Constants
const Constants = createContext({});

const ConstantsProvider = (props: any) => {

  const [info, setConstants] = useState({});

  useEffect(() => {

    axios
      .get(`${constant.apiRoot}app/constants.php`, {})
      .then((response) => {
        setConstants(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  return <>
    <Constants.Provider value={{info, setConstants}}>
      {props.children}
    </Constants.Provider>
  </>
}

export { constant, Constants, ConstantsProvider }