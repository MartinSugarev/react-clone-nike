import '../buttons/Buttons.css'
import { IoIosArrowForward } from 'react-icons/io'

export default function Button({name = "New Releases"}){

   return(
       <div className="navigation_buttons">
         <p>{name}</p>
         <IoIosArrowForward />
       </div>
   )

}