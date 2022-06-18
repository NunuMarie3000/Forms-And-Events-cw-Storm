'use strict';

//get form from html
let registerForm = document.getElementById('registration-form');


// function registerAndPrint(e){

//     e.preventDefault();
//     //reference div we're gonna place response in
//     let printHere = document.getElementById('print-response-here'); 
//     printHere.textContent = document.getElementById('fname').value;
//     // //we can reset the form
//     registerForm.reset(); 
// }

// registerForm.addEventListener('submit', registerAndPrint);

// //take data from form inputs and print it at the bottom of the screen
// // passing in e parameter for event
function registerAndPrint(e){
    //default behavior would be printing that info out in the url bar, we're stopping it from doing that
    e.preventDefault();
    //reference div we're gonna place response in
    let printHere = document.getElementById('print-response-here');
    //print each form value out, i'm sure i could use a loop, but it took me way to long to figure this out and i'm not gonna fix what ain't broke
    printHere.textContent =
    `First Name: ${document.getElementById('fname').value}
    Last Name: ${document.getElementById('lname').value}
    Username: ${document.getElementById('uname').value}
    Password: ${document.getElementById('pword').value}
    Email: ${document.getElementById('e-mail').value}
    Mobile No.: ${document.getElementById('number').value}
    City: ${document.getElementById('cities').value}
    `;
}
//adding an event listener to my form
//event = form being submitted
//function being called = registerAndPrint function
registerForm.addEventListener('submit', registerAndPrint);