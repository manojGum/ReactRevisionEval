// write reducer for the registartion reducer
const registerReducer = (state,action)=>{
    switch (action.type){
        case "Handele Input":
            return {
                ...state,
                [action.field]:action.payload,
            };
            default:
                return state;
    }
  }
  
  export default registerReducer