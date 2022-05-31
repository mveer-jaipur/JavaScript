// What are different types of JavaScript runtime errors
/**
 * Reference Error
 * Syntax Error
 * Type Error
 * Range Error
 * Internal Error
 * Eval Error
 * URI Error
 */

/**
 * @throws Reference error says 'x is not defined'.
 * When Javascript execution conext does not find the variable in memory means variable is not hoisted, it gives reference error.
 *
 */
// console.log(x);

/**
 * @throws Reference error says 'Cannot access 'a' before initialization'
 * When JavaScript execution context finds the variable in memory, means variable is hoisted but cannot access it due to other than defined context.
 * ex: In below example a is defined in some 'Script' reserved context and when accessing in console is in global context, Cannot access it.
 *
 *
// console.log(a);
// let a = 10;

/**
 * @throws SyntaxError: Identifier 'c' has already been declared
 * let is strict variable type. So if we try to assign initialize the same named variable,
 * Either IDE gives the compile error or browser gives the run time error.
 *
 */
// console.log(c);
// let c = 10;
// let c = 10;

/**
 * @throws SyntaxError: Missing initializer in const declaration
 * const is more strict variable type. You must have to initiazlie the value while declaring the variable.
 *
 *
 */
// try {
//     const d;
//     d = 10;
// } catch(e) {
//     console.log('Initializing a const value later - ', e instanceof SyntaxError)
// }

/**
 * @throws TypeError: num.toUpperCase is not a function
 * The TypeError object represents an error when attempting to use a value in an inappropriate way
 */
try {
  let num = 123;
  num.toUpperCase();
} catch (e) {
  console.log("Inappropriate method on number - ", e instanceof TypeError);
}

/**
 * @throws TypeError
 * The TypeError object represents an error when attempting to modify a value that cannot be changed
 */
const num1 = 30;
try {
  num1 = 50;
} catch (e) {
  console.log("Modify a constant value - ", e instanceof TypeError);
}
