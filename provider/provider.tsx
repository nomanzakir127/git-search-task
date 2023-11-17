"use client";
import { Provider } from "react-redux";
import { store } from "../store/Store";


const Providers:  React.FC<any> = ({ children }) =>{
  return <Provider store={store}>{children}</Provider>;
}

export default Providers;