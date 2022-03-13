import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../down/Down.css'
import Shoes from './shoes/Shoes'
//import { active, deactive } from '../../../actions'
//import { backactive, backdeactive } from '../../../backactive'

export default function Down(){

    //const [leftMove, setLeftMove] = useState(0)
    const downRef = useRef()
    //const dispatch = useDispatch();
    const state = useSelector(state => state)
    
    useEffect(() => {
        const element = downRef.current;
        if(state.scrollBarForward.num !== 0 && state.scrollBarForward.direction === 'forward'){
            let px = element.scrollLeft
                  px += 330
            
            element.scrollTo(px, 0)
        }
        if(state.scrollBarBack.num !== 0 && state.scrollBarBack.direction === 'back'){
            let px = element.scrollLeft
                  px -= 330
            
            element.scrollTo(px, 0)
        }
    }, [state.scrollBarForward, state.scrollBarBack])


  
   

    return(
        <div ref={downRef} className="down_container">
            <Shoes />
            <Shoes />
            <Shoes />
            <Shoes />
            <Shoes />
            <Shoes />
            <Shoes />
            <Shoes />
        </div>
    )
}