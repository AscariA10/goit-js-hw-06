const formRef = document.querySelector('.login-form');
const emailInputRef = document.querySelector('[name=email]');
const passwordInputRef = document.querySelector('[name=password]');

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('submit', resetFields);

function onFormSubmit(event) {
   if (!emailInputRef.value || !passwordInputRef.value) {
      alert('Your form is not approved, please complete fields properly');
   } else {
      event.preventDefault();
      const emailUserValue = event.currentTarget.elements.email.value;
      const emailUserPassword = event.currentTarget.elements.password.value;
      const dataObject = { emailUserValue, emailUserPassword };
      console.log(dataObject);
   }
}

function resetFields() {
   emailInputRef.value = '';
   passwordInputRef.value = '';
}

// ------Using of dataForm------

// function onFormSubmit(event) {
//    if (!emailInputRef.value && !passwordInputRef.value) {
//       alert('Your form is not approved, please complete fields properly');
//    } else {
//       event.preventDefault();
//       const formData = new FormData(event.currentTarget);
//       formData.forEach((value, name) => {
//          dataObject[name] = `${value}`;
//          const newObject = { ...dataObject };
//          console.log(newObject);
//       });
//    }
// }
