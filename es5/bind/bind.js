const myModule = {
    x: 42,
    getX: function() {
        return this.x;
    }
};

const unboundGetX = myModule.getX;
console.log(unboundGetX()); // output: undefined

const boundGetX = unboundGetX.bind(myModule);
console.log(boundGetX()); // output: 42
