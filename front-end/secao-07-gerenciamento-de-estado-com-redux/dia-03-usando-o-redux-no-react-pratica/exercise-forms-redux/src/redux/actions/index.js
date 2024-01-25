const PROFESSIONAL_FORM_SUBMIT = 'PROFESSIONAL_FORM_SUBMIT';
const PERSONAL_FORM_SUBMIT = 'PERSONAL_FORM_SUBMIT';

const submitPersonalForm = (personalProfile) => ({
  type: PERSONAL_FORM_SUBMIT,
  payload: personalProfile,
});

const submitProfessionalForm = (professionalProfile) => ({
  type: PROFESSIONAL_FORM_SUBMIT,
  payload: professionalProfile,
});

export {
  PROFESSIONAL_FORM_SUBMIT,
  PERSONAL_FORM_SUBMIT,
  submitPersonalForm,
  submitProfessionalForm,
};
