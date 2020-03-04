// The rest of function arguments
// El parametro REST tiene que ser el ultimo en los argumentos

function sum(arg1, arg2, ...restArgs) {
    console.log(arg1 + arg2);
    console.log(restArgs);
}

sum(1, 2, 3, 4, 5, 6, 7, 8);
