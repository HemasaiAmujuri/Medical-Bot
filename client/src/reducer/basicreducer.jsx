import { SUBMIT_BASIC_FORM } from '../actions/actions'
import { SUBMIT_LIFESTYLE_FORM } from '../actions/actions'
import { SUBMIT_MEDICALHISTORY_FORM } from '../actions/actions'

const basicFormState =  {
    name: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "",
    password: "",
    confirmPassword: "",
    address: "",
    submittedBasicform: [] 
}

const lifeStyleFormState = {
     smoke : "",
     alcohol : "",
     sleep : "",
     diet : "",
     wellness : "",
     submittedLifestyleForm: [],
}


const medicalhistoryFormState = {
    chronic : "",
    medications : "",
    allergies : "",
    surgeries : "",
    health : "",
    submittedMedicalhistoryForm: [],
}



const initialState = {
  basicForm : basicFormState, 
  lifestyleForm : lifeStyleFormState,  
  medicalHistoryForm : medicalhistoryFormState, 
}



const formReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SUBMIT_BASIC_FORM':
            return {
                ...state,
                basicForm: {
                    ...state.basicForm,
                    name: action.payload.name,
                    submittedBasicform: [...state.basicForm.submittedBasicform, action.payload],
                },
               
            };
        case 'SUBMIT_LIFESTYLE_FORM':
            return {
                ...state,
                lifestyleForm: {
                    ...state.lifestyleForm,
                    name: action.payload.name,
                    submittedLifestyleForm: [...state.lifestyleForm.submittedLifestyleForm, action.payload],
                },
            };
        case 'SUBMIT_MEDICALHISTORY_FORM':
            return {
                ...state,
                medicalHistoryForm: {
                    ...state.medicalHistoryForm,
                    name: action.payload.name,
                    submittedMedicalhistoryForm: [...state.medicalHistoryForm.submittedMedicalhistoryForm, action.payload],
                },
            };
        default:
            return state;
    }
};


export default formReducer;