// Destructuracion de objetos con diferente nombre de variables

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let {title: t, width: w, height: h} = options;

console.log(t);
console.log(w);
console.log(h);
