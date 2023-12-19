import { useContext } from "react";
import LocalContext from "../Context/contextProvider";

const useLocalContext = () => {
   return useContext(LocalContext)
}

export default useLocalContext;