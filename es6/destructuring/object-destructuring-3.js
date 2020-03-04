// Destructuracion de objetos con parametros anidados

let options = {
    title: "Menu",
    width: 100,
    height: 200,
    colors: {
        red: 'red',
        black: 'black',
        orange: 'orange'
    }
};

let {title, width, height, colors: {red, black: b, orange}} = options;

console.log(title);
console.log(width);
console.log(height);
console.log(red);
console.log(b);
console.log(orange);
