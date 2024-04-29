/**
 * Use strict mode: You can add the "use strict" directive at the beginning of your JavaScript file or at the beginning of a function. Strict mode enforces a stricter behavior and helps catch common coding errors. For example, in strict mode, you cannot use undeclared variables, delete variables or functions, or duplicate parameter names in function declarations. Using strict mode is generally recommended as it can help you write better, more secure code
 */

"use strict";

// This will throw an error in strict mode
x = 3.14; // Uncaught ReferenceError: x is not defined

// This will also throw an error in strict mode
function duplicate(p1, p1) {
    // Duplicate parameter name not allowed in strict mode
}