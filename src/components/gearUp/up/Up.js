import '../up/Up.css'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useSelector, useDispatch } from 'react-redux'


export default function Up(){


const dispatch = useDispatch();
const a = useSelector(state => state);

return(
    <div className="up_container">
       <h2>Gear Up</h2> 
        <div className="up_arrows">
              <IoIosArrowBack onClick={() => dispatch({type: 'BACK'})} className={a.backisActive ? "backArrow active" : "backArrow"} />
              <IoIosArrowForward onClick={() => dispatch({type: 'FORWARD'})} className={a.isActive ? "forwardArrow active" : "forwardArrow"}/>
        </div>
    </div>
)

}