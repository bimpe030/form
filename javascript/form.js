$('#submitButton').click( function () {
  var FirstHello = '';
  

if($('#first').val() == ""){
  FirstHello = "First Name cannot be empty";
  $('#firstMissing').html(FirstHello);
}

});




// $().readyfunction{

// }


// $( "#form" ).rules( "add", {
//   required: true,
//   minlength: 2,
//   messages: {
//     required: "First name cannot be empty",
//     minlength:"Please, at least {0} characters are necessary"
//   }
// });


// $("#form").validate({
//     rules:{
//         name:{
//             minlength: 2
//         }
//     },

//     messages: {
//     required: "First Name cannot be empty",
//     minlength: "Please at least 2 characters are necessary"
//   },

//   submitHandler: function(form) {
//     form.submit();
//   }
//  });






// const form = document.getElementById('form');
// const firstname = document.getElementById('firstname');
// const lastname = document.getElementById('lastname');
// const email = document.getElementById('email');
// const password = document.getElementById('password');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     checkInputs();
// });

// function checkInputs() {
//     const firstnameValue = firstname.value.trim();
//     const lastnameValue = lastname.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
 
//     if(firstnameValue === '' ){
//         setErrorFor(firstname);
//     } 
// }

// function setErrorFor(input, message) {
//     const formControl = input.parentElement;
//     const small = formControl.querySelector('small');

//     small.innerText = message; 

//     formControl.classname = 'formcontrol error';
// }

// const setError = (element, message) => {
//     const formControl = element.parentElement;
//     const errorDisplay = formControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     formControl.classList.add('error'); 
// }

// const validateInputs = () => {
//     const firstname = firstname.value.trim();
//     const lastname = lastname.value.trim();
//     const email = email.value.trim();
//     const password = password.value.trim();

//     if(firstnameValue === ''){
//         setError(firstname, 'First Name cannot be empty');
//     }
// };

// // const setError = (element, message) => {
// //     const formControl = element.parentElement;
// //     const errorDisplay = formControl.querySelector('.error');

// //     errorDisplay.innerText = message;
// //     formControl.classList.add('error'); 
// // }

// // const validateInputs = () => {
// //     const firstname = firstname.value.trim();
// //     const lastname = lastname.value.trim();
// //     const email = email.value.trim();
// //     const password = password.value.trim();

// //     if(firstnameValue === ''){
// //         setError(firstname, 'First Name cannot be empty');
// //     }
// // };