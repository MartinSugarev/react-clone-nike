import { combineReducers } from 'redux'

const isActive = (state = false, action ) => {
   switch(action.type){
       case 'ACTIVE':
           return state = true;
       case 'DEACTIVE':
           return state  = false; 
        default:
            return state = false;
   }
}

const backisActive = (state = false, action ) => {
    switch(action.type){
        case 'BACKACTIVE':
            return  state= true 
        case 'BACKDEACTIVE':
            return state= false  
         default:
             return state = false 
    }
 }

 const scrollBarForward = ( state = {
    num: 0,
    direction: 'forward'
}, action ) => {
   switch(action.type){
       case "FORWARD":
           return {
               ...state,
               num: state.num + 1
           }
       default:
           return {
               ...state,
               num: 0
           }  
   }
}

const scrollBarBack = ( state = {
    num: 0,
    direction: 'back'
}, action ) => {
   switch(action.type){
       case "BACK":
           return {
               ...state,
               num: state.num - 1
           }
       default:
           return {
               ...state,
               num: 0
           }  
   }
}


 const allReducers = combineReducers({
     isActive,
     backisActive,
     scrollBarForward,
     scrollBarBack
 })

export default allReducers

