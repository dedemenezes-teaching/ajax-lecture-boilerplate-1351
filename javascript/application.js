import Swal from 'sweetalert2';

// fetch(url, {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: // MUST BE A JSON STRING!
// })

// console.log(fetch(url))

// const url = "https://api.github.com/users/dhh"

// fetch(url)  // MAKES THE HTTP REQUEST AND CREATES THE PROMISE
//   .then(response => response.json()) // WAIT FOR THE PROMISE TO BE FULLFILLED AND parse it
//   .then((data) => {
//     console.log(data) // WAIT FOR PARSING, ALLOWING US TO MANIPULATE THE DATA
//   })



// console.log('Hello from line 12')

const signUp = (event) => {
  //1. PREVENT THE DEFAULT BEHAVIOR
  event.preventDefault();
  console.log(event)
  // 3. WHEN THE EVENT IS FIRED
  // 3.1. SELECT THE INPUTS
  const email = document.querySelector('#email')
  const password = document.querySelector('#password')
  // 3.2 RETRIEVE THE VALUES
  const emailValue = email.value
  const passwordValue = password.value
  // 3.3 SUBMIT THE FORM USING FETCH
  const options = {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: emailValue,
      password: passwordValue
    })
  }
  fetch('https://reqres.in/api/register', options)
    .then((response) => {
      if (response.status === 200) {
        // DISPLAY AN OK ALERT
        Swal.fire({ title: 'Success', text: 'You are connected', icon: 'success' })
      } else {
        // DISPLAY AN ERROR ALERT
        Swal.fire({ title: 'Error', text: 'Sorry, something went wrong.', icon: 'error' })
      }
    })
    // .then((data) => {
    //   console.log(data)
    // })
}


// 1. SELECT THE FORM TAG
const form = document.getElementById('form');
// 2. LISTEN TO THE SUBMIT EVENT (THIS EVENT HAPPENS ON THE FORM TAG)
form.addEventListener('submit', signUp)
