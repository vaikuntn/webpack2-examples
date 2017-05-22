require("../styles/styles.scss");

const dress = () => {
    document.write(" hello, Webpack check testing iwth es6 ");
}

dress();


class Car {
    manufacturer(car) {
        document.write(`I have a ${car}`);
    }
}

const bmw = new Car;
bmw.manufacturer("BMW");
