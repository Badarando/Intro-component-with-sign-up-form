const name = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const pword = document.querySelector('#pword');
const form = document.querySelector('.singup-form');

console.log(name);

function send() {
   if(name.value = ""){
    form.classList.add('.error')
   }
}