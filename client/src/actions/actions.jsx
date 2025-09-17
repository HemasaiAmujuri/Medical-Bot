export const SUBMIT_FORM_DATA = 'SUBMIT_FORM_DATA';


const submitForm = (data) => ({
    type : 'SUBMIT_FORM_DATA',
    payload : data
});



export default submitForm;