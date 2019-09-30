// Static Methods

class Mato {
    sqrt(x) {
        console.log(x * x);
    }
    static cube(x) {
        console.log(x * x * x);
    }
}

const math = new Mato();
console.log(math);
math.cube(4);


Mato.cube(3);
console.log(Math.sqrt(5));
