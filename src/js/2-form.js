const lcStorageKey = "feedback-form-state";
const feedbackForm = document.querySelector('.feedback-form')
const formData = {
    email: "",
    message: "",
}


  
function saveToLS(key,value) {
  const zip = JSON.stringify(value);
  localStorage.setItem(key,zip)
}

function loadFromLS(key) {
  const zip = localStorage.getItem(key);
  try {
    const values = JSON.parse(zip);
    return values
  } catch {
    return zip;
  }
}

feedbackForm.addEventListener(`submit`, (e) => {
  e.preventDefault();
  formData.email = e.target.elements.email.value;
  formData.message = e.target.elements.message.value;
  
  if (formData.email !== "" && formData.message !== "") {
    console.log(formData);
    localStorage.removeItem(lcStorageKey);
    feedbackForm.reset();
  } else {
    alert(`Fill please all field`)
  }
})

feedbackForm.addEventListener('input', e => {
  formData.email = e.currentTarget.elements.email.value;
  formData.message = e.currentTarget.elements.message.value;
  saveToLS(lcStorageKey, formData) 
})


document.addEventListener('DOMContentLoaded', () => {
  const data = loadFromLS(lcStorageKey);

  feedbackForm.elements.email.value = data?.email || "";
  feedbackForm.elements.message.value = data?.message || "";
})