import { useState } from "react";
import useLocalStorage from "./useLocalStorage";



const useToggle = (key, initValue, persist=true) => {
    
    if(!persist){
        const [value, setValue] = useState(initValue);
        const toggle = (value) =>{
            setValue(prev => {
                return typeof value === 'boolean' ? value : !prev;
            })
        }
      return [value, toggle]
    }else{
        const [value, setValue] = useLocalStorage(key, initValue);
        const toggle = (value) =>{
            setValue(prev => {
                return typeof value === 'boolean' ? value : !prev;
            })
        }
      return [value, toggle]
    }
   

   
}

export default useToggle