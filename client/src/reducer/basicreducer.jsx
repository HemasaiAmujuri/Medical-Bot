import SUBMIT_FORM_DATA from '../actions/actions'


const initialState =  {
    name : "",
    email : "",
    mobile : "",
    dob : "",
    address : "",
    submittedData: [] 
}


const formReducer = (state = initialState, action ) => {
  console.log(action.type)
      switch(action.type){
      case  SUBMIT_FORM_DATA:
        return{
            ...state,
            name: action.payload.name,
            submittedData: [...state.submittedData, action.payload],
        }
        default: 
          return state
}
}


export default formReducer;