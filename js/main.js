const name = document.querySelectorAll('#fname');
const lname = document.querySelectorAll('#lname');
const email = document.querySelectorAll('#email');
const pword = document.querySelectorAll('#pword');
const form = document.querySelector('.singup-form');
const div = document.querySelector('.singup-form-input-area');
const message = document.querySelector('.message');
const input = document.querySelectorAll('input.singup-form-input');

function send(){ 
   if(input.value = " "){
      input.placeholder = " ";
      form.classList.add('error');
      name.forEach( (content) => { content.classList.add('error')})
   }
   // if(lname.value = " "){
   //    form.classList.add('error');
   //    lname.forEach( (content) => { content.classList.add('error')})
   // }
   // if(email.value = " "){
   //    form.classList.add('error');
   //    email.forEach( (content) => { content.classList.add('error')})
   // }
   // if(pword.value = " "){
   //    form.classList.add('error');
   //    pword.forEach( (content) => { content.classList.add('error')})
   // }

   console.log(input)

}