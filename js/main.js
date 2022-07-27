const name = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const pword = document.querySelector('#pword');

console.log(name);

function send() {
    if (name.value == "") {
        name.style.border = '1px solid red';
        name.style.backgroundImage = 'url(../../images/icon-error.svg)';
        name.style.backgroundRepeat = 'no-repeat';
    }
}