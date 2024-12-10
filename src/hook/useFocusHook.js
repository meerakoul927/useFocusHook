import React , { useEffect, useState } from "react";

export const useFocusHook = (props) =>{

     // define state that will will be updated while focusing the page
     const [focus , setFocus] = useState(document.hasFocus());

     useEffect(()=>{
        const onFocus = () => setFocus(true);
        const onBlur = () => setFocus(false);

         window.addEventListener('focus' , onFocus);
         window.addEventListener('blur' , onBlur);

         return () => {
             window.removeEventListener('focus',onFocus);
             window.removeEventListener('blur' , onBlur);
         }
     },[props?.button]);

     return focus;
}
