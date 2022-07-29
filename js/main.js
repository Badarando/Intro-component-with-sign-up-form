const name = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const pword = document.querySelector('#pword');

const form = document.querySelector('.singup-form');
const div = document.querySelector('.singup-form-input-area');
const message = document.querySelector('.message');
const input = document.querySelector('#input');

const fnameBack = document.querySelectorAll('.fname');
const lnameBack = document.querySelectorAll('.lname');
const emailBack = document.querySelectorAll('.email');
const pwordBack = document.querySelectorAll('.pword');




function send(){ 
   if(name.value == ""){
      name.placeholder = "";
      form.classList.add('error');
      fnameBack.forEach( (content) => { content.classList.add('error')});
   }

   if(lname.value == ""){
      lname.placeholder = "";
      form.classList.add('error');
      lnameBack.forEach( (content) => { content.classList.add('error')});
   }
   if(email.value == ""){
      email.placeholder = "";
      email.style.color = "hsl(0, 100%, 74%)"
      email.value = "email@example/com"
      form.classList.add('error');
      emailBack.forEach( (content) => { content.classList.add('error')});
   }
   if(pword.value == ""){
      pword.placeholder = "";
      form.classList.add('error');
      pwordBack.forEach( (content) => { content.classList.add('error')});
   }

}