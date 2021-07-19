const fullName = document.getElementById('fullName')
const email = document.getElementById('email')
const phoneNumber = document.getElementById('phoneNumber')
// const formElement = document.getElementById('bookingForm')

const submitForm = () => {
    const nameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phoneNumber.value.trim();

    if(nameValue == '' || emailValue == '' || phoneValue == '') {
        alert('Please, fill in your details')
    } else {
        alert(`Full Name: ${nameValue}\nEmail: ${emailValue}\nPhone Number: ${phoneValue}`)
    }
}

// formElement.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const nameValue = fullName.value.trim();
//     const emailValue = email.value.trim();
//     const phoneValue = phoneNumber.value.trim();

//     alert(`Full Name: ${nameValue}\nEmail: ${emailValue}\nPhone Number: ${phoneValue}`)
// })