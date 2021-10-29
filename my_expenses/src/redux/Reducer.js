var  initiaState ={
    count : 0
}

const counter = (state = initiaState, action)=>{
switch(action && action.type)
{
    case "INCEREASE_COUNTER":
    return{
        ...state,
        count:state.count+1
    }
    case "DECREASE_COUNTER":
        return{
            ...state,
            count:state.count-1
        }
    default:
    return state
}
}

export default counter