const iState={
    name:'chand',
    age:23
}

const reducer=(state = iState, action)=>{
    if(action.type==='HandleChange'){
        return{
        	...state,
            name:action.payload
        }
    }
    return state
}

export default reducer