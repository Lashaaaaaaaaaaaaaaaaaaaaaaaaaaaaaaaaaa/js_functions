function legvi(a, b){
    if(a === b ){
        return 'ტოლია'
    }else{
        return 'არ არის ტოლი'
    }
}

console.log(legvi(9, 9))
console.log(legvi(1, 9))
console.log(legvi("9", 9))
console.log(legvi("Pretty", "Pretty"))





function fahrenheitToCelsius(temp) {
    if(typeof temp !== 'number') 
        return false
    return (temp - 32) / 1.8
}


console.log(fahrenheitToCelsius(190))
console.log(fahrenheitToCelsius('190'))





function calculate(a, b, operation){
    if(typeof a !== 'number' || typeof b !== 'number') {
        return false
    }

    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return false; 
    }
}


console.log(calculate(1, 8, '+'));
console.log(calculate(10, 3, '-'));
console.log(calculate(9, 9, '*'));
console.log(calculate(81, 9, '/'));
console.log(calculate(1, '1', '+'));
console.log(calculate(9, 1, '^'));