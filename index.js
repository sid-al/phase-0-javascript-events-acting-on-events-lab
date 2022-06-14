// // Your code here
// const dodger = document.getElementById('dodger');

const style = require("jsdom/lib/jsdom/level2/style");
const { doc } = require("mocha/lib/reporters");

// dodger.style.backgroundColor = "#FF69B4";

// dodger.style.bottom = '0px'

// // document.addEventListener('keydown', function(event){
// //     console.log(event);
// // i

// // when keydown event is ditected, check if it has a value ''Arrowleft if not  
// document.addEventListener('keydown', function(event){
//     if (event.key === 'Arrowleft'){
//         const leftNumbers = dodger.style.left.replace('px', ''); // strip out 'px', store result in leftNumbers
//         const left = parseInt(leftNumbers, 10); // turn to interger and store it at left

//         dodger.style.left = `${left-1}px`
//     }
// });

// document.addEventListener('keydown', function(e){
//     if (e.key === 'ArrowLeft'){
//         moveDodgerLeft();
//     }
// });

// dodger.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowLeft") {
//       moveDodgerLeft();
//     }
//     else moveDodgerRight();
//   });

// function moveDodgerLeft() {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);
  
//     if (left > 0) {
//         dodger.style.left = `${left - 1}px`;
//     }
//   }

//   function moveDodgerRight(){
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);
  
//     if (left > 0) {
//         dodger.style.left = `${left + 1}px`;
//     }
//   }

// const dodger = document.getElementById('dodger');

dodger.style.backgroundColor = "#FF69B4";
// accessing the style property is used to things like, backgroundcolor, height, width

// move the element up
dodger.style.bottom = '100px';

// moving na element in respons to a browser event 

// keydown event provides a code to indicate which key it was.

// Anytime an event listner is in place and the event it's listening fir is triggered,
//  a js object  with a code of info about the event is automatically passed as an argument to the callback f();
// the object and the info it contains is accessed by def an argument for the callback f()

// document.addEventListener('keydown', function(event){
//   console.log(event);
// });

// event argument gives the callback access to the event object 
// which is what allows it log on the console.

// write the code to move the dodger left when the key is pressed.

// document.addEventListener('keydown', function(e){
//   if (e.key === 'Arrowleft'){
//     const leftNumbers = dodger.style.left.replace('px', '');
//     const left = parseInt(leftNumbers, 10);
    
//     dodger.style.left = `${left - 1}px`;
//   }
// });
//when keydown e is detected check to see if wether the key property of e has the value 'Arrowleft'
// if it does get value of dodger's style.left property use replace() to strip out the px, and store the result in leftNumbers.
// parse leftNumbers as an interger and store in left
// finally update dodger's style.lft using interpolation, injecting the current value - 1,


// Update an Element's Position on the Page Conditionally
// move the dodger left if the if statement returns true;


const dodger = document.getElementById('dodger');

function moveDodgerLeft(){
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
// style.right won't work because changing style.right dosen't change style.left
// which is conflicting with where the dodger should be on the screen

function moveDodgerRight(){
  const rightNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(rightNumbers, 10);

  if (left < 360) {
    dodger.style.left = `${left+1}px`
  }
}

document.addEventListener('keydown', function(e){
  if (e.key === 'ArrowLeft'){
    moveDodgerLeft()
  }
});

document.addEventListener('keydown', function(e){
  if (e.key === 'ArrowKey'){
    moveDodgerRight()
  }
});
