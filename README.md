# TypeScript: Handling undefined in string | null

This example demonstrates a common TypeScript error when dealing with optional parameters or values that might be undefined. The function `printName` expects a parameter of type `string | null`, but passing `undefined` to it throws a type error.

The solution shows how to handle the `undefined` case either by explicitly checking for it or by using a more permissive type such as `string | null | undefined`.