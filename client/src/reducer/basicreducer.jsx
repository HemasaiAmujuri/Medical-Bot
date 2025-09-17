import SUBMIT_FORM_DATA from '../actions/actions'


const initialState =  {
    name : "",
    email : "",
    mobile : "",
    dob : "",
    address : ""
}


const formReducer = (state = initialState, action ) => {
      switch(action.type){
      case  SUBMIT_FORM_DATA:
        return{
            ...state,
            submittedData: [...state.submittedData, action.payload],
        }
        default: 
          return state
}
}


export default formReducer;