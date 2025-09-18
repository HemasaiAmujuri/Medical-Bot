export const SUBMIT_BASIC_FORM = 'SUBMIT_BASIC_FORM';
export const SUBMIT_LIFESTYLE_FORM = 'SUBMIT_LIFESTYLE_FORM'
export const SUBMIT_MEDICALHISTORY_FORM = 'SUBMIT_MEDICALHISTORY_FORM'


const basicForm = (data) => ({
    type : 'SUBMIT_BASIC_FORM',
    payload : data
});


const lifestyleForm = (data) => ({
    type : 'SUBMIT_LIFESTYLE_FORM',
    payload : data
});


const medicalHistoryForm = (data) => ({
    type : 'SUBMIT_MEDICALHISTORY_FORM',
    payload : data
});



export { basicForm, lifestyleForm, medicalHistoryForm };