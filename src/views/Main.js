

import { FormMui } from "./FormMui/FormMui"
import { NavBar } from "./Menu/Menu"

export const Main=()=>{
    return( <>
           
            <NavBar />
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <FormMui />
            </div>
      
         </> 
         )
}