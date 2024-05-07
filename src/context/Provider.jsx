import { useState } from "react";
import { Context } from "./Context";

const Provider = ({ children }) => {
 const [data, setData] = useState(null);

 const values = {
  data,
  setData
 }

 return (
    <Context.Provider value={ values }>
      {children}
    </Context.Provider>
 );
};

export default Provider;