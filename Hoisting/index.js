// Video Reference:  https://www.youtube.com/watch?v=Fnlnw8uY6jo
// Document Reference: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics

/**
 * variable hositing
 * During the JavaScript creation context all the variables gets initialized inside the memory with value undefined
 * So if we try to access it before initializating it, its value is undefined.
 *
 * @emits undefined
 */
console.log(x);
var x = 7;

/**
 * variable hositing
 * During the JavaScript creation context all the variables gets initialized inside the memory with value undefined
 * but let or const variable is said to be in a "temporal dead zone" (TDZ) from the start of the block until code execution
 * reaches the line where the variable is declared. So if we try to access any let or const in TDZ, it would throw an error
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz
 *
 * @emits ReferenceError: Cannot access 'y' before initialization
 */
console.log(y);
let y = 7;

/**
 * Function hositing
 * During the JavaScript creation context all the functions get initiazlied inside the memory with the function defination as value
 * default value will be function defination if the function is created in 'function declaration or function statement' way
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#defining_functions
 * So if we try to access it before its defination, due to hoisting we can access the function.
 *
 * @emits 'hello world'
 * @emits fn getSimpleFn() {}
 */
getSimpleFn();
console.log(getSimpleFn);
function getSimpleFn() {
  console.log("hello world");
}

/**
 * Function hositing
 * During the JavaScript creation context all the functions get initiazlied inside the memory with the function defination as value
 * default value will be undefined if the function is created in 'function expression' way
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_expressions
 * So if we try to access it before its defination, due to hoisting as a variable with undefined value will throw an error 'getArrowFn is not a function'.
 *
 * @emits 'getArrowFn is not a function'
 * @emits undefined
 */
// getArrowFn();
// console.log(getArrowFn);
// var getArrowFn = () => {
//   console.log("hello arrow function!!");
// };

getArrowFn();
var getArrowFn = () => {
  console.log("hello arrow function!");
};

/**
 * Function hositing
 * By using the latest ES6 let or const if we try to access the defination before its initialization means under its temproral dead zone,
 * you will receive the error 'Cannot access 'getArrowFn2' before initialization'
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz
 * So if we try to access it before its initialization, due to TDZ will throw an error 'Cannot access 'getArrowFn2' before initialization'.
 *
 * @emits 'Cannot access getArrowFn2 before initialization'
 * @emits undefined
 */

getArrowFn2();
let getArrowFn2 = () => {
  console.log("hello arrow function 2!");
};
